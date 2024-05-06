import { Router } from "express";
import{
    getUsers,
    createUser,
    // createUserForm,
    // deleteUserForm,
    deleteUser,
    viewProfile,
    // updateProfileForm,
    updateProfile,
    // userNotFound
} from "../controllers/userController.js";


const userRouter = Router()

userRouter.get("/getUsers", getUsers);
userRouter.route("/viewProfile/:id")
    .get(viewProfile)
    .post(viewProfile);
// userRouter.get("/createUser", createUserForm);
userRouter.post("/createUser", createUser);
// userRouter.get("/deleteUser", deleteUserForm);
userRouter.delete("/deleteUser", deleteUser);
userRouter.route("/updateUser/:id")
    // .get(updateProfileForm)
    .post(updateProfile);
// userRouter.get("/notFound", userNotFound);

export default userRouter;
