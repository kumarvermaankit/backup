// import React from "react";
// import { useState } from "react";
// import "./changepassword.css";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// function Change(){

//     const token = localStorage.usertoken
//     const decoded=jwt_decode(token)

//     const[passwords,setpasswords]=useState({
//         oldpassword:"",
//         newpassword:"",
//         confirmpassword:""
//     })

//     function PswChange(event){
//      const {name,value}=event.target;

//     setpasswords((prevvalue)=>{
//            return{
//                ...prevvalue,
//                [name]:value
//            }
//     })

//     }

//   function  Sendpassword(){
//       if(passwords.newpassword===passwords.confirmpassword){
//         axios.post(`/changepassword/${decoded.data.email}`,passwords)
//       }
  
//   }

//     return(
//         <div>
//             <form>
//                 <input className="psw" type="text" name="oldpassword" value={passwords.oldpassword} onChange={PswChange} placeholder="Old-Password"/>
//                 <input className="psw" type="text" name="newpassword" value={passwords.newpassword} onChange={PswChange} placeholder="New-Password"/>
//                 <input className="psw" type="text" name="confirmpassword" value={passwords.confirmpassword} onChange={PswChange} placeholder="Confirm-Password"/>
//                 <button type="submit" onClick={Sendpassword}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Change;