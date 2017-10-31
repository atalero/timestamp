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

app.get("/:value", function (request, response) {
  response.send(processUrl(request.params.value));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


