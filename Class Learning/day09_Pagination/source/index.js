
const express = require("express")
const app = express();
app.use(express.json());

const connect = require("./configuration/db");

const userController = require("./controller/userCont")

app.use("/users", userController);

//--------------------------Port Setup------------------------------------
app.listen(8080, async() => {
    try{
        await connect();
        console.log("Listening Port 8080")
    }catch(err){
        console.log({message : err.message});
    }
})