import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config({
    path:"./.env"
})

const app = express();

app.use(cors({
    origin : [process.env.CORS_ORIGIN, "https://mithila-hub.onrender.com"],
    credentials : true
}))

app.use(cookieParser())
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true, limit:"20kb"}))
app.use(express.static("public"))

import userRouter from './Routes/user.routes.js'
import galleryRouter from './Routes/gallery.routes.js'
import cartRouter from './Routes/cart.routes.js'

app.use("/api/v1/users", userRouter)
app.use("/api/v1/gallery", galleryRouter)
app.use("/api/v1/cart", cartRouter)

export default app;