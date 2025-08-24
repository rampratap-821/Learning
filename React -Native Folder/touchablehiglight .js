import React, { useEffect, useState } from "react";
import{ Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View }from 'react-native';
const App =()=>{
    return(
      <View style ={{flex:1}}>
<TouchableHighlight>
    <Text style={[styles.main,styles.sucess]}>Button</Text>
</TouchableHighlight>
<TouchableHighlight>
    <Text style={styles.main}>Press me</Text>
</TouchableHighlight><TouchableHighlight>
    <Text style={[styles.main,styles.color]}>Click me</Text>
</TouchableHighlight><TouchableHighlight>
    <Text style={styles.main}>Print Me</Text>
</TouchableHighlight>
      </View>
    )
}
const styles = StyleSheet.create({
    main:{
backgroundColor:"gray",
margin:20,
padding:10,
fontSize:20,
textAlign:"center",
borderRadius:10
    },
    sucess:{
        backgroundColor:"green"
    },
    color:{backgroundColor:"yellow"}
})
export default App;