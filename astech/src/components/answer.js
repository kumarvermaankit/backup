import React from "react";
import "./code.css";
import { useParams } from "react-router-dom";
import CodeM from "./cm"

function Answer(props){
    let params=useParams();
    
    return (
        <div>
            {/* <textarea  className="htxt" rows={2} cols={2} value={params.des} readOnly={params.state}/>
            <textarea  className="txt" rows={2} cols={2} value={params.ans} readOnly={params.state}/> */}
          <CodeM val={params.des} read={params.state} hght="60px" wdt="1000"/>
          <CodeM val={params.ans} read={params.state} hght="400px" wdt="1000"/>
          
          
            
        </div>
    )
}

export default Answer;