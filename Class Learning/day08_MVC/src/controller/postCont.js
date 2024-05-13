const express = require("express")
const app = express();
app.use(express.json());

const Post = require("../model/postModel");

app.post("/", async(req, res) => {
    try{
        const post = await Post.create(req.body);
        return res.status(201).send({post : post})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.get("/", async(req, res) => {
    try{
        const post = await Post.find().populate("userId").lean().exec();
        return res.status(201).send({post : post})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.patch("/:id", async(req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id , req.body, {new: true}).lean().exec();
        return res.status(201).send({post : post})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.delete("/:id", async(req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({post : post})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

module.exports = app;