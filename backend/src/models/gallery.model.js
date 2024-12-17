import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      enum: ["In Stock", "Out of Stock", "Pre-Order"],
      default: "In Stock",
    },

    image: {
      type: [String],
      required: true,
    },
    category: {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Category",
      required : true
    },
    price: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number, // Average rating
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to user
        reviewText: { type: String, required: true },
        rating: { type: Number, min: 0, max: 5, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export const Gallery = mongoose.model("Gallery", gallerySchema);
