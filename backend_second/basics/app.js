const express = require('express');
const expressSession = require('express-session');

let app = express();

app.use(expressSession({
    secret : "ramdom stuff",
    resave : false,
    saveUninitialized: false
}))

app.use(function(req, res, next){
    console.log("hello dost")
    next();
})

// app.get(route, handler)
app.get('/', function(req, res){
    res.send("something about main page");
})
app.get('/about', function(req, res){
    res.send("something about about page");
})
app.get('/create', function(req, res){
    req.session.polo = true;
    res.send("done");
})
// * sare routs (url) 
app.get('*', function(req, res){
    res.send("page not found");
})
app.listen(3000);