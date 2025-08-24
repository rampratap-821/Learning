import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, StatusBar, Button, Platform } from 'react-native';

const App =()=>{
    return(
        <View>
            <Text style ={{fontSize:30}}>Platform : {Platform.OS}</Text>
            {
                Platform.OS=="IOS"?
                <View style={{ backgroundColor:"yellow",height:100,width:100}}></View>
                :
                <View style={{ backgroundColor:"red",height:100,width:100}}></View>

}
<Text style={style.test}>Hello</Text>
        </View>
    )
}
const style=StyleSheet.create({
    test:{
        fontSize:30,
        color:Platform.OS=="android"?"green":"pink"

    }
})
export default App;
