import userService from "../services/services.js"

const userServices = new userService()

export function getUsers(req, res) {
    res.render("verUsuarios",{
        pageTitle: 'User list',
        users: userServices.getAll()
    })
}

export function createUser(req, res, userName, email, password) {
    res.render("createUser",{
        pageTitle: 'Create User',
        msg: userServices.createUser(userName, email, password)
    })
}