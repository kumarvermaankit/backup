const mongoose = require("mongoose");


const express = require("express");
const app=express();
const cors= require("cors");

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology:true});

const connection=mongoose.connection;

try
{connection.once('open', ()=>{
    console.log("MongoDb database connected successfully");
})}
catch(err){
    console.log(err);
}

var tenderroute=require('./routes/tender');


app.use('/tender',tenderroute);


app.listen(port,()=>{
    console.log("Server is running on Port 5000");
})



