const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const todoRoutes = require("./routes/todos");
app.use(todoRoutes)

app.listen(PORT, () => {
    console.log(`server stated successfully at ${PORT}`);
})
// '/api/v1',

const dbconnect = require('./config/database');
dbconnect();

app.get('/', (req, res) => {
    res.send(`<h1>home page</h1>`);
})