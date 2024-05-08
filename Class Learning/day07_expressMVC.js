const express = require("express")
const app = express();
app.use(express.json());

//--------------------------CONNECTION------------------------------------
const mongoose = require("mongoose");
const connect = () => {
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/CommentApp_02");
        console.log("Connected")
    }catch(err){
        console.log("Error in MongoDDB Connection")
    }
}

//--------------------------SCHEMA------------------------------------
const UserSchema = new mongoose.Schema({
    name : {type : String, required : true},
    age : {type : Number, required : true},
    email : {type : String, required : true, unique : true}
})
const PostSchema = new mongoose.Schema({
    title : {type : String, required : true},
    desc : {type : String, required : true},
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true}
})
const CommentSchema = new mongoose.Schema({
    comment : {type : String, required : true},
    postId : {type : mongoose.Schema.Types.ObjectId, ref : "post", required : true},
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true}
})

//--------------------------MODEL------------------------------------
const User = mongoose.model("user", UserSchema);
const Post = mongoose.model("post", PostSchema);
const Comment = mongoose.model("comment", CommentSchema);

//--------------------------CRUD - CREATE------------------------------------
app.post("/users", async(req, res) => {
    try{
        const user = await User.create(req.body);
        return res.status(201).send({user : user})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.post("/posts", async(req, res) => {
    try{
        const post = await Post.create(req.body);
        return res.status(201).send({post : post})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.post("/comments", async(req, res) => {
    try{
        const comment = await Comment.create(req.body);
        return res.status(201).send({comment : comment})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------CRUD - READ------------------------------------
app.get("/users", async(req, res) => {
    try{
        const user = await User.find().lean().exec();
        return res.status(201).send({user : user})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.get("/posts", async(req, res) => {
    try{
        const post = await Post.find().populate("userId").lean().exec();
        return res.status(201).send({post : post})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.get("/comments", async(req, res) => {
    try{
        const comments = await Comment.find().populate({path : "postId", select: {"title": 1, "desc": 1, _id: 0}}).populate({path:"userId", select: "name"}).lean().exec();
        return res.status(201).send({comments : comments})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------CRUD - UPDATE------------------------------------
app.patch("/users/:id", async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body, {new: true}).lean().exec();
        return res.status(201).send({user : user})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.patch("/posts/:id", async(req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id , req.body, {new: true}).lean().exec();
        return res.status(201).send({post : post})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.patch("/comments/:id", async(req, res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id , req.body, {new: true}).lean().exec();
        return res.status(201).send({comment : comment})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------CRUD - DELETE------------------------------------
app.delete("/users/:id", async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({user : user})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.delete("/posts/:id", async(req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({post : post})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})
app.delete("/comments/:id", async(req, res) => {
    try{
        const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send({comment : comment})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

//--------------------------Port Setup------------------------------------
app.listen(6000, () => {
    connect();
    console.log("Listening Port 6000")
})