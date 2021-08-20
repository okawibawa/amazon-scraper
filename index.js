const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.port || 5000;

const apiKey = '34ba4851707b2d05769024a6aff7d1c7';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Amazon Scraper API');
});

// Endpoints
// Get Product
app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Welcome! The server is running on port ${PORT}!`);
});
