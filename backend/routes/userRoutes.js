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
        res.render("verUsuarios", {
            pageTitle: "Users List",
            users: deleteUser(userId),
            msg: "deu bom"
        })
    });

userRouter.route('/Profile')
    .get((req, res, id) => {
        res.render("viewProfile",{
            pageTitle: 'Profile',
            user: viewProfile(id)
        })
    })

export default userRouter;