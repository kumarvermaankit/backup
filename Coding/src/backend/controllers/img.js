
const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");
const multer=require("multer");
const QImage=require("../models/Questionimg");
const router=express.Router();
const Question=require("../models/Question");
const UserProfile=require("../models/UserProfile.models");
var ObjectId = require('mongodb').ObjectID;
const app= express();
app.use("./uploads",express.static('uploads'));
app.use(cors());

const fs = require('fs');

var size=3;



var darray=[];

var imgobject={
    imagename:"",
    imagefile:{
        d:String,
        contentType:"String"
    },
    
}

var storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"./uploads");
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

var id_no="";
var imgid="";

router.post("/id",(req,res,next)=>{
    id_no=req.body.email;
})

router.post("/",upload.single("file"),(req,res,next)=>{
id_no=id_no;
imgid=Math.random();
try{
  imgobject={
      imgid:imgid,
      imagename:req.file.filename,
      imagefile:{
          d:req.file.path,
          contentType:"image/jpeg"
      }
  }
  console.log(imgobject);
}
catch(err){
console.log(err);
}    

// try{
// const newImage= new QImage({
//     id:id_no,
//     imgName:req.file.originalname,
//     imgData:req.file.path,
 
// })
// newImage.save()
// .then((result)=>{
//     console.log(result)
//     // res.json(200).json({
//     //     success:true,
//     //     document:result
//     // })
//     var edata=({
//         status:200,
//         success:true,
//         document:result
//     })
//     res.status(200).json(edata);
// })
// .catch((err)=>next(err));
// }
// catch(err){
//     console.log(err);
// }

})

// router.post("/add",(req,res,next)=>{

//     try{
//         UserProfile.findOne({email:id_no})
//         .then((res)=>{
//             res.images.push({
                
//             })
//             res.save();
//         })
//         .catch(err=>{console.log(err)})
//     }
//     catch(err){
//         console.log(err);
//     }
// })

router.post("/question",(req,res,next)=>{
    try{
        UserProfile.findOne({email:id_no})
        .then((res)=>{
            res.questions.push({
                imgName:imgobject.imagename,
                imgData:{
                    data:imgobject.imagename,
                    contentType:imgobject.imagefile.contentType
                },
                question_title:req.body.title,
                question_content:req.body.content,
                answer:[],
                votes:0,
                
            })
            res.save();
        })
      .catch(err=>console.log(err));
        
    }
    catch(err){
        console.log(err);
    }

    size++;
    
})



router.get("/",(req,res,next)=>{

    try{     
        UserProfile.find()
        .then(result=>result.map(res=>{
          
        if(darray.length>=0 && darray.length<=size){
            darray.push({questions:res.questions,username:res.username})
        }   
        
        
        
               
        })
        
        )
        
        .catch(err=>console.log(err));
        }
        catch(err){
        console.log(err);
        }
  
      
// darray=[{
//     questions:[],
//     username:""
// }];


})

router.get("/r",(req,res,next)=>{
    
    try{res.send(darray);
    darray=[];
    }
    catch(err){
        console.log(err);
    }
})

router.post("/addanswer",(req,res,next)=>{
  
    UserProfile.findOne({username:req.body.username})
    .then((ques)=>{
       
        ques.questions.map(each=>{
           
         if(each._id==req.body.id){
                each.answer.push({
                    description:req.body.title,
                    ans:req.body.content,
                    id:req.body.i,
                    vote:false
                })
            }
        })
       
        return ques.save();
    })
    .catch(err=>console.log(err));
    
})

router.post("/vote",(req,res,next)=>{
  
   UserProfile.findOne({username:req.body.username})
    .then((ques)=>{
        ques.questions.map(e=>{
            
            e.answer.map(each=>{
                
                // console.log(!each.vote)
            if(each.id==req.body.id){
            each.vote=!(each.vote)
            }
        })
    })
        return ques.save();
  })
       
    
})

module.exports=router;