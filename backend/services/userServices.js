import { DatabaseConnection } from "../database/database.js";
import { verificationOfFormAtributes } from "../utils/verificationOfFormAtributes.js";

class userService {
    constructor() {
        this.dbConnection = DatabaseConnection.getDbConnection()
    }

    getAll() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM users`;
            this.dbConnection.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows)
                }
            })
        })
    }

    createUser(listOfAtributes) {
        if (verificationOfFormAtributes(listOfAtributes)) {
            this.dbConnection.serialize((eee, err) => {
                try {
                    const querry = `INSERT INTO users (username, email, password, bio) VALUES (?, ?, ?, ?)`
                    this.dbConnection.run(querry, listOfAtributes)
                }
                catch (err) {
                    console.error(err)
                }
            })
        }
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM users WHERE id = ?`;
            this.dbConnection.run(query, [id], function () {
                if (this.changes === 0) {
                    reject("Nenhum usuário encontrado com o ID " + id);
                } else {
                    resolve("Usuário deletado " + id);
                }
            });
        });
    }

    viewProfile(id) {
        if (!id) {
            return "Forneça um ID"
        }
        return new Promise((resolve, reject) => {
            const querry = 'SELECT * FROM users WHERE id = ?'
            const values = [id,]
            this.dbConnection.all(querry, values, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })

    }

    updateProfile(listOfAtributes) {
        if (verificationOfFormAtributes(listOfAtributes)) {
            return new Promise((resolve, reject) => {
                const query = 'UPDATE users SET username = ?, email = ?, bio = ? WHERE id = ?';
                this.dbConnection.run(query, listOfAtributes, function () {
                    if (this.changes === 0) {
                        reject({ error: "User not found" });
                    } else {
                        resolve({ msg: 'Usuário alterado' });
                    }
                });
            });
        }
    }

}



export default userService;