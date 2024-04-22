import { Router } from "express";
import{
    getUsers,
    createUser,
    deleteUser,
    viewProfile
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

userRouter.route('/Profile')
    .get((req, res, id) => {
        res.render("viewProfile",{
            pageTitle: 'Profile',
            user: viewProfile(id)
        })
    })

export default userRouter;