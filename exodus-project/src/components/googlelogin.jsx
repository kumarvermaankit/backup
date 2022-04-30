import React from 'react';
import { useHistory } from "react-router-dom"
import GoogleLogin from 'react-google-login'
import axios from 'axios';
import { useAppContext } from "./lib/contextlib";


function Google(){

    
    const { userHasAuthenticated } = useAppContext(); 
    const history =useHistory();

const responsesuccessGoogle= (response)=>{

axios({
    method:"POST",
    url:"/googlelogin",
    data: {tokenId:response.tokenId}
}).then(res=>{
    if(res){
    localStorage.setItem('usertoken',res.data)
    userHasAuthenticated(true);
    history.push("/home")
}})
 .catch(err =>{
     console.log(err)
 })
}


const responsefailureGoogle=(response)=>{
    console.log(response);
}
return(
<div>
<GoogleLogin
    clientId="332494597752-f27u8a4kn43kv3v69j8891lcq5varrkl.apps.googleusercontent.com"
    buttonText="LoginWithGoogle"
    onSuccess={responsesuccessGoogle}
    onFailure={responsefailureGoogle}
    cookiePolicy={'single_host_origin'}
  />
</div>
)
    
}

export default Google;