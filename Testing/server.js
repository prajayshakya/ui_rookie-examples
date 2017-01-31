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

app.use(connection(mysql, {
    host: 'localhost',
    user: 'ui',
    password:'ui1234',
    database:'UI_PROJECT'
}, 'request'));

app.get("/service/INVENTORY_TYPE", function(req,res,next){
   //Array to store dynamic parameters
    var ids = [];
    
    var query = "SELECT * FROM INVENTORY_TYPE";
    req.getConnection(function(err, connection){
            if (err) return next(err);
    connection.query(query,ids,function(err,results){
       if(err){
           console.log(err);
           return next("MY SQL error, check you query");
       } 
        res.json(results);
        });
    });
});

app.get('/views/index', function(req, res){
    res.redirect('/views/index.html');    
});

app.get("/service/INVENTORY_TYPE/:ID", function(req,res,next){
   //Array to store dynamic parameters
    var ids = [];
    var INVENTORY_ID = req.params.ID;
    ids.push(INVENTORY_ID);
    var query = "SELECT * FROM INVENTORY_TYPE where ID = ?";
    req.getConnection(function(err, connection){
            if (err) return next(err);
    connection.query(query,ids,function(err,results){
       if(err){
           console.log(err);
           return next("MY SQL error, check you query");
       } 
        res.json(results);
        });
    });
});

app.get("/service/itemtype/:inventory_type", function(req,res,next){
   //Array to store dynamic parameters
    var ids = [];
    var INVENTORY_ID = req.params.inventory_type;
    ids.push(INVENTORY_ID);
    var query = "select * from itemtype where inventory_type = ?";
    req.getConnection(function(err, connection){
            if (err) return next(err);
    connection.query(query,ids,function(err,results){
       if(err){
           console.log(err);
           return next("MY SQL error, check you query");
       } 
        res.json(results);
        });
    });
});

//Launching application on localhost:8080;
app.listen(8080, function(){
    console.log('server loaded on port 8080');
});