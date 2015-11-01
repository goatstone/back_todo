/* goatstone/server/one.js : Jose Collas 9.2015 

    Provide a backend for a todo application. 
    Enable the saving and retrieving of information concerning todos.

Endpoints:
    /todo POST
    Save a todo on the backend
    
    /todo GET
    Serve todo data to the client 
    
    /public
    Serve static resources

*/
var fileRoot = '/home/goat/projects/back_todo/public/' 
var express = require('express') 
var app = express() 
var bodyParser = require('body-parser');
var multer = require('multer') 
var upload = multer() 
var cors = require('cors')
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var server 

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

app.use( bodyParser.json() ) 
app.use( bodyParser.urlencoded({ extended: true }) ) 
app.use( cors() ) 

app.use( express.static('public') ) 
app.get( '/', function ( req, res ) {
    res.sendFile( fileRoot + 'index.html' ) 
}) 
app.post( '/todo', function ( req, res ) {
	res.set( 'Access-Control-Allow-Origin', '*' )
	//res.headers['Access-Control-Allow-Origin'] = '*';
    console.log('post!', req.body )
    //res.send('POST request to homepage') 
})
app.get( '/todo', function( req, res ) {
    // retrieve data and send to client
	console.log('todo GET', res )
	//res.setHeaders({'Access-Control-Allow-Origin':'*'})
    res.send('GET request to homepage') 
})
server = app.listen( 3000, '192.168.1.7', function () {
    var host = server.address().address 
    var port = server.address().port 
    console.log(' goatstone.server.one  listening at http://%s:%s', host, port) 
})
