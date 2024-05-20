const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
    name : {type: String, require: true},
    userName : {type: String, require: true},
    sellerMail : {type: String , required: true},
    email : {type: String, require: true, unique: true},
    },
    {
        versionKey : false,
        timestamps : true
    }
)

const User = mongoose.model("user", userSchema);

module.exports = User;