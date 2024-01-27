// const app = require("express")();

const dambar = require("express");
const app = dambar();

app.get("/", (req,res)=>{
    res.send("Hi, I am Dambar Sing");
})
app.get("/dambar", (req,res)=>{
    res.send("You are interested on Dambar, right?");
})

app.listen(2000, (req,res)=>{
    console.log("Hi, I am Node JS")
})