const express = require("express")
const mongoose = require("mongoose")
const app = express();

app.get('/',(req, res)=>{
    res.send("Hello Node API")
})

app.listen(3000, ()=> {
    console.log("Node API app is running on port 3000")
})

app.post('/product', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://Blinks:123.Green.123@blinksapi.gtay8ti.mongodb.net/')
.then(() =>{
    console.log("connected to MongoDB")
}).catch((error) =>{
    console.log(error)
})
