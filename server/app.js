var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require("path");
app.use(express.static(path.join(__dirname + '/../public')));
app.use(express.static(path.join(__dirname + '/../bower_components')));

app.get('/', function (req, res) {
  res.sendFile(path.join( __dirname + '/index.html'));
});

io.on('connection', function(socket) {
  socket.on('msg', function(msg) {
    console.log(msg);
    // io.emit('chat message', msg);
  });
});

setInterval(function(){
  io.emit('msg', 'message');
},1000);
http.listen(3000, function () {
  console.log('listenin on *:3000');
});
