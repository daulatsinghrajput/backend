import dotenv from "dotenv";
import connectDb from "./db/index.js";

// Load environment variables
dotenv.config(); 

const PORT = process.env.PORT || 3000

connectDb()
.then(() => {
    app.listen(PORT, ()=> {
        console.log(`server started at port : ${PORT}`)
    })
}
)
.catch((error) => {
    console.log(`connection failed ${error}`)
})
