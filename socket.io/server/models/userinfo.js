
require('dotenv').config();
var mongoose=require("mongoose")
var encrypt=require("mongoose-encryption")

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    email:{
        type:"String",
        required:true,
        unique:true
    },
    password:{
        type:"String",
        required:true
    },
    username:{
         type:"String",
         required:true,
         unique:true
    },
    rooms:[{
    roomname:"",
    roomid:"",
    roomindex:0
    }]
})

const User=mongoose.model("User",UserSchema)
const secret=process.env.MYSECRET
UserSchema.plugin(encrypt,{secret:secret,excludeFromEncryption:["Name","rooms"]});


module.exports=User