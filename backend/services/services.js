import userModel from "../models/user.js";

class userService {
    constructor() {
        this.myUsers = [
            new userModel("joaozinho", "joao@gmail.com", "235656", 1),
            new userModel("maria", "maria@gmail.com", "235656", 2),
            new userModel("gton", "jgton@gmail.com", "235656", 3),
            new userModel("ueliton", "ueliton@gmail.com", "235656", 4),
            new userModel("marin", "karin@gmail.com", "235656", 5)
        ];
    }

    getAll() {
        return this.myUsers;
    }

    createUser(userName, email, password) {
        const nextId = this.myUsers.length + 1;
        return  this.myUsers.push(new userModel(userName, email, password, nextId));
    }

    deleteUser(id) {
        this.myUsers.splice(id -1, 1)[0];
        return this.getAll()
    }

    viewProfile(id){        
        const index = this.myUsers.findIndex(u => u.id === id) 
        return this.myUsers[index]
    }

    updateProfile(id, username, email) {
        const userIndex = this.myUsers.findIndex(user => user.id === parseInt(id));
        if (userIndex !== -1) {
            this.myUsers[userIndex].userName = username;
            this.myUsers[userIndex].email = email;
        } else {
            return "Usuário não encontrado"
        }
    }
    
}

export default userService;