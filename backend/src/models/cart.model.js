import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Gallery"
    }]
},{timestamps:true})

export const Cart = mongoose.model("Cart", cartSchema);