import userModel from "../models/user.js";
import conn from "../database/database.cjs"
import { response } from "express";

const errorHandler = (res, error) => {
    console.log('database error: ', error);
    res.status(500).send('EWIFNEIVKWofefopejfoejmviknd-OSKMCVDMSKS');
}

class userService {
    constructor() {
        this.myUsers = [
            new userModel("joaozinho", "joao@gmail.com", "235656","minha bio", 1),
            new userModel("maria", "maria@gmail.com", "235656","minha bio", 2),
            new userModel("gton", "jgton@gmail.com", "235656","minha bio", 3),
            new userModel("ueliton", "ueliton@gmail.com", "235656","minha bio", 4),
            new userModel("marin", "karin@gmail.com", "235656","minha bio", 5)
        ];
    }

    getAll(res) {
       return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users`;
        conn.all(query, (error, rows) => {
            if(error) {
                reject(error);
            } else {
                resolve(rows)
            }
        })
       })
    }

    createUser(userName, email, password, bio) {

        // const nextId = this.myUsers.length + 1;
        conn.serialize((eee, err) => {
            try {const querry = `INSERT INTO users (username, email, password, bio) VALUES (?, ?, ?, ?)`
            const values = [userName, email, password, bio]
            conn.run(querry, values)}
            catch (err) {
                console.log(err, "paysandu")
            }
        })
        // return this.myUsers.push(new userModel(userName, email, password, bio, nextId));
    }

    deleteUser(id) {
        this.myUsers = this.myUsers.filter(user => {
            if (user.id !== id) 
                return "Usuário deletado " + id
        })
        return "Nenhum usuário encontado"
    }

    viewProfile(id){        
        const index = this.myUsers.findIndex(u => u.id === id);
        const user = this.myUsers[index];
        if(user) {
            return user
        }
        return false
    }

    updateProfile(id, username, email, bio) {
        const userIndex = this.myUsers.findIndex(user => user.id === parseInt(id));
        if (userIndex !== -1) {
            this.myUsers[userIndex].userName = username;
            this.myUsers[userIndex].email = email;
            this.myUsers[userIndex].bio = bio;
            return "Usuário alterado"
        } else {
            return "Usuário não encontrado"
        }
    }
}

export default userService;