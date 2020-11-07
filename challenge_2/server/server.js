const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database')
const axios = require('axios')

const port = 2000;
const app = express();
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/crypto', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2014-09-01')
    .then((result) => (result.data))
    .then((data) => {
      const entries = data.bpi;
      const result = [];
      for (let time in entries) {
        result.push({ date: time, value: entries[time] })
      }
      res.status(200).send(result)
    })
    .catch((err) => res.status(400).send(err.stack))
})


app.listen(port, () => {
  console.log(`Listening to on address http://localhost:${port}`)
})
