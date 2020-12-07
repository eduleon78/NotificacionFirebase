var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000

// Configurar express

var app = express();

var router = express.Router();

app.use(bodyParser.json());  //soporte para codificar json
app.use(bodyParser.urlencoded({ extended: true}));  //soporte para codificar las url

var firebase = require("firebase");

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')


  .get('/android', function (req, res) => res.render('pages/index'))

  //POST
  //https://desolate-harbor-16746.herokuapp.com/token-device
  //token
  app.post("/token-device", function (req, res) => res.send(request.body.token));


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
