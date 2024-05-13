const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title : {type : String, required : true},
    desc : {type : String, required : true},
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true}
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;