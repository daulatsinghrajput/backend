import express from 'express' //mordern way but we need add type in package.json file
/**
 * file ko import kerne ke two ways 
 * 1. comman js  
 *               require use hota hai
 *               code sync aata hai
 * 2. module js
 *              import use hota hai
 *              code async hoke aata hai
 *              
 */
const app = express();


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("server is ready");
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "joke one",
            content: "this is joke one"
        },
        {
            id: 2,
            title: "joke second",
            content: "this is joke second"
        },
        {
            id: 3,
            title: "joke third",
            content: "this is joke third"
        },
        {
            id: 4,
            title: "joke fourth",
            content: "this is joke fourth"
        },
        {
            id: 5,
            title: "joke fifth",
            content: "this is joke fifth"
        },
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`server started at port: ${port}`)
} )