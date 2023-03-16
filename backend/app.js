const axios = require('axios');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const app = express();

app.use(cors());
// Rapid API
const method = 'GET';
const url = 'https://edamam-recipe-search.p.rapidapi.com/search';
const headers = {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
};

app.get('/api/:q', async (req, res) => {
    const { q } = req.params;
    const options = {
        method,
        url,
        params: { q },
        headers,
    };
    let data = {};
    await axios
        .request(options)
        .then((response) => {
            data = response.data;
        })
        .catch((err) => console.log(err));

    return res.json(data.hits);
});

app.listen(5000, () => {
    console.log('Server started port 5000');
});
