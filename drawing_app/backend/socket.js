var io=require("./server").io

var addUser=require("./socketfncs").addUser
var removeUser=require("./socketfncs").removeUser
var updateUser=require("./socketfncs").updateUser
var getUser=require("./socketfncs").getUser
var allUsers=require("./socketfncs").allUsers
io.on("connection",(socket)=>{
    console.log("connection done")
socket.on("join",(user)=>{

addUser(socket.id,user)
var users=allUsers()
users.map((e)=>{
    io.to(e.socketid).emit("drawinfo",getUser(e.socketid))
})

})

socket.on("multi",(user)=>{
    addUser(socket.id,user)
var users=allUsers()
console.log(users)
users.map((e)=>{
    io.to(e.socketid).emit("drawinfo",getUser(e.socketid))
})
})




socket.on("draw",(data)=>{
 
    var users=allUsers()
    users.map((e)=>{
        if(e.socketid!==socket.id){
            io.to(e.socketid).emit("drawuser",data)
        }
       })
})

socket.on("multidraw",(data)=>{
    
})


socket.on("disconnect",()=>{
    console.log("disconnected")
    removeUser(socket.id)
})




})

module.exports=io;