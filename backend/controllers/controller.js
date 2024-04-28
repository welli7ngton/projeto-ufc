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
    const index = users.findIndex(u => u.id == id);
    if (index !== -1){
        userServices.deleteUser(index)
        return 'Usuário deletado'
    } else {
        return 'Nenhum usuário foi deletado.'
    }
}

export function viewProfile(id){
    const user = userServices.viewProfile(parseInt(id));
    if (user !== -1){ //corrigir o erro dele nao existir 
       return user
    } else{

    }
}

export function updateProfile(id, userName, email){
    userServices.updateProfile(id, userName, email)
}