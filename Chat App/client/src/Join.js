import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Join.css";

function Join(){

const [name,setName]=useState("");
const [room,setRoom]=useState("");

return(

    <div>
    <div className="joinOuterContainer">
    <div className="joinInnerContainer">
    <h className="heading">Join</h>
    <div><input className="joinInput" placeholder="Name" type="input" onChange={(event)=>{setName(event.target.value)}} /></div>
    <div><input className="joinInput mt-20" placeholder="Room" type="input" onChange={(event)=>{setRoom(event.target.value)}} /></div>
    <Link onClick={event=>(!name || ! room)?event.preventDefault():null}  to={`/chat?name=${name}&room=${room}`}>
        <button className="button mt-20" type="submit">SignIn</button>
    </Link>
    </div>
    </div>
    </div>
)

}

export default Join;