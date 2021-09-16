const express = require('express');
const ErrorResponse = require('./Model/ErrorResponse');
const WrapperResponse = require('./Model/WrapperResponse');
const RandomGenerator = require('./Utils/RandomGenerator');
const cors = require("cors")
const app = express()
const PORT = 8080
const serverLoadTimestamp = new Date()

app.use(cors())

app.get("/", function(req, res){
  let random = new RandomGenerator().generate()
  let data = {
    serverLoadTimestamp,
    random
  }
  res.json(new WrapperResponse().generateSuccessResponse(data))
})

app.use(function(req, res, next) {
  let error = new ErrorResponse('OG-404', 'Endpoint not found')
  next(error)
});

app.use(function(err, req, res, next) {
    console.log(err);

    res.status(err.status || 500);

    let response = new WrapperResponse('failed', err)

    res.json(response);
});

var server = app.listen( PORT, function(){
  console.log('Listening on port ' + server.address().port);
});