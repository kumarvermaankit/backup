
const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");

require('dotenv').config();

const app= express();
const port= process.env.PORT || 5000;

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


const SignUp=require("./controllers/SignUp");
app.use("/signup",SignUp);

const SignIn=require("./controllers/SignIn");
app.use("/signin",SignIn);

const Googlelogin=require("./controllers/googlelogin");
app.use("/googlelogin",Googlelogin);

const Facebooklogin=require("./controllers/facebooklogin");
app.use("/facebooklogin",Facebooklogin)

const Sendmsg=require("./controllers/sendgridmail")
app.use("/sendmail",Sendmsg)





app.listen(port,()=>{
console.log("Server is running on Port 5000");

})