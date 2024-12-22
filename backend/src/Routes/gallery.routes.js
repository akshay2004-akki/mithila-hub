import { Router } from "express";
import { getProductsByCategory,  getAllItems, addProducts } from "../controllers/gallery.controller.js";
import { verifyAdmin } from "../middlewares/admin.middlware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/addproducts",verifyJWT,verifyAdmin,upload.fields([{ name: "image", maxCount: 5 }]) ,addProducts)
router.get("/categories/:category", getProductsByCategory);
router.get("/", getAllItems) 


export default router