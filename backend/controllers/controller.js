import userService from "../services/services.js"
import express from 'express';
const userServices = new userService()

export function getUsers(_, res) {
    res.render('verUsuarios', {
        pageTitle: 'User list',
        users: userServices.getAll()
    });
}

export function viewProfile(req, res) {
    const userId = req.params.id; 
    const user = userServices.viewProfile(parseInt(userId));
    if (user !== -1) {
        res.render("viewProfile", {
            pageTitle: "Profile",
            user: user
        });
    } else {
        res.status(404).send("Usuário não encontrado");
    }
}


export function createUserForm(req, res) {
         res.render('createUser', {
        pageTitle: 'Create User'
    })
}
export function createUser(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    userServices.createUser(username, email, password);
    res.redirect("/users/getUsers");
}





export function deleteUserForm(req, res) {
    res.render("deleteUser", {
        pageTitle: 'Delete User'
    })
}

export function deleteUser(req, res) {
    const userId = req.body.id;
    userServices.deleteUser(userId);
    res.redirect("/users/getUsers");
}


export function updateProfileForm(req, res) {
    const userId = req.params.id;
    console.log("estou no form")
    res.render("updateUser", {
        pageTitle: 'Atualizar Informações',
    });
}


export function updateProfile(req, res) {
    const newUserName = req.body.username;
    const newEmail = req.body.email;
    const id = req.params.id;
    userServices.updateProfile(id, newUserName, newEmail);
    res.redirect("/users/getUsers");
}