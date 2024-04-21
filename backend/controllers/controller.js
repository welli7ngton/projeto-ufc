import userService from "../services/services.js"

export function getUsers(req, res) {
    const userServices = new userService();
    res.render("verUsuarios",{
        pageTitle: 'User list',
        users: userServices.getAll()
    })
}

export function createUser(req, res, userName, email, password) {
    const userServices = new userService();
    res.render("createUser",{
        pageTitle: 'Create User',
        msg: userServices.createUser(userName, email, password)
    })
}