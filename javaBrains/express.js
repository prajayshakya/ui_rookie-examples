var express = require('express');

var app = express(); // object of express

app.listen(3000, function(){
           console.log("server is running on port 3000");
           });

app.get('/', function(req,res){
    res.send(" hello from express service");
});

app.get('/book', function(req,res){
    res.send(" hello from the bookstore");
});