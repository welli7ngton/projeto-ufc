import { DatabaseConnection } from "../database/database.js";
import { verificationOfFormAtributes } from "../utils/verificationOfFormAtributes.js";

class movieService {
    constructor() {
        this.dbConnection = DatabaseConnection.getDbConnection();
    }

    getAll() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM movies`;
            this.dbConnection.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    async createMovies(listOfAtributes) {
        listOfAtributes.push(25);
        if (!verificationOfFormAtributes(listOfAtributes)) {
            return "Preencha Formulário";
        }

        const idTMDB = listOfAtributes[0];

        // Verificar se o filme já existe
        const exists = await new Promise((resolve, reject) => {
            const query = `SELECT COUNT(*) as count FROM movies WHERE idTMDB = ?`;
            this.dbConnection.get(query, [idTMDB], (err, row) => {
                if (err) {
                    console.error('Erro ao verificar existência do filme:', err);
                    reject(err);
                } else {
                    resolve(row.count > 0);
                }
            });
        });

        if (exists) {
            return "Filme já cadastrado";
        }

        // Inserir o filme se não existir
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO movies (idTMDB, title, plot, released, runtime, gender, director, writer, country, imdbRating, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            this.dbConnection.run(query, listOfAtributes, function(err) {
                if (err) {
                    console.error('Erro ao adicionar filme:', err);
                    reject(err);
                } else {
                    console.log('Filme cadastrado com sucesso:', this.lastID);
                    resolve({ msg: 'Filme cadastrado', lastID: this.lastID });
                }
            });
        });
    }



    // createMovies(listOfAtributes) {
    //     listOfAtributes.push(25)
    //     if (verificationOfFormAtributes(listOfAtributes)) {
    //         this.dbConnection.serialize((eee, err) => {
    //             try {
    //                 const querry = `INSERT INTO movies (idTMDB, title, plot, released, runtime, gender, director, writer, country, imdbRating, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    //                 this.dbConnection.run(querry, listOfAtributes)
    //             }
    //             catch (err) {
    //                 console.log(err)
    //             }
    //         })
    //         return "Filme cadastrado"
    //     }
    //     return "Preencha Formulário"
    // }
    deleteMovie(id) {
        return new Promise((resolve, reject) => {
            if (!id) {
                reject("ID de usuário não fornecido");
                return
            }

            const query = `DELETE FROM movies WHERE id = ?`;
            this.dbConnection.run(query, [id], function (err) {
                if (err) {
                    reject(err);
                } else if (this.changes > 0) {
                    resolve("filme deletado" + id);
                } else {
                    resolve("Nenhum filme foi encontrado com o ID " + id);
                }
            })
        })
    }

    viewProfile(id) {
        if (!id) {
            return "forneça um ID"
        }
        return new Promise((resolve, reject) => {
            const querry = 'SELECT * FROM movies Where idTMDB = ?'
            const values = [id,]
            this.dbConnection.all(querry, values, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    }

    updateMovie(listOfAtributes) {
        if (verificationOfFormAtributes(listOfAtributes)) {
            return new Promise((resolve, reject) => {
                const query = 'UPDATE movies SET title = ?, plot = ?, released = ?, runtime = ?, gender = ?, director = ?, poster = ?, writer = ?, country = ?, awards = ?, imdbRating = ?, price = ? where id = ?';
                this.dbConnection.run(query, listOfAtributes, function (err) {
                    if (this.changes === 0) {
                        reject({ error: err });
                    } else {
                        resolve({ msg: 'Filme alterado' });
                    }
                });
            });
        }
    }

}


export default movieService;