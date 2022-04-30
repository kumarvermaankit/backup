
import React, { useState } from "react"
import {BrowserRouter as Router,Route} from "react-router-dom"
import Main from "./components/Main"

import Login from "./components/login"
import io from "socket.io-client"
import './App.css';

let socket
function App() {

  
  const ENDPOINT="https://savinest.herokuapp.com/" 
  

  
  const [info,setinfo]=useState({
    name:"",
    family:"",
    expenses:{
        food:{
          val:0,
          limit:0
        },
        travel:{
          val:0,
          limit:0
        },
        health:{
          val:0,
          limit:0
        },
        education:{
          val:0,
          limit:0
        },
        loan:{
          val:0,
          limit:0
        },
        others:{
          val:0,
          limit:0
        }

    }
})


function connectSocket(){
  socket=io(ENDPOINT)
}

function addName(event){


setinfo((prev)=>{
  return{
    ...prev,
    name:event.target.value
  }
})
}

function addfamily(event){

  

  setinfo((prev)=>{
    return{
      ...prev,
      family:event.target.value
    }
  })
}

function afamily(val){
  setinfo((prev)=>{
    return{
      ...prev,
      family:val
    }
  })
}

  return (
    <div className="App">


    <Router>
    <Route exact path="/main/:name/:family"><Main info={info} socket={socket}/></Route>
      <Route exact path="/"><Login info={info} addName={addName} addfamily={addfamily} socket={socket}  connectSocket={connectSocket} afamily={afamily}/></Route>
    </Router>
    </div>
  );
}

export default App;
