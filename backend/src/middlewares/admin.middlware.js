import { isValidObjectId } from "mongoose";
import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

export const verifyAdmin = asyncHandler(async(req,res, next)=>{
    const userId = req.user?._id
    console.log(userId)

    if(!isValidObjectId(userId)){
        throw new ApiError(400, "Invalid User") 
    }

    try {
        const user = await User.findById(userId)
        if(!user){
            throw new ApiError(404, "User not found")
        }

        if(user.isAdmin){
            next();
        }else{
            throw new ApiError(400,"You are not an Admin")
        }
    } catch (error) {
        throw new ApiError(400, error.message)
    }
})