const mongoose=require("mongoose");
const { Router } = require("express");
const Schema=mongoose.Schema;

const ImgSchema= new Schema({
id:{
    type:"Number",
    required:true,
},

imgName:{
    type:"String",
   
    default:"none"
},
imgData:{
type:"String",
default:"none"
}


})

const QImage=mongoose.model("QImage",ImgSchema);

module.exports=QImage;