const mongoose= require("mongoose");
exports.connectDatabase = async()=>{
    await mongoose.connect("mongodb+srv://gshix:gshix@cluster0.9kxbrzs.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database connected successfully")
}