const express = require("express");
const app = express();

// //-----------1st method for middlewares--------------
// app.use(logger);

// app.get("/users" , (req, res) => {
//     console.log("user 1 start");
//     return res.send({route : "User_01", role : req.role})
// })

// app.get("/student", (req, res) => {
//     return res.send({route : "Student_01", role : req.role})
// })

// function logger(req , res, next){             // ==> This  is middleware function
//     if(req.path == "/users"){
//         req.role = "user"
//     }
//     else if(req.path == "/student"){
//         req.role = "student"
//     }
//     else{
//         req.role = "someBody"
//     }
//     next();
// }



// //-----------2nd method for middlewares--------------
// app.get('/admin' , admin , (req, res) => {
//     return res.send( {admin : "Admin_01", role : req.role} )
// });

// function admin(req, res, next){
//     console.log("Admin middleware");
//     next();
//     console.log("After admin Middleware");
// }




// //----------Example of Middlewares--------------
app.get('/products', loggedIn("seller"), (req, res) => {
    return res.send("Yes, you can get the product")
})

function loggedIn(user){
    console.log("...checking")
    return function logger(req, res, next){
        console.log("...checking again")
        if(user == "seller"){
            return next()
        }
        else{
            return res.send("Sorry, try again later");
        }
    }
}
// //--------port------------------
app.listen(5000 , () => {
    console.log("Listening port 5000");
})

//MongoDb