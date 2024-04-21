import userModel from "../models/user.js";
import bodyParser from 'body-parser';

class userService {
    constructor() {}

    getAll() {
        const users = [
            new userModel("joaozinho", "joao@gmail.com", "235656"),
            new userModel("maria", "maria@gmail.com", "235656"),
            new userModel("gton", "jgton@gmail.com", "235656"),
            new userModel("ueliton", "ueliton@gmail.com", "235656")
        ];
        return users;
    
    }
    createUser(userName, email, password) {
        new userModel(userName, email, password);
        return 'usuário criado';
    }
}
    

export default userService;
