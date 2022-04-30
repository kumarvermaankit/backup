import React, { Component,useState } from "react";

function tender(){

    
        
        const [tender,settender]=useState({
    
            subject:"",
            description:"",
            address:"",
            priceRange:"",
            collabarationState:"",
            field:"",
            
            
            });
            
            
            
        
            function OnChange(event){
        
                const {name,value}=event.target;
                 return(
            settender(prevValue=>{
            return{
                ...prevValue,
                [name]:value
            }
            })
            )
            }
    
}

export default tender;