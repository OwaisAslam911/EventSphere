import express from 'express'
import userController from '../Controllers/UserController.mjs';

const UserRouter= express.Router();

// productRouter.get("route",function)
UserRouter
//get requests
.get("/",userController.index)


//post requests
.post("/signup",userController.Signup)
.post("/login",userController.Login)
.post("/sendmail",userController.sendEmail)


export default UserRouter;