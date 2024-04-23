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
        console.log('recebi o id do formulário')
        res.render("verUsuarios", {
            pageTitle: "Users List",
            // aqui eu estou trabalhando com a função da controller, onde o retorno é uma lista
            // como não estou armazenando esses dados em uma variável eu tive que tratar como essa sintaxe: deleteUser(userId)[0]
            // imagine que isso é o mesmo que:
            // variavel_em_memória = deleteUser(userId)[0]
            // variavel_em_memória[0]
            // é literalmente a mesma coisa, porém simplificada, é impossivel declarar uma variavel em memória enquanto
            // renderizamos um template por antes de qualquer ação no site os templates são renderizados, logo, é impossível
            // renderizar uma variável que não foi declarada.
            // essa é a strack trace do que aconteceria se nós não fizessemos isso: `ReferenceError: variavel_em_memória is not defined`
            users: deleteUser(userId)[0],
            msg: deleteUser(userId)[1]
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