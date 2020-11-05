const jsonServer = require('json-server');
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser');

const port = 2000;
const app = jsonServer.create();
app.use(middlewares);
app.use(router)
app.use(bodyParser());

app.use('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`)
})