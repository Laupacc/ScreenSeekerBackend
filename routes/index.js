const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const MOVIES_API_KEY = process.env.MOVIES_API_KEY;

// get movies
router.get('/movies', async (req, res) => {
    let movies = [];
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=${MOVIES_API_KEY}&page=${i}`);
        console.log(`Response status for page ${i}:`, response.status);
        const data = await response.json();
        console.log(`Data received for page ${i}:`, data);
        movies = movies.concat(data.results);
    }
    res.json({ movies });
});


// get tv shows
router.get('/tv', async (req, res) => {
    let tv = [];
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?language=en-US&api_key=${MOVIES_API_KEY}&page=${i}`)
        const data = await response.json();
        tv = tv.concat(data.results);
    }
    res.json({ tv });
});

// get movie genres
router.get('/genresmovie', async (req, res) => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIES_API_KEY}`)
    const data = await response.json();
    res.json({ genres: data.genres });
});

// get tv genres
router.get('/genrestv', async (req, res) => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${MOVIES_API_KEY}`)
    const data = await response.json();
    res.json({ genres: data.genres });
});

// get top rated movies
router.get('/topratedmovies', async (req, res) => {
    let topratedmovies = [];
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${MOVIES_API_KEY}&page=${i}`);
        const data = await response.json();
        topratedmovies = topratedmovies.concat(data.results);
    }
    res.json({ topratedmovies });
});


// get top rated tv shows
router.get('/topratedtv', async (req, res) => {
    let topratedtv = [];
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=${MOVIES_API_KEY}&page=${i}`);
        const data = await response.json();
        topratedtv = topratedtv.concat(data.results);
    }
    res.json({ topratedtv });
});



module.exports = router;
