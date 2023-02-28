const mongoose = require("mongoose")
const schema=mongoose.Schema

const UserSchema = new schema(
{
    name:{
        type:String
    },
    lastName:{
        type:String
    },
email:{type:String},
password:{
    type:String
},

    isadmin:{
        type:Boolean,
        default: false,
    }
},
  
{ timestamps:true}

)

const User=mongoose.model("users",UserSchema)
module.exports=User