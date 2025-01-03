import {Router} from 'express'
import {verifyJWT} from '../middlewares/auth.middleware.js'
import { addToCart, getUserCart } from '../controllers/cart.controller.js';

const router = Router();

router.post("/addToCart", verifyJWT, addToCart);
router.get("/getUsercart", verifyJWT, getUserCart)

export default router;