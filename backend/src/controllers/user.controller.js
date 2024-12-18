import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary";
import asyncHandler from '../utils/asyncHandler.js'


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