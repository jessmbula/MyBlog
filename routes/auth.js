const express=require("express")
const router=express.Router()
const User=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

//require the isAuth middleware
const isAuth=require("../middleware/isAuth")
const isAdmin=require("../middleware/isAdmin")





router.post("/register",async(req,res)=>{
    const{name,lastName,email,password}=req.body
    let user=await User.findOne({email})

    if(user){
     return   res.send({msg:"email already exist!"})
    }

    user= new User({name,lastName,email,password})
const salt=10

const hashedpassword=await bcrypt.hash(password,salt)

user.password=hashedpassword


await user.save()
const payload={
    id:user._id
}
const token=await jwt.sign(payload,process.env.secretOrKey,{ expiresIn:"2 days"})



res.send({msg:"user registered !",user,token})


})

//login

router.post("/login",async(req,res)=>{
    const{email,password}=req.body
    let user=await User.findOne({email})
    if(!user){
        res.send({msg:"bad credentialds!email"})
    }

    const isMatch=bcrypt.compare(password,user.password)
    if (!isMatch){
        res.send({msg:"bad credentialds!password"})
    }
    
    const payload={
        id:user.id
    }
    const token=jwt.sign(payload,process.env.secretOrKey,{ expiresIn:"2 days"})
    

    res.send({msg:"login with succes!",user,token})
})

router.get("/user",isAuth,(req,res)=>{
    res.send({user:req.user})
})

//affichage all users
router.get("/users",isAuth,isAdmin, async(req,res)=>{

    const users=await User.find()
    res.send({msg:"data fetched",users})
    })





module.exports=router



