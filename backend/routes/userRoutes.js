import { Router } from "express";
import{
    getUsers,
    createUser
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
        // Processar os dados do formulário
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        
        // Chamar createUser no controlador com os dados do usuário
        createUser(req, res, username, email, password);
    });

export default userRouter;