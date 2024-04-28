import { Router } from "express";
import{
    getUsers,
    createUser,
    deleteUser,
    viewProfile,
    updateProfile
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
            pageTitle: 'Delete User',
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
        const userId = req.params.id; //params é uma informação que esta na URL
        res.render("viewProfile",{
            pageTitle: 'Profile',
            user: viewProfile(userId)
        })
    })

userRouter.route('/updateUser/:id')
    .get((req, res) => {
        console.log("estou na rota")
        res.render("updateUser",{
            pageTitle: 'atualizar dados'
        })
    })
    .post((req, res) =>{
        const newUserName = req.body.username;
        const newEmail = req.body.email;
        const id = req.params.id;
        updateProfile(id, newUserName, newEmail);
        res.redirect(id)
    })

export default userRouter;