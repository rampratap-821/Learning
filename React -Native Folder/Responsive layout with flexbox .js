import React, { useEffect, useState } from "react";
import{ Button, Text, View }from 'react-native';
const App =()=>{
    return(
        <View style={{flex:1,}}>
        <View style={{flex:1,backgroundColor:"green",flexDirection:"row"}}>
            <Text style={{flex:1,backgroundColor:"white",margin:10,}}> </Text>
            <Text style={{flex:1,backgroundColor:"yellow",margin:10}}></Text>
            <Text style={{flex:1,backgroundColor:"black",margin:10}}></Text>

             </View>
        <View style={{flex:1,backgroundColor:"red"}}> </View>
        <View style={{flex:1,backgroundColor:"pink"}}> </View>

             </View>
    )
}
export default App;