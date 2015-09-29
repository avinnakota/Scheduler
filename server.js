var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db.js');
//set port

var port = process.env.PORT || 3000;

//body parser and static file 
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.listen(port);
console.log('listening on port: ', port);

app.get('/students', function(req,res){
	var teacher = req.body;
});