const express = require("express");
const app = express();
app.use(express.json());

const connect = require("./configuration/db")
const User = require("./model/userModel");


app.listen(8080 , async() => {
    try{
        connect();
        console.log("Port 8080 connection successful")
    }catch(err){
        console.log({message : err.message})
    }
})