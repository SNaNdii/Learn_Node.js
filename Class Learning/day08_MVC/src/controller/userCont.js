const express = require("express")
const app = express();
app.use(express.json());

const User = require("../model/userModel")

//--------------------------CRUD - CREATE------------------------------------
app.post("/", async(req, res) => {
    try{
        const user = await User.create(req.body);
        return res.status(201).send({user : user})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------CRUD - READ------------------------------------
app.get("/", async(req, res) => {
    try{
        const user = await User.find().lean().exec();
        return res.status(201).send({user : user})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------CRUD - UPDATE------------------------------------
app.patch("/:id", async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body, {new: true}).lean().exec();
        return res.status(201).send({user : user})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------CRUD - DELETE------------------------------------
app.delete("/:id", async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({user : user})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

module.exports = app;