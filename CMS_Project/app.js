const  express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({
    origin:"http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
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


app.post("/blogs",async(req,res)=>{
    // console.log(req.body)
    const title =req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;
    await Blog.create({
        title: title,
        subTitle: subTitle,
        description: description
    })
    res.status(201).json({
        message: "The blog created successfully"
    })
})

//to request data(collection)
app.get("/blogs",async(req,res)=>{
    const Blogs = await Blog.find();
        res.json({
            status: 200,
            message: "Blogs are fetched successfully",
            blogs:Blogs
        })
    
})

//to get single blog
app.get("/blogs/:id", async (req,res)=>{
    const id = req.params.id; // const {id} = req.params
    // const blog = await  Blog.find({_id:id});
    // if(blog.length==0)
    // {
    //     res.status(404).json({
    //         message: `blog with id ${id} is not fetched` 
    //     })
    // }
    // else{
    //     res.json({
    //         status:200,
    //         message: `blog with id ${id} is fetched successfully`,
    //         data: blog,
    //     })
    // }

    //alternate
    const blog = await Blog.findById(id);
    if(blog){
        res.json({
            status:200,
            message: `The blog with id ${id} is fetched successfully`,
            blogs:blog
        })
    }
    else{
        res.json({
            status:404,
            message: `The blog with id ${id} is not fetched.`
        })
    }
})

//to update the data
app.patch("/blogs/:id", async (req,res)=>{
    const id = req.params.id;
    const title =req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description; // descriptio{title,subTitle,description} = req.body
    await Blog.findByIdAndUpdate(id,{
        title:title,
        subTitle: subTitle,
        description: description
    })
    res.json({
        status:200,
        message:`Blog with id ${id} is updated successfully`
    })
})

//DELETE API
app.delete("blogs/:id",async(req,res)=>{
    // const {id} = req.params.id;
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({
        message:`You blog is successfully deleted.`
    })
})
//to start the server at port 3000 and listen the client req
app.listen(3000,(req,res)=>{
    console.log("Nodejs has started at 3000 port")
})