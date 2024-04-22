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

export function deleteUser(req, res, id) {
    if (userServices.deleteUser(id)) {
        res.render("verUsuarios", {
            pageTitle: 'User list',
            users: userServices.getAll()
        });
    } else {
        res.render("verUsuarios", {
            pageTitle: 'Nenhum usuário foi deletado.',
            users: userServices.getAll()
        });
    }
}

export function viewProfile(req, res, id){
    const __user = userService(id)
    if (user !== undefined){
        res.render("viewProfile", {
            pageTitle: 'Profile',
            user: __user
        })
    }
}