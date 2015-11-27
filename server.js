var express = require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);

app.get('/', function(request, response) {
  response.json("Hello world");
});

app.get('/otherpage', function(request, response) {
  response.send('<h1>other page</h1>');
});

server.listen(3000, function() {
  console.log("Server listening on port 3000");
});

module.exports = server;
