// require('dotenv').config();
// const express = require("express");

// const cors = require("cors");

// const mongoose = require("mongoose");

// const router = express.Router();

// var cookieParser = require('cookie-parser')
// const bcrypt = require('bcrypt');

// const saltRounds = 10;
// const base64url = require('base64url');

// const jwt=require('jsonwebtoken');
// const secretkey=base64url.fromBase64(process.env.SECRET);



// const app = express();






// app.use(cookieParser());
// app.use(cors());

// const UserProfile=require("../models/UserProfile.models");


// router.post("/:email",(req,res)=>{
//     UserProfile.findOne({email:req.params.email})
//     .then((result)=>{
//         if(result){
//             if(bcrypt.compareSync(req.body.oldpassword,result.password)){
//                 bcrypt.hash(req.body.newpassword,saltRounds,(err,hash)=>{
//                     result.password=hash;
//                 })
//             }
//         }
//         return result.save();
//     })
// })

// module.exports=router;