import { Router } from "express";
import { getProductsByCategory,  getAllItems, addProducts } from "../controllers/gallery.controller.js";
import { verifyAdmin } from "../middlewares/admin.middlware.js";

const router = Router();

router.post("/addproducts", verifyAdmin,upload.fields([{ name: "image", maxCount: 5 }]) ,addProducts)
router.get("/categories/:category", getProductsByCategory);
router.get("/", getAllItems)


export default router