import { Gallery } from "../models/gallery.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from '../utils/cloudinary.js' 

export const addProducts = asyncHandler(async(req,res)=>{
    const {productName, description, category, price, availability, count=1} = req.body;
    const image = req.files?.image?.map((file) => file.path);
    const newCount  = parseInt(count)
    if([productName, description, category, price, count].some(field=>field.trim()==="")){
        res.status(400).send("Fill all the fields");
        throw new ApiError(400, "Fill all the fields");
    }
    const existedProduct = await Gallery.findOne({productName, category});

    if(existedProduct){
        try {
            const count2=parseInt(existedProduct.count)
            existedProduct.count=newCount+count2;
            existedProduct.count > 0 ? existedProduct.availability = "In Stock" : existedProduct.availability = "Out of Stock"
            await existedProduct.save({validateBeforeSave:false});
            return res.status(200).json({ message: "Product count updated", product: existedProduct });
        } catch (error) {
            throw new ApiError(400, error.message);
        }
    }

    let imagePaths = [];
  if (req.files?.image) {
    try {
      const uploadPromises = req.files.image.map(async (file) => {
        const uploadedFile = await uploadOnCloudinary(file.path);
        if (uploadedFile) {
          return uploadedFile.secure_url;
        } else {
          throw new Error("Error uploading file to Cloudinary");
        }
      });

      imagePaths = await Promise.all(uploadPromises); 
    } catch (error) {
      throw new ApiError(500, "Error uploading images"); 
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
            image : imagePaths? imagePaths : ""
        })
        return res.status(201).json({ message: "Product added", product: newProduct });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
})

export const getProductsByCategory = asyncHandler(async(req,res)=>{
    const {category} = req.params;
    console.log(category);
    

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
    const items = await Gallery.find({});
    res.status(200).json(new ApiResponse(200, items, "Items fetched successfully"))
})