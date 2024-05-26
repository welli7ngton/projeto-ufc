import movieModel from "../models/movie.js"; // Certifique-se de que este caminho está correto
import { SingletonDatabaseConnection } from "../database/database.js";

class movieService { // Renomeado para corresponder ao import
    constructor() {
        this.dbConnection = SingletonDatabaseConnection.getDbConnection();
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
    createMovies(title, plot, released, runtime, gender, director, poster, writer, country, awards, imdbRating, price) {
        this.dbConnection.serialize((eee,err) => {
            try {const querry = `INSERT INTO movies (title, plot, released, runtime, gender, director, poster, writer, country, awards, imdbRating, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
                const values = [title, plot, released, runtime, gender, director, poster, writer, country, awards, imdbRating, price]
                this.dbConnection.run(querry, values)}
            catch (err) {
                console.log(err)
            } 
        })
    }
}

export default movieService;
