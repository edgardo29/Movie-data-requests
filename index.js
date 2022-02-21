import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.get("/mov", async (req, res) => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();

    console.log("Response: ", data);
    res.json(data)
});


//Get movie details by id
app.get("/mov/:id", async (req, res) => {
    const url = `http://www.omdbapi.com/?i=${req.params.id}&apikey=${process.env.API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});

//Get movie details by title
app.get("/mov/title/:title", async (req, res) => {
    const url = `http://www.omdbapi.com/?t=${req.params.title}&apikey=${process.env.API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});


//Get movie list  by year
app.get("/mov/year/:year", async (req, res) => {
    console.log(req.params.year);
    const url = `http://www.omdbapi.com/?y=${req.params.year}&apikey=${process.env.API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});

//Get movie list by keyword
app.get("/mov/list/:s/:p", async (req, res) => {
    const url = `http://www.omdbapi.com/?s=${req.params.s}&page=${req.params.p}&apikey=${process.env.API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});

//Get movie list by keyword and year
app.get("/mov/listwithyear/:s/:y", async (req, res) => {
    const url = `http://www.omdbapi.com/?s=${req.params.s}&y=${req.params.y}&apikey=${process.env.API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});




app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});