const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/StudentData")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Error in MongoDb Connection"))

