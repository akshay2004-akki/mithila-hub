import { isValidObjectId } from "mongoose";
import { Cart } from "../models/cart.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const addToCart = asyncHandler(async(req,res)=>{
    const {productId} = req.body
    const userId = req.user?._id;
    console.log(userId, productId);
    
    if(!isValidObjectId(userId) || !isValidObjectId(productId)){
        throw new ApiError(400, "Invalid User or Product Id");
    }

    const existingUserCart = await Cart.findOne({user:userId})

    if(existingUserCart){
        if(existingUserCart.products.includes(productId)){
            return res.status(400).json(new ApiResponse(400, "Item Already exist"))
        }

        existingUserCart.products.push(productId);
        await existingUserCart.save({validateBeforeSave:false});
        return res.status(200).json(new ApiResponse(200, existingUserCart, "Product Added Successfully"))
    }

    const newUserCart = await Cart.create({
        user:userId,
        products : [productId]
    })

    return res.status(201).json(new ApiResponse(201, newUserCart, "Product Added Succesfully"))
    
})

export const removeFromCart = asyncHandler(async(req,res)=>{
    const {productId} = req.body;
    
})