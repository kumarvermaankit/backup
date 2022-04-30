import { func } from 'prop-types'
import React, { useState } from 'react'
import { View,TextInput, Button } from 'react-native'
import firebase from "firebase/app"
import "firebase/auth"
export default function Login() {

const [email,setemail]=useState("")

const [password,setpassword]=useState("")

console.log(email,password)

function SignIn(){
firebase.auth().signInWithEmailAndPassword(email,password)
.then((result)=>{
    console.log(result)
})
.catch((result)=>{
    console.log(result)
})
}

    return (
        <View>
         
            <TextInput placeholder="email" onChangeText={(email)=>{setemail(email)}}/>
            <TextInput placeholder="password" secureTextEntry={true} onChangeText={(password)=>{setpassword(password)}}/>
            <Button title="Sign Up" onPress={()=>SignIn()} />
        </View>
    )
}
