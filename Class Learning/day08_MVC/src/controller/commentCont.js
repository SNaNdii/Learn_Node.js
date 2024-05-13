const express = require("express")
const app = express();
app.use(express.json());

const Comment = require("../model/commentModel")

//--------------------------CRUD - CREATE------------------------------------
app.post("/", async(req, res) => {
    try{
        const comment = await Comment.create(req.body);
        return res.status(201).send({comment : comment})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------CRUD - READ------------------------------------
app.get("/", async(req, res) => {
    try{
        const comments = await Comment.find().populate({path : "postId", select: {"title": 1, "desc": 1, _id: 0}}).populate({path:"userId", select: "name"}).lean().exec();
        return res.status(201).send({comments : comments})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------CRUD - UPDATE------------------------------------
app.patch("/:id", async(req, res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id , req.body, {new: true}).lean().exec();
        return res.status(201).send({comment : comment})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------CRUD - DELETE------------------------------------
app.delete("/:id", async(req, res) => {
    try{
        const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({comment : comment})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

module.exports = app;