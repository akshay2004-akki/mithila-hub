import { Router } from "express";
import { getProductsByCategory,  getAllItems, addProducts } from "../controllers/gallery.controller.js";
import { verifyAdmin } from "../middlewares/admin.middlware.js";

const router = Router();

router.post("addproducts", verifyAdmin,upload.fields([{ name: "image", maxCount: 5 }]) ,addProducts)
router.post("categories/:category", getProductsByCategory);
router.post("/gallery", getAllItems)


export default router