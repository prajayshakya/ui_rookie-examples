// javascript file server.js

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");
var connection = require("express-myconnection");
var app = express();

app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ //to support URL-rncoded bodies
   extended:true 
}));
        

//setting up the static files for hosting
app.use(express.static(__dirname + '/'));
console.log("Static files initialized...");


//Routing
app.get('index', function(req, res){
    res.redirect('index.html');    
});


//End of routing



//Launching application on localhost:8080;
app.listen(8080, function(){
    console.log('server loaded on port 8080');
});
                       
