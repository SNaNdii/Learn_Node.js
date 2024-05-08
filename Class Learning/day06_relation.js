const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const connect = () => {
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/CommentApp")
        console.log("MongoDB Connected")
    }catch(err){
        console.log("Not Connected")
    }
}

//-----------------------User Schema and Model-----------------------
const UserSchema = new mongoose.Schema(
    {
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
            // unique : true
        }
    },
    {
        timestamps : true
    }
)
const User = mongoose.model("user", UserSchema);


//-----------------------Post Schema and Model-----------------------
const PostSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        body : {
            type : String,
            required : true
        },
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user",
            required : true
        }
    },
    {
        timestamps : true
    }
)
const Post = mongoose.model("post", PostSchema);

//-----------------------Comment Schema and Model-----------------------
const CommentSchema = new mongoose.Schema(
    {
        body : {
            type : String,
            required : true
        },
        postId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "post",
            required : true
        },
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "users",
            required : true
        }
    },
    {
        timestamps : true
    }
)
const Comment= mongoose.model("comment", CommentSchema);

//-----------------------CRUD Operations-----------------------

//--------Users CRUD-----------
app.post("/users", async(req, res) => {
    try{
        const user = await User.create(req.body);
        return res.status(200).send({user : user})
    }
    catch(err){
        return res.status(402).send({message : err.message})
    }
})

app.get("/users", async(req, res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send({users : users})
    }
    catch(err){
        return res.status(402).send({message : err.message})
    }
})

app.patch("/users/:id", async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body, {
            new : true
        });
        return res.status(201).send({user : user});
    }
    catch(err){
        return res.status(402).send({message : err.message});
    }
})

app.delete("/users/:id", async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(201).send({user : user});
    }
    catch(err){
        return res.status(402).send({message : err.message});
    }
})


//--------Post CRUD-----------
app.post("/post", async(req, res) => {
    try{
        const post = await Post.create(req.body);
        return res.status(200).send(post);
    }
    catch(err){
        return res.status(402).send({message : err.message})
    }
})

app.get("/post", async(req, res) => {
    try{
        const posts = await Post.find().lean().exec();
        return res.status(200).send({posts : posts})
    }
    catch(err){
        return res.status(402).send({message : err.message})
    }
})

app.patch("/post/:id", async(req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id , req.body, {
            new : true
        });
        return res.status(201).send({post : post});
    }
    catch(err){
        return res.status(402).send({message : err.message});
    }
})

app.delete("/post/:id", async(req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(201).send({post : post});
    }
    catch(err){
        return res.status(402).send({message : err.message});
    }
})

//--------Comments CRUD-----------
app.post("/comments", async(req, res) => {
    try{
        const comment = await Comment.create(req.body);
        return res.status(201).send({comment : comment});
    }
    catch(err){
        return res.status(500).send({message : err.message});
    }
})

app.get("/comments", async(req, res) => {
    try{
        const comments = await Comment.find().lean().exec();
        return res.status(201).send({comments : comments});
    }
    catch(err){
        return res.status(500).send({message : err.message});
    }
})

app.patch("/comments/:id", async(req, res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id , req.body, {new : true});
        return res.status(201).send({comment : comment});
    }
    catch(err){
        return res.status(500).send({message : err.message});
    }
})

app.delete("/comments/:id", async(req, res) => {
    try{
        const comment = await Comment.findByIdAndDelete(req.params.id);
        return res.status(201).send({comment : comment});
    }
    catch(err){
        return res.status(500).send({message : err.message});
    }
})

app.listen(5000, () => {
    connect();
    console.log("Listening Port 5000");
})