import {Router} from 'express'
import { registerUser, loginUser, logOutUser,} from '../controllers/user.controller.js'
import { upload } from "../middlewares/multer.middleware.js";
import {verifyJWT} from '../middlewares/auth.middleware.js'

const router = Router();

router.post("/register", registerUser)

router.post('/login', loginUser);
router.post("/logout", verifyJWT, logOutUser);

export default router;