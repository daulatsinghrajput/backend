require('dotenv').config();
const express = require("express");
const cors = require("cors")
const connectDB = require('./config/db.js')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

connectDB()
const userRoutes = require('./routes/user.routes.js')
app.use('/', userRoutes);
module.exports = app;





// cors => Simple Terms Me: Agar tumhara frontend aur backend alag-alag domains (origins) pe hain, to CORS enable karna padta hai taaki frontend backend se data fetch kar sake bina blocked huye. cors prigin resource sharing
// Middleware ek function hota hai jo request aur response ke beech mein aata hai. Jab bhi koi request server pe aati hai, middleware us request ko handle karne se pehle kuch additional kaam kar sakta hai, jaise authentication check karna, logging karna, ya request data ko modify karna.
