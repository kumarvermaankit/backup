const mongoose=require("mongoose");

var Schema=mongoose.Schema;

const MetricSchema= new Schema({
id:{
    type:"String",
    required:true
},
measure:{
    type:"String"
},
dimensions:[]


},{timestamps:true})

const Metrics=mongoose.model("Metrics",MetricSchema);

module.exports=Metrics;