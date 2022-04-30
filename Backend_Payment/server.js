
const express=require("express");
const cors= require("cors");


const app= express();
const port= process.env.PORT || 5000;

app.use(cors());







const payment=require("./payment");
app.use("/payment",payment);






app.listen(port,()=>{
console.log("Server is running");

})