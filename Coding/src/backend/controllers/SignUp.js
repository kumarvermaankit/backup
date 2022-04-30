
require('dotenv').config();
const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const router = express.Router();

const app = express();

var cookieParser = require('cookie-parser')
const jwt=require('jsonwebtoken');
app.use(cookieParser());
app.use(cors());






const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserProfile=require("../models/UserProfile.models");

const secret=process.env.MYSECRET;


router.get("/",(req,res)=>{
    UserProfile.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err));

    })

router.post("/",(req,res)=>{

const today=new Date();

const newUser= {
 email:req.body.email,
 username:req.body.username,
password:req.body.password,
questions:[],
images:[]

}

UserProfile.findOne({email:req.body.email})
.then(user=>{
    if(!user){
        bcrypt.hash(req.body.password,saltRounds,(err,hash)=>{
       
        newUser.password=hash;
        UserProfile.create(newUser)
        .then(user=>{
res.json({status:user.username + "  is registered Successfully"})
        })     
.catch(err=>res.json("ERROR" + err));
        


        })
    }
    else{
        res.json({error:"User Already Exists"});
    }
})
.catch(err=>res.json({status:"User Already Exists"}));

})




module.exports=router;