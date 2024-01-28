const  app = require("express")();

// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://gshix:gshix@cluster0.9kxbrzs.mongodb.net/?retryWrites=true&w=majority")
// .then(function(){
    //     console.log("Database connected successfully")
    // })
    
const { connectDatabase } = require("./database/database"); //Imported through exports.connectDatabase

connectDatabase();

app.get("/",(req,res)=>{
    res.json({
        status:200,
        message: "You are in Home Page"
    })
})
app.listen(3000,(req,res)=>{
    console.log("Nodejs has started at 3000 port")
})