/* goatstone/server/one.js : Jose Collas 9.2015 */
var fileRoot = '/home/goat/projects/back_todo/public/';
var express = require('express');
var app = express();
var server;
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile( fileRoot + 'index.html');
});
server = app.listen(3000, '192.168.1.10', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(' goatstone.server.one  listening at http://%s:%s', host, port);
});