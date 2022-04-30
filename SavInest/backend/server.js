var express=require("express")
var socket=require("socket.io")
var cors=require("cors")

const app=express();

const port=process.env.PORT || 5000

const Server=app.listen(port)

const helmet=require("helmet")

app.use(cors)
app.use(helmet)

const io=socket(Server,{
    cors: {
        origin: "https://savinest.netlify.app",
        methods: ["GET", "POST"]
      }
}) 

console.log("Server Connected")

io.on("connection",(socket)=>{
    console.log(socket.id,"New User Connected")

})



module.exports={
    app,
    io
}
