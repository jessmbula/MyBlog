const mongoose = require("mongoose");
const schema=mongoose.Schema

const ArticleSchema = new schema(
{
    title:{
        type:String,
        required:true,        
    },
    author:{
        type:String,
        required: true,
    },
    image:{
        type: String,
        required: false,
    },
    desc:{
        type:String,
        required: true,
    }, 
    dateCreation:{
        type:Date,
        default:Date.now()
    },
    user: {
        type: schema.Types.ObjectId,
        ref: "user"
      },
},
  
{ timestamps:true}

)

const Article=mongoose.model("article",ArticleSchema)
module.exports=Article
