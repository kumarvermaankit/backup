import React from 'react';
import { useHistory } from "react-router-dom"
import FacebookLogin from 'react-facebook-login'
import axios from 'axios';
import { useAppContext } from "./lib/contextlib";


function Facebook(){

    const { userHasAuthenticated } = useAppContext(); 
    const history =useHistory();


    const responseFacebook= (response)=>{
        console.log(response)
        axios({
            method:"POST",
            url:"/facebooklogin",
            data: {aceessToken:response.accessToken, userID: response.userID}
        }).then(res=>{
            console.log("Facebook login Success",res)
            if(res){
            localStorage.setItem('usertoken',res.data)
            userHasAuthenticated(true);
            history.push("/home")
            }
        })
         .catch(err =>{
             console.log(err)
         })
        }
    
return(
    <FacebookLogin
    appId="1167818743592531"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook} />   
)

}

export default Facebook