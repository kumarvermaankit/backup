import React from "react";
import "./code.css";
import { useParams } from "react-router-dom";


function Answer(props){
    let params=useParams();
    
    return (
        <div className="idiv">
            <textarea  className="htxt" rows={2} cols={2} value={params.des} readOnly={params.state}/>
            <textarea  className="txt" rows={2} cols={2} value={params.ans} readOnly={params.state}/>
          
          
            
        </div>
    )
}

export default Answer;