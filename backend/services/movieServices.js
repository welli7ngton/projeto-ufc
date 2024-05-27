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
    createMovies(listOfAtributes) {
        if (verificationOfFormAtributes(listOfAtributes)) {
            this.dbConnection.serialize((eee, err) => {
                try {
                    const querry = `INSERT INTO movies (title, plot, released, runtime, gender, director, poster, writer, country, awards, imdbRating, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
                    this.dbConnection.run(querry, listOfAtributes)
                }
                catch (err) {
                    console.log(err)
                }
            })
            return "Filme cadastrado"
        }
        return "Preencha Formulário"
    }
    deleteMovie(id) {
        return new Promise((resolve, reject) => {
            if (!id) {
                reject("ID de usuário não fornecido");
                return
            }

            const query = `DELETE FROM movies WHERE id = ?`;
            this.dbConnection.run(query, [id], function(err) {
                if(err) {
                    reject(err);
                } else if(this.changes > 0) {
                resolve("filme deletado" + id);
            } else {
                resolve("Nenhum filme foi encontrado com o ID " + id);
            }
        })
    })
}

viewProfile(id) {
    if(!id) {
        return "forneça um ID"
    }
    return new Promise((resolve, reject) => {
        const querry = 'SELECT * FROM movies Where id = ?'
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