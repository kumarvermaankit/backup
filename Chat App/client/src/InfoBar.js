import React from "react";
import onlineIcon from "./Icons/closeIcon.png";
import closeIcon from "./Icons/onlineIcon.png";
import "./infobar.css";

function InfoBar(props){
    return(
<div className="infoBar">
    <div className="leftInnerContainer">
<img className="onlineIcon" src={onlineIcon} alt="OnlineIcon"/>
<h3>{props.room}</h3>
    </div>
    <div className="rightInnerContainer">
    <a href="/"><img src={closeIcon} alt="CloseIcon"/></a>
</div>
</div>
    )


    
}


export default InfoBar;