
const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");

require('dotenv').config();

const app= express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//Establishing connection with mongoDB

const uri= process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true,useUnifiedTopology:true });
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


//listening the app on port
app.listen(port,()=>{
    console.log("Server is running");
    
    })

   
const graphop=require("./controllers/graphoperations")
app.use("/graphoperations",graphop)