const express= require("express")
const app=express()
const socket=require("socket.io")

const Server=app.listen(8000)

const io=socket(Server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
})
const helmet=require("helmet")

app.use(helmet())

console.log("connected")

io.on("connection",(socket)=>{
    console.log(socket.id,"Connection Estabilished Successfully")
    
})

module.exports={
    app,
    io
}