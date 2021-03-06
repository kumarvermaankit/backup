const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");
const multer=require("multer");

const router=express.Router();
const Question=require("../models/Question");
const UserProfile=require("../models/UserProfile.models");

const app= express();
app.use("./profileimages",express.static('profile'));
app.use(cors());

var storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        
        cb(null,"./profileimages");
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
    });

const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image.jpeg' || file.mimetype==='image.png' ){
        cb(null,true)
    }
    else{
       cb(null,false)
    }
}    

const upload=multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*5
    }
    // fileFilter:fileFilter
})

var imgobj={}

router.post("/",upload.single("file"),(req,res,next)=>{
imgobj=req.file
console.log(req.file)
})
router.post("/upload",(req,res,next)=>{
    UserProfile.findOne({email:req.body.email})
    .then((result)=>{
        
        result.profile=imgobj
        result.save()
    })
    .catch((err)=>{
        console.log(err) 
    })
})


router.get("/:email",(req,res,next)=>{
    console.log(req.params)
    try{
        UserProfile.findOne({email:req.params.email})
        .then((result)=>{
            res.send(result.profile)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
})


module.exports=router