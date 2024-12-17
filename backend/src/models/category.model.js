import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensures category names are unique
        enum: ["Saree", "Chunri", "Canvas", "Bed Sheet"], // Predefined categories
    },
    description: {
        type: String,
        required: false,
    },
}, { timestamps: true });

export const Category = mongoose.model("Category", categorySchema);
