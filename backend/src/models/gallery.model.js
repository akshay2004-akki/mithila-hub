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
      enum: ["In Stock", "Out of Stock"],
      default: "In Stock",
    },

    image: {
      type: [String],
      required: true,
    },
    category: {
      type : String,
      enum : ["Saree","Canvas", "Bed Sheet", "Chunri"],
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
    count : {
      type : Number,
      default : 1,
      min : 0
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
gallerySchema.virtual("reviewCount").get(function () {
  return this.reviews.length;
});

// gallerySchema.pre("save", async function (next) {
//   try {
//     // Check if a product with the same name and category exists
//     const existingProduct = await mongoose.model("Gallery").findOne({
//       productName: this.productName,
//       category: this.category,
//     });

//     if (existingProduct) {
//       // If it exists, increment the count and skip saving a new product
//       existingProduct.count += this.count; // Increment count by the new product's count
//       await existingProduct.save();
//       return next(new Error("Duplicate product - count updated"));
//     }

//     // Proceed with saving if no duplicate is found
//     next();
//   } catch (error) {
//     next(error);
//   }
// });


export const Gallery = mongoose.model("Gallery", gallerySchema);
