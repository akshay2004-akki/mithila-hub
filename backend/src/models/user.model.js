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
    isAdmin : {
        type : boolean,
        default : false
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    avatar : {
        type : String,
    },
    refreshToken : {
        type : String,
        required : true
    }

},{timestamps:true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcryptjs.hash(this.password, 10);
})

userSchema.methods.comparePassword = async function(password){
    return await bcryptjs.compare(password,this.password)
}

userSchema.methods.getAccessToken = async function(){
    const token = jwt.sign({
        _id : this._id,
        email : this.email,
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn: process.env.ACCESS_TOKEN_EXPIRY});
    return token
}

userSchema.methods.getRefreshToken = async function(){
    const token = jwt.sign({
        _id : this._id,
        isAdmin : this.isAdmin 
    }, process.env.REFRESH_TOKEN_SECRET, {expiresIn:REFRESH_TOKEN_EXPIRY});
    return token
}

userSchema.methods.verifyAdmin = async function(){
    return this.isAdmin;
}

export const User = mongoose.model("User", userSchema)