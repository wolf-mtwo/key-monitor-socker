var express = require('express');
var path = require("path");
var app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname + '/../public')));

app.get('/', function (req, res) {
  res.sendFile(path.join( __dirname + '/index.html'));
});

var server = app.listen(3000, '0.0.0.0', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
