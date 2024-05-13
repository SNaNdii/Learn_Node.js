const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    comment : {type : String, required : true},
    postId : {type : mongoose.Schema.Types.ObjectId, ref : "post", required : true},
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true}
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;