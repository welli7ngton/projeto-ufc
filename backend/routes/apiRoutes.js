import { Router } from "express";
import userServices from "../services/services"
import{
    getAll
} from "../controllers/controller";

const userRouter = Router()

userRouter.get("/verUsuarios", getAll)

export default userRouter;