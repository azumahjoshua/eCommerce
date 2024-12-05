import { Router } from "express";
import { loginController, logoutController, refreshToken, registerUserController, resetpassword, updateUserDetails, uploadAvatar, userDetails, verifyEmailController, verifyForgotPasswordOtp } from "../controllers/user.controller.js";
import auth from "../middleware/auth.js"
import upload from "../middleware/multer.js";
const userRouter = Router()
userRouter.post("/register",registerUserController)
userRouter.post("/verify-email",verifyEmailController)
userRouter.post("/login",loginController)
userRouter.get("/logout",auth,logoutController)
userRouter.put("/upload-avater",auth,upload.single("avater"),uploadAvatar)
userRouter.put("/update-user",auth,updateUserDetails)
userRouter.put("/verify-forgot-password-opt",verifyForgotPasswordOtp)
userRouter.put("/reset-password",resetpassword)
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details',auth,userDetails)
export default userRouter