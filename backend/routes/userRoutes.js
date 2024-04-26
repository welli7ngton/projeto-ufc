import { Router } from "express";
import{
    getUsers,
    createUser,
    deleteUser,
    viewProfile
} from "../controllers/controller.js";

const userRouter = Router()

userRouter.route("/getUsers")
    .get((req, res) =>{
        res.render("verUsuarios",{
        pageTitle: 'User list',
        users: getUsers()
        })
    })
    .post((req, res) =>{
        const userId = req.body.id;
        res.redirect(`profile/${userId}`);
    })
    
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
        createUser(username, email, password);
        res.redirect("getUsers")
    })

userRouter.route("/deleteUser")
    .get((req, res) => {
        res.render("deleteUser", {
            pageTitle: 'Delete User'
        });
    })
    .post((req, res) => { 
        const userId = req.body.id;
        res.render("deleteUser", {
            pageTitle: "Users List",
            msg: deleteUser(userId)
        })
    });

userRouter.route('/profile/:id')
    .get((req, res) => {
        const userId = req.params.id;
        res.render("viewProfile",{
            pageTitle: 'Profile',
            user: viewProfile(userId)
        })
    })

export default userRouter;