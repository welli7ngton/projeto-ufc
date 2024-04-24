import userService from "../services/services.js"


const userServices = new userService()

export function getUsers() {
    return userServices.getAll()
}

export function createUser(userName, email, password) {
    return userServices.createUser(userName, email, password)
}

export function deleteUser(id) {
    console.log('estou dentro da controller')
    const users = userServices.getAll();

    const index = users.findIndex(u => u.id == id);
    console.log(index)
    if (index !== -1){
        userServices.deleteUser(index)
        return 'Usuário deletado'
    } else {
        return 'Nenhum usuário foi deletado.'
    }
}

export function viewProfile(id){
    const __user = userService(id)
    if (user !== undefined){
        res.render("viewProfile", {
            pageTitle: 'Profile',
            user: __user
        })
    }
}