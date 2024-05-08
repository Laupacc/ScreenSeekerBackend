const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const MOVIES_API_KEY = process.env.MOVIES_API_KEY;

// get movies
router.get('/movies', async (req, res) => {
    let movies = [];
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=${MOVIES_API_KEY}&page=${i}`);
        
        // Log the response status
        console.log(`Response status for page ${i}:`, response.status);

        // Parse response JSON
        const data = await response.json();

        // Log the data received
        console.log(`Data received for page ${i}:`, data);

        // Concatenate movies array
        movies = movies.concat(data.results);
    }
    res.json({ movies });
});


// get tv shows
router.get('/tv', async (req, res) => {
    let tv = [];
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?language=en-US?api_key=${MOVIES_API_KEY}&page=${i}`)
        const data = await response.json();
        tv = tv.concat(data.results);
    }
    res.json({ tv });
});

// get genres
router.get('/genres', async (req, res) => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIES_API_KEY}`)
    const data = await response.json();
    res.json({ genres: data.genres });
});

// get top rated movies
router.get('/topratedmovies', async (req, res) => {
    let topratedmovies = [];
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US?api_key=${MOVIES_API_KEY}&page=${i}`);
        const data = await response.json();
        topratedmovies = topratedmovies.concat(data.results);
    }
    res.json({ topratedmovies });
});


// get top rated tv shows
router.get('/topratedtv', async (req, res) => {
    let topratedtv = [];
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US?api_key=${MOVIES_API_KEY}&page=${i}`);
        const data = await response.json();
        topratedtv = topratedtv.concat(data.results);
    }
    res.json({ topratedtv });
});



module.exports = router;
