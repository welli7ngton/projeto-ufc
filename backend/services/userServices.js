import userModel from "../models/user.js";
import { SingletonDatabaseConnection } from "../database/database.js";


class userService {
    constructor() {
        this.dbConnection = SingletonDatabaseConnection.getDbConnection()
    }

    getAll() {
       return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users`;
        this.dbConnection.all(query, (err, rows) => {
            if(err) {
                reject(err);
            } else {
                resolve(rows)
            }
        })
       })
    }

    createUser(userName, email, password, bio) {
        this.dbConnection.serialize((eee, err) => {
            try {const querry = `INSERT INTO users (username, email, password, bio) VALUES (?, ?, ?, ?)`
            const values = [userName, email, password, bio]
            this.dbConnection.run(querry, values)}
            catch (err) {
                console.log(err)
            }
        })
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            if (!id) {
                reject("ID de usuário não fornecido");
                return;
            }
    
            const query = `DELETE FROM users WHERE id = ?`;
            this.dbConnection.run(query, [id], function(err) {
                if (err) {
                    reject(err);
                } else if (this.changes > 0) {
                    resolve("Usuário deletado " + id);
                } else {
                    resolve("Nenhum usuário encontrado com o ID " + id);
                }
            });
        });
    }

    viewProfile(id){

        // const index = this.myUsers.findIndex(u => u.id === id);
        // const user = this.myUsers[index];
        // if(user) {
        //     return user
        // }
        // return false
        return new Promise((resolve, reject)=>{
            const querry = 'SELECT * FROM users WHERE id = ?'
            const values = [id,]
            this.dbConnection.all(querry, values, (err, rows) =>{
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
        
    }

    updateProfile(id, username, email, bio) {
        console.log('CHeguei na service')
        return new Promise((resolve, reject) =>{
            const querry = 'UPDATE users SET username = ?, email = ?, bio = ? WHERE id = ?'
            const values = [username, email, bio, id]
            this.dbConnection.run(querry, values), (err, rows) => {
                if (err){
                    reject(err)
                }
                resolve(rows)
            }

        })


        // if (userIndex !== -1) {
        //     this.myUsers[userIndex].userName = username;
        //     this.myUsers[userIndex].email = email;
        //     this.myUsers[userIndex].bio = bio;
        //     return "Usuário alterado"
        // } else {
        //     return "Usuário não encontrado"
        // }
    }
}

export default userService;