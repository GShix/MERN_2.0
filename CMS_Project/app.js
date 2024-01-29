const  express = require("express");
const app = express();

//Middleware Setup
app.use(express.json());
app.use(express.urlencoded({extended:true})); //Express middleware is used to parse incoming JSON and URL-encoded data

// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://gshix:gshix@cluster0.9kxbrzs.mongodb.net/?retryWrites=true&w=majority")
// .then(function(){
    //     console.log("Database connected successfully")
    // })
    
const { connectDatabase } = require("./database/database"); //Imported through exports.connectDatabase
const Blog = require("./model/blogModel");

connectDatabase();

app.get("/",(req,res)=>{
    res.json({
        status:200,
        message: "You are in Home Page"
    })
})

app.post("/createBlog",async(req,res)=>{
    // console.log(req.body)
    const title =req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;
    await Blog.create({
        title: title,
        subTitle: subTitle,
        description: description
    })
    res.json({
        status: 200,
        message: "The createBlog API is created successfully"
    })
})
app.listen(3000,(req,res)=>{
    console.log("Nodejs has started at 3000 port")
})