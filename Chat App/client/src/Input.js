import React from "react";
import "./input.css"

function Input(props){

    return(
        <div>
        <form>
            <input className="input" type="text" placeholder="type a message..." onChange={event=>props.setMessage(event.target.value)} onKeyPress={event=>event.key==="Enter"?props.sendMessage(event):null}/>
        
        <button className="sendButton" onClick={(event)=>props.sendMessage(event)}>Send</button>
            </form>
        </div>
    )
}

export default Input;