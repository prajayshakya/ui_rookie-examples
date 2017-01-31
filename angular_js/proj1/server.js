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

app.use(connection(mysql, {
    host: 'localhost',
    user: 'ui',
    password:'ui1234',
    database:'shoppingcart'
}, 'request'));

app.get("/service/customer", function(req,res,next){
   //Array to store dynamic parameters
    var ids = [];
    /*for(var i=0; i<paramas.length;i++)
    {
        ids.push(req.params[params[i]]);
    }*/
    
    var query = "SELECT * FROM customer";
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

// function to create get services
app.get("/service/customer/:id", function(req,res,next){
   //Array to store dynamic parameters
    var ids = [];
    var customerid = req.params.id;
    ids.push(customerid);
    var query = "SELECT * FROM customer where id = ?";
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

//sample for Template service
var url = "/service/customer/";
var sqlquery = "INSERT INTO customer SET ?";
var data = ["id","Name", "Address", "City", "zipcode", "email", "phone", "Active"];

function postService(url, sqlquery, data)
{
 try{
        var reqObj = req.body;
        console.log(reqObj);
        
        req.getConnection(function(err, conn)
{
            if(err)
            {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else
            {   
                var insertSql = sqlquery;
                var insertValues = {};
                for(var i=0; i<data.length; i++){
                    insertValues[data[i]] = reqObj[data[i]];
                                                }
                 var query = conn.query(insertSql, insertValues, function (err, result)
                {
                    if(err){
                        console.error('SQL error: ', err);
                        return next(err);
                            }
                    console.log(result);
                    var name_Id = result.insertId;
                    res.json({ "name":name_Id});
                 });
            }
});
    }
    catch(ex){
    console.error("Internal error:"+ex);
    return next(ex);
}  
}
                          
                                        

//app.post('/service/customer/', function(req,res,next){
//try{
//        var reqObj = req.body;
//        console.log(reqObj);
//        
//        req.getConnection(function(err, conn){
//            if(err)
//            {
//                console.error('SQL Connection error: ', err);
//                return next(err);
//            }
//            else
//            {
//                var insertSql = "INSERT INTO customer SET ?";
//                var insertValues = {
//                    "id" : reqObj.id,
//                    "Name" : reqObj.Name,
//                    "Address" : reqObj.Address,
//                    "City": reqObj.City,
//                    "zipcode": reqObj.zipcode,
//                    "email": reqObj.email,
//                    "phone": reqObj.phone,
//                    "Active": reqObj.Active
//                };
//                var query = conn.query(insertSql, insertValues, function (err, result){
//                    if(err){
//                        console.error('SQL error: ', err);
//                        return next(err);
//                    }
//                    console.log(result);
//                    var name_Id = result.insertId;
//                    res.json({ "name":name_Id});
//                    
//                });
//            }
//        });
//}
//catch(ex){
//    console.error("Internal error:"+ex);
//    return next(ex);
//}   
//
//});



//Routing
app.get('/views/index', function(req, res){
    res.redirect('/views/index.html');    
});

app.get('/views/electronics/', function(req, res){
    res.redirect('/views/electronics.html');        
});

app.get('/views/home/', function(req, res){ 
    res.redirect('/views/home.html');
  
});

app.get('/views/game/', function(req, res){
    res.redirect('/views/game.html');           
});

app.get('/landing', function (req,res){
    res.send('In landing page');
});
//End of routing



//Launching application on localhost:8080;
app.listen(8080, function(){
    console.log('server loaded on port 8080');
});
                       
