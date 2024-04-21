import { Router } from "express";
import{
    getUsers,
    createUser
} from "../controllers/controller.js";

const userRouter = Router()

userRouter.get("/getUsers", getUsers)

userRouter.get("/createUsers", createUser)

export default userRouter;