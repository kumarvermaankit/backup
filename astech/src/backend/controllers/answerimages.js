const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");
const multer=require("multer");

const router=express.Router();
const Question=require("../models/Question");


const app= express();
app.use("./answerimages",express.static('answer'));
app.use(cors());

var storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        
        cb(null,"./answerimages");
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

var imgobj=[]

router.post("/",upload.array("file",10),(req,res,next)=>{
    console.log(req.files)
try{
    req.files.map((each)=>{
        imgobj.push(each)
    })
}
catch(err){
    console.log(err)
}
})

router.post("/upload",(req,res,next)=>{
    Question.findOne({documentname:req.body.document})
    .then((result)=>{
        
        result.questions[req.body.index].answer[req.body.ansindex].images=imgobj
        result.save()
    })
    .catch((err)=>{
        console.log(err) 
    })
})





module.exports=router