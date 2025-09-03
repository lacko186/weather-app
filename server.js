const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static('public')); 

app.get('/api/weather/:city', async (req, res) => {
    const city = req.params.city;
    const weatherApiKey = process.env.API;
    
    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Szerver elindult a http://localhost:${port} címen`);
});


