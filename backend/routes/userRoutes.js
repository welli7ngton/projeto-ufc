import { Router } from "express";
import{
    getUsers
} from "../controllers/controller.js";

const userRouter = Router()

userRouter.get("/getUsers", getUsers)

export default userRouter;