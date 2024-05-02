import { Router } from "express";
import services from "../services/services.js";
import{
    getUsers,
    createUser,
    createUserForm,
    deleteUserForm,
    deleteUser,
    viewProfile,
    updateProfileForm,
    updateProfile
} from "../controllers/controller.js";

const userRouter = Router()

userRouter.get("/getUsers", getUsers);
userRouter.route("/viewProfile/:id")
    .get(viewProfile)
    .post(viewProfile);
userRouter.get("/createUser", createUserForm);
userRouter.post("/createUser", createUser);
userRouter.get("/deleteUser", deleteUserForm);
userRouter.post("/deleteUser", deleteUser);
userRouter.route("/updateUser/:id")
    .get(updateProfileForm)
    .post(updateProfile);


export default userRouter;