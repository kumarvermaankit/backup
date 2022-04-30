const express=require("express")
const socketio=require("socket.io")
const http=require("http")

const cors= require("cors");
const mongoose=require("mongoose");

const room=require("./models/room");



require('dotenv').config();

const {addusers,removeuser,getUser,getUsersinroom}=require("./users")

const PORT=process.env.PORT||5000

const app=express();
app.use(cors());

const router=express.Router();

const server=http.createServer(app)

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


const io=socketio(server,{
    cors: {
        origin: "https://cyduckchat.netlify.app",
        methods: ["GET", "POST"]
      }
})



// app.use("/logup",signup)

io.on("connection",(socket)=>{
    console.log("User has Connected")

    socket.on("connect",()=>{
        console.log("User has Connected")
    })

    socket.on("disconnect",()=>{
        const user=removeuser(socket.id)
        
        if(user){
            io.to(user.room).emit("message",{user:"admin",text:`${user.name} has left`})
        }
    })

    socket.on("join",({name,room},callback)=>{
        
        
        const user=addusers(socket.id,name,room)
        
    
 
 
   if(!user){
       return callback("error")
   }

socket.emit("message",{user:"admin",text:`Welcome ${user.name} to the ${user.room} Room !!`})
socket.broadcast.to(user.room).emit("message",{user:"admin",text:`${user.name} has Joined !!`})
socket.join(user.room)

io.to(user.room).emit("roomData",{room:user.room,users:getUsersinroom(user.room)})

   callback();
    })

    socket.on("sendMessage",(message)=>{
        const user=getUser(socket.id)
        
        io.to(user.room).emit("message",{user:user.name,text:message})

        io.to(user.room).emit("roomData",{room:user.room,users:getUsersinroom(user.room)})
    })
})

server.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`)
})