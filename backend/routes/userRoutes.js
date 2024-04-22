import { Router } from "express";
import{
    getUsers,
    createUser,
    deleteUser,
} from "../controllers/controller.js";

const userRouter = Router()

userRouter.get("/getUsers", getUsers)

userRouter.route("/createUsers")
    .get((req,res) =>{
        res.render('createUser',{
            pageTitle: 'Create User'
        })
    })
    .post((req, res) => {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        
        createUser(req, res, username, email, password);
    })

userRouter.route("/deleteUser")
    .get((req, res) => {
        res.render("deleteUser", {
            pageTitle: 'Delete User'
        });
    })
    .post((req, res) => { 
        const userId = req.body.id;
        deleteUser(req, res, userId);
    });

export default userRouter;