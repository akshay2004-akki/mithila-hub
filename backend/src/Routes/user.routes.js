import {Router} from 'express'
import { registerUser, loginUser, logOutUser, getUserDetails,} from '../controllers/user.controller.js'
import { upload } from "../middlewares/multer.middleware.js";
import {verifyJWT} from '../middlewares/auth.middleware.js'

const router = Router();

router.post("/register", upload.fields([
    {
        name:"avatar",
        maxCount:1
    }
]),registerUser)

router.post('/login', loginUser);
router.post("/logout", verifyJWT, logOutUser);
router.get("/userdetails", verifyJWT, getUserDetails)

export default router;