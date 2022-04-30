const mongoose=require("mongoose");

var Schema=mongoose.Schema;




const DataSchema= new Schema({
//id will be used to fetch data    
id:{
    type:"String",
    required:true
},
data:[]


},{timestamps:true})

const Data=mongoose.model("Data",DataSchema);

module.exports=Data;