const router=require("express").Router();

const Tender=require('../models/tender.model');

router.route("/").get((req,res)=>{
    Tender.find()
    .then(tender=>res.json(tender))
    .catch(err=>(res.status(400).json("Err!"+err)));
})

router.route("/add").post((req,res)=>{

const subject=req.body.subject;
const description=req.body.description;
const address=req.body.duration;
const pricerange=req.body.pricerange;
const field=req.body.field;
const collabarationState=req.body.collabarationState;



const newTender= new Tender({
subject:subject,
description:description,
address:address,
pricerange:pricerange,
field:field,
collabbarationState:collabarationState

})

newTender.save()
.then(()=>res.json('Tender is Saved'))

.catch(err=>res.status(400).json('Err!'+err));

})

module.exports=router;