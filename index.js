const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.port || 5000;

app.use('/', (req, res) => {
  res.send('Welcome to Tokopedia Scraper API');
});

app.listen(PORT, (req, res) => {
  console.log('Welcome! Welcome! Welcome!');
});
