import React, { useState,useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./chat.css";
import InfoBar from "./InfoBar"
import Input from "./Input"
import Messages from "./Messages"

function Chat({location}){
    const [name,setName]=useState("");
    const [room,setRoom]=useState("");
    const [message,setMessage]=useState("");
    const [messages,setMessages]=useState([]);
    const [users, setUsers] = useState('');
    const ENDPOINT="localhost:5000";
    
useEffect(()=>{
const{name,room}=queryString.parse(location.search)

var socket=io(ENDPOINT);

setName(name);
setRoom(room);


socket.emit('join',{name,room});

return()=>{
    socket.emit("disconnect")
    
    socket.off()
}
},[ENDPOINT,location.search])

useEffect(()=>{

socket.on("message",(message)=>{
setMessages(...messages,message)
})

socket.on("roomData",({users})=>{
    setUsers(users)
})

},[messages])

const sendMessage=(event)=>{

event.preventDefault();

    if(message){
        socket.emit('sendMessage',message,()=>setMessage(""))
    }
}

console.log(message,messages);

return(
<div className="outerContainer">
    <div className="container">
    <InfoBar room={room}/>
    <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
<Messages messages={messages} name={name}/>
    </div>
</div>
)

}

export default Chat;