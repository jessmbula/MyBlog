const mongoose=require("mongoose")
const config=require("config")
require("dotenv").config({path:"./config/.env"})

const connectDB=()=>{
    mongoose.connect(process.env.Mongo_URI)
    .then(()=>console.log("mongoose connected"))
    .catch((err)=>console.log(err ))

    
}

module.exports = connectDB;