const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var bodyParser = require("bodyParser")
  .use(bodyParser.json())  //soporte para codificar json
  .use(bodyParser.urlencoded({ extended: true}))  //soporte para codificar las url

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')


  .get('/android', (req, res) => res.render('pages/index'))

  //POST
  //https://desolate-harbor-16746.herokuapp.com/token-device
  //token
  .post('/token-device', (req, res) => res.send(request.body.token))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
