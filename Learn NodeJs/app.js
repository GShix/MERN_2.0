// const app = require("express")();

const dambar = require("express");
const app = dambar();

app.get("/", (req,res)=>{
    res.json({
        name: "Dambar",
        age: 19,
        address: "Nepalgunj"
    })
})
app.get("/dambar", (req,res)=>{
    res.send("You are interested on Dambar, right?");
})

app.listen(2000, (req,res)=>{
    console.log("NodeJs has started at port 2000")
})