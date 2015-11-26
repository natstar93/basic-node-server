var express = require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);

server.listen(3000, function() {
  console.log("Server listening on port 3000");
});

module.exports = server;