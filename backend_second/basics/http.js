const http = require('http');

// let server = http.createServer(function(req, res){
//     res.end("hello world keep going");
// })

// server.listen(3000);

let server = http.createServer(function(req, res){
    if(req.url === '/'){
    res.end("hello url")
    } else if(req.url === '/profile') {
        res.end("profile page");
    } else {
        res.end("page not found");
    }
})

server.listen(3000)



