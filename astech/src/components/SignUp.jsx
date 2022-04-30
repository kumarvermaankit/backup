
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import { useAppContext } from "./lib/contextlib";
import "../components/Signup.scss"
import Google from "./googlelogin";

function SignUp(props){

    const [signpara,setsignpara]=useState(false);
    // const [newUser, setNewUser] = useState(null);
    const { userHasAuthenticated } = useAppContext();
    // const [isLoading, setIsLoading] = useState(false);


const [userP,setUserP]=useState({
email:"",
username:"",
password:"",
});
const history=useHistory();

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
//    setIsLoading(true);


axios.post("http://localhost:5000/signup",userP)
.then(res=>{
 
   if(res.data.data===true){
    history.push("/signin");
        
    
   }
    else{
        setsignpara(true);
    }

})
.catch(err=>console.log(err));
// setIsLoading(false);
}












return(<div className="signup-container">
<Google />

    <form onSubmit={OnSubmit} >

    <h1 className="header">SignUp</h1>
  <div className="form-group">
  <label><h3><b>Email</b></h3></label>
      <input id="inputelement1" className="form-control" type="email" name="email" value={userP.email} onChange={OnChange}   required="true" autoComplete="off" placeholder="Enter your E-mail"/>
  </div>
  <div className="form-group">
  <label><h3><b>Username</b></h3></label>
      <input id="inputelement2" className="form-control" type="text" name="username" value={userP.username} onChange={OnChange}  required="true" autoComplete="off" placeholder="Enter Username"/>
  </div>
  <div className="form-group">
  <label><h3><b>Password</b></h3></label>
      <input  
      id="inputelement3"className="form-control" type="password" name="password" value={userP.password} onChange={OnChange}  required="true" autoComplete="off" placeholder="Enter Password"/>
  </div>
  <div>
      {signpara?<p>User already exists</p>:null}
  </div>
  <div>
      <button className="form-control" id="signupbutton" type="submit" classname="btn btn-primary"><h3><b>SignUp</b></h3></button>
  </div>
    </form>
    <a id="signinoption" href="/signin"><h2><b>SignIn</b></h2></a>
</div>)

}


export default SignUp