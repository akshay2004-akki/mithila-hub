import { Gallery } from "../models/gallery.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const addProducts = asyncHandler(async(req,res)=>{
    const {productName, description, category, price, availability, count=1} = req.body;
    const image = req.files?.image?.map((file) => file.path);

    if([productName, description, category, price, availability, count].some(field=>field.trim()==="")){
        res.status(400).send("Fill all the fields");
        throw new ApiError(400, "Fill all the fields");
    }
    const existedProduct = await Gallery.findOne({productName, category});

    if(existedProduct){
        try {
            existedProduct.count+=count;
            await existedProduct.save({validateBeforeSave:false});
            return res.status(200).json({ message: "Product count updated", product: existedProduct });
        } catch (error) {
            throw new ApiError(400, error.message);
        }
    }

    try {
        const newProduct = await Gallery.create({
            productName,
            description,
            category,
            price,
            count,
            availability : count>0 ? "In Stock" : "Out of Stock",
            image
        })
        return res.status(201).json({ message: "Product added", product: newProduct });
    } catch (error) {
        throw new ApiError(500, error.message)
    }
})

export const getProductsByCategory = asyncHandler(async(req,res)=>{
    const {category} = req.params;

    if(!["Saree", "Chunri", "Canvas", "Bed Sheet"].includes(category)){
        throw new ApiError(400, "Invalid category name");
    }

    const galleryItems = await Gallery.find({category});

    if(!galleryItems){
        throw new ApiError(404,"No items found");
    }

    res.status(200).json(new ApiResponse(200, galleryItems, "Category Items fetched successfully"))

})

export const getAllItems = asyncHandler(async(req,res)=>{
    const items = await Gallery.find();
    res.status(200).json(new ApiResponse(200, items, "Items fetched successfully"))
})