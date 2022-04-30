import React from "react";
import "./code.css"




function Input(props){

   
return(
    <div className="idiv">

    <textarea className="htxt"  name="title" rows={2} cols={2}  value={props.title}  onChange={props.onChange}  placeholder="Enter Question"/>
   
     
    </div>
)
    }

    export default Input;