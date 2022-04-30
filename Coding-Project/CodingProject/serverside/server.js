
const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");
const multer=require("multer");


require('dotenv').config();

const app= express();
const PORT= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri= process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true });
const connection=mongoose.connection;
try
{
    connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})
}
catch(err){
    console.log(err);
}

const imgupload=require("./img");
app.use("/upload",imgupload);

app.listen(PORT,()=>{
    console.log("Server Connected");
})



