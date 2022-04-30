
// const nodemailer=require("nodemailer");
// const express=require("express");
// const cors= require("cors");
// const mongoose=require("mongoose");
// const { Router } = require("express");

// require('dotenv').config();

// const app= express();


// app.use(cors());
// app.use(express.json());

// const router = express.Router();

// router.get("/",(req,res)=>{

//   let testAccount = await nodemailer.createTestAccount();

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'isadore.rogahn@ethereal.email',
//         pass: 'VNApprRkza19BwR36C'
//     }
// });


// let info = await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// })

// })

// module.exports=router;