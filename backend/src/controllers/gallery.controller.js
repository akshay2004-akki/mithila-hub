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

export const getProductsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 10 } = req.query; // Default to page 1, limit 10

  if (!["Saree", "Chunri", "Canvas", "Bed Sheet"].includes(category)) {
    throw new ApiError(400, "Invalid category name");
  }

  const skip = (page - 1) * limit;

  const galleryItems = await Gallery.find({ category })
    .skip(skip)
    .limit(parseInt(limit)); // Pagination logic

  const totalItems = await Gallery.countDocuments({ category });

  if (!galleryItems.length) {
    throw new ApiError(404, "No items found");
  }

  res.status(200).json(
    new ApiResponse(200, {
      items: galleryItems,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: parseInt(page),
    }, "Category Items fetched successfully")
  );
});

export const getAllItems = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Default to page 1, limit 10

  const skip = (page - 1) * limit;

  const items = await Gallery.find({})
    .skip(skip)
    .limit(parseInt(limit)); // Pagination logic

  const totalItems = await Gallery.countDocuments();

  res.status(200).json(
    new ApiResponse(200, {
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: parseInt(page),
    }, "Items fetched successfully")
  );
});
