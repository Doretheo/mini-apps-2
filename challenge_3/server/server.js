const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 2000;
const app = express();
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Listening to on address http://localhost:${port}`)
})