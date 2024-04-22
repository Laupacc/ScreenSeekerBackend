var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const OWM_API_KEY = process.env.OWM_API_KEY;

// get movies
router.get('/movies', async (req, res) => {
    let movies = [];
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}&page=${i}`);
        const data = await response.json();
        movies = movies.concat(data.results);
    }
    res.json({ movies });
});

// get tv shows
router.get('/tv', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${OWM_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json({ tv: data.results });
        })
});

// get genres
router.get('/genres', (req, res) => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${OWM_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json({ genres: data.genres });
        })
});

// get top rated movies
router.get('/topratedmovies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${OWM_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json({ topratedmovies: data.results });
        })
});

// get top rated tv shows
router.get('/topratedtv', (req, res) => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${OWM_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json({ topratedtv: data.results });
        })
});



module.exports = router;
