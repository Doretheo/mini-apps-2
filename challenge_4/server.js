const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 2005;
const app = express();
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '.cd m  /my-app')));

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Listening to on address http://localhost:${port}`)
})