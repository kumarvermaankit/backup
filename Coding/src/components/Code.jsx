import React from "react";
import "./code.css"




function Code(props){

   
return(
    <div className="idiv">

    <textarea className="htxt"  name="title" rows={2} cols={2}  value={props.title}  onChange={props.onChange}  placeholder="Enter Question"/>
    <textarea  className="txt" name="content" rows={10} cols={10} value={props.content} onChange={props.onChange} placeholder="Enter or Copy Code"/>
     
    </div>
)
    }

    export default Code;