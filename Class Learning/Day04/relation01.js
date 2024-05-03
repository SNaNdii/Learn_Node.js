const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8000;

//---------------MongoDB Connection------------------------
const url = 'mongodb://127.0.0.1:27017'
mongoose.connect(`${url}/StudentData`)
.then( () => console.log("MongoDB Connected"))
.catch(err => console.log("Error in MongoDB Connection"));

//---------------Schema------------------------
const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    }
})

//---------------Model------------------------
const userModel = mongoose.model("User", userSchema);

//---------------Post Data in API------------------------
app.post("/users", async(req, res) => {
    const result = await userModel.create({
        firstName : "Nandita",
        lastName : "Singh",
        email : "singhnandita73@gmail.com"
    })
    console.log("result : ", result)
    return res.status(201).json({msg : "Data Success"})
})



//---------------PORT connection------------------------
app.listen(port, () => {
    console.log(`Working with port ${port}`)
})