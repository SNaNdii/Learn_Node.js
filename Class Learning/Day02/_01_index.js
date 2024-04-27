const express = require("express");
const { send } = require("vite");
const app = express();
app.use(express.json())
// console.log(app);

// app.get('/users' , function (req , res){
//     res.send({name : "User 01"})
// })

//------------By using query-------------------------------------
app.get('/data' , function (req , res){
    const data = {
        "delhi":"20deg",
        "mumbai":"30deg",
        "up":"40deg"
    }
  const {city} = req.query
  res.send(`the temp in ${city} is ${data[city]}`)
})

app.get('/student' , function (req , res){
    const data = [
            {
            name : "Nandita",
            roll : 1,
            address : "Noida"
            },
            {
            name : "Pooja",
            roll : 2,
            address : "Delhi"
            }
     ]
    const {roll} = req.query
    res.send(`Roll no ${roll} , Name is ${data[roll-1].name}`)
})


//---------Ny using params------------------------

const sampleData = [
    {id:1,name:"nandu"},
    {id:2,name:"nandu2"},
    {id:3,name:"nandu3"},
   ]

   app.get("/sampledata/:id",(req,res)=>{
    const id = req.params.id 
    const foundData = sampleData.find(item=>item.id===parseInt(id))
if(!foundData){
    res.status(404).json({error:"Data not found"})
}
console.log(typeof(foundData))
const respondedData = {
    id:foundData.id,
    name:foundData.name
}
res.send(respondedData)
   })

app.get("/test/data:id",async (req,res)=>{
    const id = req.params.id

    res.json({id})
    res.send(id)
})


app.listen(8000, async () => {
    console.log("Listening on port 8000")
})

let obj  = {
    "name" : "Pooja",
    "roll" : 2,
    "address" : "Delhi"
}



