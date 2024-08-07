const mongoose = require('mongoose');

require('dotenv').config();

const dbconnect = ()=> {
    mongoose.connect(process.env.DATABASE_URL, {
        
    })
    .then(() => {
        console.log("dbconnection successful")
    })
    .catch((error) => {
        console.log("issue in dbconnection");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbconnect;