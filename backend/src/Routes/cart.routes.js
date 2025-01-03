import {Router} from 'express'
import {verifyJWT} from '../middlewares/auth.middleware.js'
import { addToCart } from '../controllers/cart.controller.js';

const router = Router();

router.post("/addToCart", verifyJWT, addToCart);

export default router;