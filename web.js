var express = require('express');
var fs = require('fs');
//var buf = require('buffer');
var app = express.createServer(express.logger());

//var buf = new Buffer(32);
var content= fs.readFileSync('index.html', 'utf-8');
//var content = buf.toString('utf-8');
console.log(content);

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
