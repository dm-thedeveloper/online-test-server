import { Router } from "express";
import Register from "../controllers/user.controller.js";


const userRouter = Router()

userRouter.route("/reg").post(Register)

export default userRouter;
