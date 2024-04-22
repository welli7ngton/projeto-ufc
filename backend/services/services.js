import userModel from "../models/user.js";
import bodyParser from 'body-parser';

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
        this.myUsers.splice(id, 1)[0];
        return this.getAll()
    }

    vuewProfie(id){
        return user = this.myUsers.findIndex(u => u.id === id);
    }
}

export default userService;