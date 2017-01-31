var http = require("http");


    var handleRequests = function(req,res){
       if(req.url === '/')
           {
               res.write(" welcome to node js");
           }
        else if(req.url === '/home')
        {
            res.write("welcome home");
        }
        else
            {
                res.write("error");
            }
        res.end();
    }
var server = http.createServer(handleRequests);
    //launching application on localhost 3000 
    server.listen(3000, function(){
              console.log("port running in 3000");
              });