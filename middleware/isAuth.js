const User=require("../models/user")
var jwt = require('jsonwebtoken');
const isAuth=async(req,res,next)=>{
const token=await req.headers["authorization"]
if(!token){
   return res.send({msg:"No token!"})
}

const decoded=await jwt.verify(token,process.env.secretOrKey)

const user=await User.findById(decoded.id)
if(!user){
  return res.send({msg:"user dosnt exxisrt"})
}
req.user=user

next()


}

module.exports=isAuth