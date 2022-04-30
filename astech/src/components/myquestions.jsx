import Community from "./community"
import jwt_decode from "jwt-decode";
import { useEffect,useState } from "react";
import axios from "axios";
function MyQuestions(){
    const token=localStorage.usertoken;
    var decoded=jwt_decode(token)
  
   


// useEffect(()=>{
//     axios.get(`http://localhost:5000/upload/mq/${decoded.data.username}`)
//     .then((result)=>{
        
//        setresults(result.data.questions)
   
//    })
 
 
// },[str])

  
// for(var i=0;i<results.length;i++){
//     if(i===(results.length-1)){
//         str=str+`${results[i].index_no}`+`docname${results[i].docname}`
        
//     }
//     else{
//     str=str+`${results[i].index_no}`+`docname${results[i].docname}`+","
    
//     } 
// }



    
 
    return(
        <div>
        
        <Community url={`http://localhost:5000/upload/myquestions/`} url1={`http://localhost:5000/upload/mq/${decoded.data.username}`} />
        </div>
    )
}

export default MyQuestions;