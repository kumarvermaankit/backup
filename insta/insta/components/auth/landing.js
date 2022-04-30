import React from 'react'
import { View,Text,Button, ProgressViewIOSComponent } from 'react-native'


export default function Landing(props) {
    return (
        <View style={{flex:1,justifyContent:"center"}}>
            <Button title="Register"
             onPress={()=>props.navigation.navigate("Register")}

            />
             <Button title="Login"
             onPress={()=>props.navigation.navigate("Login")}

            />
        </View>
    )
}
