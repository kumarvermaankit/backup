import React from "react";
import axios from "axios";

export const register=newUser=>{

    return axios
          .post('/signup',{
          email: newUser.email,
          username: newUser.username,
          password: newUser.password


          })
          .then(res=>{
              console.log("Registere Successfully")
          })
}

export const login = user=>{

return axios
      .post('/signin',{
email: user.email,
password: user.password

      })
      .then(res=>{
          localStorage.setItem('usertoken',res.data)
           return res.data
      })
       .catch(err =>{
           console.log(err)
       })


}

export default login