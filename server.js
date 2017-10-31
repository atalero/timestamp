//this is the service that will receive the URL request and process it using the modules in my package

var months = require('./months');
var processUrl = require('./processURL')
var unixToNatural = require('./unixToNatural'); 
var express =  require('express');
var app = express(); 

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//once the request is made, the :value will be sent to the processURL module
app.get("/:value", function (request, response) {
  response.send(processUrl(request.params.value));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


