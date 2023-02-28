const express=require("express")
const router=express.Router()
const Article=require("../models/article")
const isAuth=require("../middleware/isAuth")
const isAdmin=require("../middleware/isAdmin")



//add article
router.post("/add",isAuth,async(req,res)=>{
const user=req.user
    const{title,desc,image,author}=req.body
    const newArticle= await new Article({
        user,
        title,
        author,
        image,
        desc
    })
        const article=await newArticle.save()
        res.send({msg:"article  added",article})

})

//affichage article
router.get("/",async(req,res)=>{

const article=await Article.find()
res.send({msg:"data fetched",article})
})


//delete article
router.delete("/delete/:id",isAuth,async(req,res)=>{
   // const user=req.user
    
    const {id}=req.params;
    console.log(id);
    const article=await Article.findOneAndDelete({user:req.user.id,id})
    res.send({msg:"article deleted"})
})

// first findOneAndDelete({_id:id})
// exemple new syntaxe: findOneAndDelete({user:req.user.id,id})

//edit article
router.put("/edit/:id",isAuth,async(req,res)=>{
    const user=req.user
    const {id}=req.params
    const article= await Article.findOneAndUpdate({user:req.user.id,id},{$set:req.body})
    res.send({msg:"article modified"})
})


module.exports = router