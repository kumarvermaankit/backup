const express=require("express")


const Data=require("../models/data")
const Metrics=require("../models/metrics")

const router=express.Router()




router.get("/getmetrics",async(req,res)=>{
  try{
    // finding all metrics data and sending it to client server  
    const result=await Metrics.find()
    res.status(200).json(result)
  }
    catch(err){
res.status(200).json(err)
    }
})


router.get("/getData/:id",async(req,res)=>{
 
    try{
        // fetching Data based on id received from client side and sending the data
        const result=await Data.findOne({id:req.params.id})
        
        res.status(200).json(result)
    }
    catch(err){
        res.status(200).json(err)
    }
})

module.exports=router