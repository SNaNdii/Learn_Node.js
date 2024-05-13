const express = require("express")
const app = express();
app.use(express.json());

const connect = require("./config/db");

const userController = require("./controller/userCont")
const postController = require("./controller/postCont")
const commentController = require("./controller/commentCont")

app.use("/users", userController);
app.use("/posts", postController);
app.use("/comments", commentController);

//--------------------------Port Setup------------------------------------
app.listen(6000, async() => {
    try{
        await connect();
        console.log("Listening Port 6000")
    }catch(err){
        console.log({message : err.message});
    }
})