import movieService from "../services/movieServices.js";
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
    const result = movieServices.createMovies([req.body.idTMDB,
        req.body.title,
        req.body.plot,
        req.body.released,
        req.body.runtime, 
        req.body.gender,
        req.body.director,
        req.body.writer,
        req.body.country,
        req.body.imdbRating]);
    res.json({
        msg: result
    })
}

export function deleteMovie(req, res) {
    const movieId = req.body.id;
    if (!movieId) {
        res.status(400).json({ msg: 'ID do filme não fornecido' });
        return;
    }

    movieServices.deleteMovie(movieId).then(msg => {
        res.json({
            msg: msg
        });
    }).catch(error => {
        res.status(500).json({
            msg: 'Erro ao deletar o usuário',
            error: error
        });
    });
}

export async function viewMovie(req, res) {
    try {
        const movieId = req.params.id; 
        const movie = await movieServices.viewProfile(parseInt(movieId));
        res.status(200).json({movie: movie,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({err: error,
        })
    }
}

export async function updateMovie(req, res) {
    try {
        const movie = await movieServices.updateMovie(
           [
            req.body.title,
            req.body.plot,
            req.body.released,
            req.body.runtime,
            req.body.gender,
            req.body.director,
            req.body.poster,
            req.body.writer,
            req.body.country,
            req.body.awards,
            req.body.imdbRating,
            req.body.price,
            req.params.id, 
           ]
        )
        res.status(200).json({movie: movie })
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}
