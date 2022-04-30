import React, { Component,useState } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import AddnewTender from "./NewTender"


function Home(){

    const [state,setstate]=useState(false);



    function TenderState(){
    
        setstate(true)
        
        
        }



return(
    
    
    <div>
    
    <button className="btn btn-secondary" >Search For Tenders</button> 
 
     <br />
     <br />
 
    <button onClick={TenderState} className="btn btn-secondary">Create-Tender</button> 
    {state?<AddnewTender/>:null}
    
     </div>
 
 )




}


export default Home