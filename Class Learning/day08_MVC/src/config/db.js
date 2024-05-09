const express = require("express")
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const connect = () => {
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/CommentApp_02");
        console.log("Connected")
    }catch(err){
        console.log("Error in MongoDDB Connection")
    }
}