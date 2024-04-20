import userModel from "../models/user";

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
}

export default userService;
