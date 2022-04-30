import React, { useState } from "react";

import { useHistory } from "react-router-dom"

import { useAppContext } from "../lib/contextlib";

import "bootstrap/dist/css/bootstrap.min.css";

import login from "../UserFunctions";
import "../styles/Signin.scss"
import Google from "../googlelogin";
import Facebook from "../facebooklogin";







function SignIn(props){

    const [signpara,setsignpara]=useState(false);
    const { userHasAuthenticated } = useAppContext();  
   
const [userP,setUserP]=useState({
email:"",

password:"",
});


const history =useHistory();




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
 else{
     setsignpara(true);
 }
   })





.catch(err=>console.log(err));


}












return(<div className="login-container" id="divsign">
    
    <Google />     
    {/* <Facebook /> */}

    
    <form onSubmit={OnSubmit} >

    <h1 class="header" id="loginh"><b>LOGIN</b></h1>
  <div className="form-group">
  <label ><h3 id="lab"><b>Email</b></h3></label>
      <input id="inputelement1" className="form-control signinput" type="email" name="email" value={userP.email} onChange={OnChange} required="true" placeholder="Enter your E-mail" />
  </div>
 
  <div className="form-group">
  <label ><h3 id="lab"><b>Password</b></h3></label>
      <input id="inputelement2" className="form-control signinput" type="password" name="password" value={userP.password} onChange={OnChange} required="true" autoComplete="off" placeholder="Enter Password"/>
  </div>
  <div>
      {signpara?<p>Your Credentials are wrong</p>:null}
  </div>
  <div className="form-group">
      <button className="form-control  signinput" id="signbutton" type="submit" classname="btn btn-primary"><h3><b>LOGIN</b></h3></button>
  </div>
    </form>
<div>

<a id="signupoption" href="/signup"><h2><b>SignUp</b></h2></a>

</div>


</div>)


}


export default SignIn