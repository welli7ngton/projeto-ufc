import userModel from "../models/user.js";
import bodyParser from 'body-parser';

class userService {
    constructor() {
        this.myUsers = [
            new userModel("joaozinho", "joao@gmail.com", "235656"),
            new userModel("maria", "maria@gmail.com", "235656"),
            new userModel("gton", "jgton@gmail.com", "235656"),
            new userModel("ueliton", "ueliton@gmail.com", "235656"),
            new userModel("marin", "karin@gmail.com", "235656")
        ];
    }

    getAll() {
        console.log(this.myUsers)
        return this.myUsers;
    }

    createUser(userName, email, password) {
        //console.log(this.myUsers.length);
        this.myUsers.push(new userModel(userName, email, password));
        //console.log(this.myUsers.length);
        return 'usuário criado';
    }
}
    

export default userService;
