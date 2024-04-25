const express = require("express");
const app = express();
// console.log(app);

app.get('/users' , function (req , res){
    res.send({name : "User 01"})
})

app.get('/student' , function (req , res){
    res.send({name : "Student 01"})
})

app.listen(8000, () => {
    console.log("Listening on port 8000")
})