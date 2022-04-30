const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");
const multer=require("multer");
const QImage=require("./models/Questionimg");
const router=express.Router();


const app= express();
app.use("/uploads",express.static('uploads'));
app.use(cors());

var storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"./public");
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
    },
    fileFilter:fileFilter
})

router.post("/",upload.single("imageData"),(req,res,next)=>{
console.log(req.body);
try{
const newImage= new QImage({
    imageName:req.body.name,
    imageData:req.file.path
})
newImage.save()
.then((result)=>{
    console.log(result)
    res.json(200).json({
        success:true,
        document:result
    })
})
.catch((err)=>next(err));
}
catch(err){
    console.log(err);
}
})


module.exports=router;