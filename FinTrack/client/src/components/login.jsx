import React, { useEffect } from "react"
import { useHistory } from "react-router"

import { nanoid } from 'nanoid'
import "./login.css"



function Login(props){

let history=useHistory()
     

useEffect(()=>{
    props.connectSocket()
},[])

function Submit(event){


event.preventDefault()

props.socket.emit("join",props.info)
history.push(`/main/${props.info.name}/${props.info.family}`)
}


function Generate(event){


event.preventDefault()
var t=nanoid(15)
document.getElementById("family_id").value=t

props.afamily(t)
}

return(
        <div className="login-container">
        <form onSubmit={(event)=>Submit(event)}>
            <h1>Login to Track</h1>
            <div className="form-group">
             <label for="">Name</label>
             <input type="text" className="form-control" required onChange={props.addName}/>

            </div>
            <div className="form-group">
                <label for="">Family Key</label>
                <input type="text" id="family_id" className="form-control" required onChange={props.addfamily}/>
                <button onClick={(event)=>Generate(event)} className="gen-control">Generate Id</button>
            </div>
            <input type="submit" className="btn " value="Login" />
        </form>
    </div>
    )
}

export default Login