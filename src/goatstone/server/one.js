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
var assert = require('assert');

var server 
var todo = {}

// set up the server
app.use( bodyParser.json() ) 
app.use( bodyParser.urlencoded({ extended: true }) ) 
app.use( cors() ) 
app.use( express.static('public') ) 

app.get( '/', function ( req, res ) {
    res.sendFile( fileRoot + 'index.html' ) 
}) 
app.post( '/todo', function ( req, res ) {
    todo = req.body
})
app.get( '/todo', function( req, res ) {
    res.status( 200 ).send( todo )
})
// implement the server
server = app.listen( 3000, '192.168.1.7', function () {
    var host = server.address().address 
    var port = server.address().port 
    console.log(' goatstone.server.one  listening at http://%s:%s', host, port) 
})
