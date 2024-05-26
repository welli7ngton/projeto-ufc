import movieService from "../services/movieServices.js"; // Certifique-se de que este caminho está correto
const movieServices = new movieService();

export async function getMovies(_, res) {
    try {
        const movies = await movieServices.getAll();
        res.status(200).json({ movies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: error });
    }
}

export async function createMovie(req, res) {
    const test = movieServices.createMovies(req.body.title, req.body.plot, req.body.released, req.body.runtime, req.body.gender, req.body.director, req.body.poster, req.body.writer, req.body.country, req.body.awards, req.body.imdbRating, req.body.price);
    res.json({
        msg: 'Novo filme cadastrado'
    })
}