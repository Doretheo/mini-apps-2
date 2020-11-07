const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/bitcoin', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongo connected');
})

const bitcoinSchema = new mongoose.Schema({
  rate: Number,
  date: String,
  code: String
})

const Bitcoin = mongoose.model('Bitcoin', bitcoinSchema);

module.exports = Bitcoin;