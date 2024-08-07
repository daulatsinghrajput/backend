const express = require('express');
const app = express();
// server port per listen ker rha hoga 
app.listen(3000, ()=>{
    console.log("server started at port number 3000");
})
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// create route (home page, profile page)
app.get('/', (req, res)=>{
    res.send("hello jee kaise ho sare");
})

app.post('/about', (request, response)=>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("car submited successfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(()=>console.log("connection successful"))
.catch((error)=>console.log("received an error", error));