import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    fullName : {
        type:String,
        required : true,
    },
    password : {
        type : String,
        required : true,
        minlenght: [8, "At least 8 characters required"],
    },
    role : {
        type : String,
        required : true,
        enum : ["user", "admin"]
    },
    email : {
        type : String,
        required : true
    },
    avatar : {
        type : String,
    }

},{timestamps:true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcryptjs.hash(this.password, 10);
})

userSchema.methods.comparePassword = async function(password){
    return await bcryptjs.compare(password,this.password)
}