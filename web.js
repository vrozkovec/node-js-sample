var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('/home/ubuntu/src/bitstarter/index.html', function (err, data) {
      if (err) throw err;
      var buffer = new Buffer(data, 'utf-8');
      console.log(buffer.toString('utf-8'));
      response.send(buffer.toString('utf-8'));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
