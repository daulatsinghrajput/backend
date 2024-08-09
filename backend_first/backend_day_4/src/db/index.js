import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config(); // Ensure this is called before using any environment variables

const connectDb = async () => {
    try {
        // Use DATABASE_URL from .env file
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/ ${DB_NAME}`);
        console.log(`\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
      
    }
};

export default connectDb;  
