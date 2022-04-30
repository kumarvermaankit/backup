const mongoose=require("mongoose");
const { Router } = require("express");
const Schema=mongoose.Schema;

const ImgSchema= new Schema({
imgName:{
    type:"String",
    required:true,
    default:"none"
},
imgData:{
type:"String",
required:true
}

})

const QImage=mongoose.model("QImage",ImgSchema);

module.exports=QImage;