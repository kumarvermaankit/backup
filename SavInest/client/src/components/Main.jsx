
import React, { useEffect, useState } from "react"


import Homepage from "./homepage"
import Navbar from "./navbar"
import Page2 from "./page2"
import Page3 from "./page3"
import Page4 from "./page4"
import Page5 from "./page5"




function Main(props) {

const [users,setusers]=useState([])    

const [pagestate,setpagestate]=useState("home")


function Pagechange(val){
setpagestate(val)
}

useEffect(()=>{

  props.socket.on("info",(data)=>{
    setusers(data)
}) 
},[])




console.log(users)
  return (
    <div>
  
    <Navbar Pagechange={Pagechange}/>
    {pagestate==="home"?<Homepage users={users} socket={props.socket}/>:null}
    {pagestate==="page2"?<Page2 />:null}
    {pagestate==="page3"?<Page3 />:null}
    {pagestate==="page4"?<Page4 />:null}
    {pagestate==="page5"?<Page5 users={users} socket={props.socket}/>:null}

    
    </div>
  );
}

export default Main;
