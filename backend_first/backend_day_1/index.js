const express = require('express')
const app = express()

require('dotenv').config()

PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send(`servser started at port : ${PORT}`)
})

app.listen(PORT || 3000,()=> {
    console.log(`server started at port: ${PORT}`)
} )