const mongoose = require('mongoose');

const connectDB = async() => {
    mongoose.connect(process.env.MONGODB_URL)

    .then((conn) => {
        console.log(`database successfully connected ${conn.connection.host}`);
    })
    .catch((error) => {
        console.log(`database connection failed ${error.message}`);
        process.exit(1);
    })
}


module.exports = connectDB;