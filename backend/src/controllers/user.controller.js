import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary";
import asyncHandler from '../utils/asyncHandler.js'

const getAccessAndRefreshToken = async (userId)=>{
    const user = await User.findById(userId);

    const accessToken = await user.getAccessToken();
    const refreshToken = await user.getRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({validateBeforeSave:false})

    return {refreshToken, accessToken};
}

export const registerUser = asyncHandler(async(req,res)=>{
    const {fullName, password, email} = req.body;

    if([fullName, password, email, avatar].some((field)=>field?.trim==="")){
        res.status(400).send("All fields are required")
        throw new ApiError(400,"All fields are required")
    }

    const existedUser = await User.findOne({email});
    if(existedUser){
        res.status(409).send("User already exist with this email")
        throw new ApiError("User already exist with this email")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    const avatar = await uploadOnCloudinary(avatarLocalPath) 

    const newUser = await User.create({
        fullName,
        email,
        password,
        role,
        avatar : avatar.secure_url
    })

    res.status(201).json(new ApiResponse(201,newUser,"User created successfully"))
})

export const loginUser = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;

    if([email,password].some(field=>field?.trim()==="")){
        res.status(400).send("Enter the required field")
        throw new ApiError(400,"Enter the required field")
    }

    const user = await User.findOne({email});

    if(!user){
        res.status(404).send("404 User Not Found")
        throw new ApiError(404,"404 User Not Found")
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect){
        res.status(409).send("Incorrect Password")
        throw new ApiError(409,"Incorrect Pasword")
    }

    const {refreshToken, accessToken} = await getAccessAndRefreshToken(user?._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly : true,
        secure : false,
        // sameSite : "strict",
        // sameSite:"strict"
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(200, loggedInUser, "User logged Successfully"))

}) 

export const logOutUser = asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(req.user?._id,
        {
            $unset : {
                refreshToken : 1
            }
        },
        {
            new : true
        }
    )
    const options = {
        httpOnly : true,
        secure : false,
        // sameSite : "strict",
    }

    return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(new ApiResponse(200,{}, "User logged out successfully"))
})