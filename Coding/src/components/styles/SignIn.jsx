import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import { BrowserRouter as Router,Route } from "react-router-dom";
import Home from "../home"
import { useAppContext } from "../lib/contextlib";

import "bootstrap/dist/css/bootstrap.min.css";
import {Redirect} from 'react-router-dom';
import login from "../UserFunctions";
import "../styles/Signin.scss"
import Google from "../googlelogin";
import Facebook from "../facebooklogin";







function SignIn(props){

    const { userHasAuthenticated } = useAppContext();  
   
const [userP,setUserP]=useState({
email:"",

password:"",
});


const history =useHistory();


var access=false;

function OnChange(event){

const {name,value}=event.target;

return( 

setUserP(prevValue=>{

return{
...prevValue,
[name]:value

}
})    
)
}



function OnSubmit(event){

   event.preventDefault();

   login(userP).then(res=>{
     if(res){
         
userHasAuthenticated(true);
history.push("/file")

 
     }
   })





.catch(err=>console.log(err));


}












return(<div className="wrapper">
    
    <Google />     
    <Facebook />

    
    <form 
    onSubmit={OnSubmit} >

    <h1 class="header">Come On <b>Signin</b> Fast, <br/> We are waiting for you</h1>
  <div className="form-group">
  <label><h3><b>Email</b></h3></label>
      <input id="inputelement1" className="form-control" type="email" name="email" value={userP.email} onChange={OnChange} required="true" />
  </div>
 
  <div className="form-group">
  <label><h3><b>Password</b></h3></label>
      <input id="inputelement2" className="form-control" type="password" name="password" value={userP.password} onChange={OnChange} required="true" autoComplete="off" />
  </div>
  <div className="form-group">
      <button className="form-control" id="signbutton" type="submit" classname="btn btn-primary"><h3><b>SignIn</b></h3></button>
  </div>
    </form>
<div>

<a id="signupoption" href="/signup"><h2><b>SignUp</b></h2></a>

</div>


</div>)


}


export default SignIn