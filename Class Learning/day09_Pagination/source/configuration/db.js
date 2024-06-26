// const mongoose = require("mongoose");

// const connect = () => {
//     try{
//         mongoose.connect("mongodb://127.0.0.1:27017/BookStore");
//         console.log("MongoDb Connected")
//     }catch(err){
//         console.log({message : err.message});
//     }
// }

// module.exports = connect;


const mongoose = require("mongoose");

const connect = () => {
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/BookStore");
        console.log("Connected")
    }catch(err){
        console.log("Error in MongoDDB Connection")
    }
}

module.exports = connect;