import { Router } from "express";
import {
    getUsers,
    createUser,
    deleteUser,
    viewProfile,
    updateProfile,
} from "../controllers/userController.js";


const userRouter = Router()

userRouter.get("/getUsers", getUsers);
userRouter.get("/viewProfile/:id", viewProfile)
userRouter.post("/createUser", createUser);
userRouter.delete("/deleteUser", deleteUser);
userRouter.put("/updateUser/:id", updateProfile)


export default userRouter;
