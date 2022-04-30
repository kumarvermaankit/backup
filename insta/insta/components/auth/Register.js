import { func } from 'prop-types'
import React, { useState } from 'react'
import { View,TextInput, Button } from 'react-native'
import firebase from "firebase/app"
import "firebase/auth"
export default function Register() {

const [email,setemail]=useState("")
const [name,setname]=useState("")
const [password,setpassword]=useState("")

console.log(email,name,password)

function SignUp(){
firebase.auth().createUserWithEmailAndPassword(email,password)
.then((result)=>{
    console.log(result)
})
.catch((result)=>{
    console.log(result)
})
}

    return (
        <View>
            <TextInput placeholder="name" onChangeText={(name)=>{setname(name)}}/>
            <TextInput placeholder="email" onChangeText={(email)=>{setemail(email)}}/>
            <TextInput placeholder="password" secureTextEntry={true} onChangeText={(password)=>{setpassword(password)}}/>
            <Button title="Sign Up" onPress={()=>SignUp()} />
        </View>
    )
}
