import React from "react";
import "./message.css"
import ReactEmoji from "react-emoji";

const Message= ({message:{user,text},name})=>{

let isSentByCurrentUser=false;

const trimmedname=name.trim().toLowerCase();

if(user===trimmedname){
    isSentByCurrentUser=true;
}

return(
    isSentByCurrentUser ?(
    <div className="messageContainer justifyEnd">
     <p className="sendText pr-10">{trimmedname}</p>  
     <div className="messageBox backgroundBlue">
         <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
     </div>
    </div>
    )
    : (
        <div className="messageContainer justifyStart">
   
     <div className="messageBox backgroundLight">
         <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
     </div>
     <p className="sendText pl-10">{user}</p>  
    </div>

    )
)

}

export default Message;