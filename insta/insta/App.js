import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import Landing  from './components/auth/landing';
import Register from './components/auth/Register';
import firebase from "firebase/app"
import Login from './components/auth/Login';
const firebaseConfig = {
  apiKey: "AIzaSyD91wHc1hGcdtmnCmD0J1Y_l9nZsRRU7_k",
  authDomain: "insta-59255.firebaseapp.com",
  projectId: "insta-59255",
  storageBucket: "insta-59255.appspot.com",
  messagingSenderId: "88300147247",
  appId: "1:88300147247:web:46e6fd7a870f8a11cfacda",
  measurementId: "G-W3KV5HVK28"
};

if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig)
}

const Stack=createStackNavigator()
export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Landing">
<Stack.Screen name="Landing" component={Landing} options={{headerShown:false}}/>
<Stack.Screen name="Register" component={Register} />
<Stack.Screen name="Login" component={Login} />
</Stack.Navigator>
</NavigationContainer>
   
  );
}

