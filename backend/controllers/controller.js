import userService from "../services/services.js"


const userServices = new userService()

export function getUsers() {
    return userServices.getAll()
}

export function createUser(userName, email, password) {
    return userServices.createUser(userName, email, password)
}

export function deleteUser(id) {
    const users = userServices.getAll();
    const index = this.myUsers.findIndex(u => u.id === id);
    if (index !== -1){
        return userServices.deleteUser(id)
    } else {
        console.log("NÃO APAGOU")
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