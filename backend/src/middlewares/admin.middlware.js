import { isValidObjectId } from "mongoose";
import { User } from "../models/user.model";
import asyncHandler from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";

export const verifyAdmin = asyncHandler(async(req,res)=>{
    const userId = req.user?._id;

    if(!isValidObjectId(userId)){
        throw new ApiError(400, "Invalid User")
    }

    try {
        const user = await User.findById(userId)
        if(!user){
            throw new ApiError(404, "User not found")
        }
        return user?.isAdmin;
    } catch (error) {
        throw new ApiError(400, error.message)
    }
})