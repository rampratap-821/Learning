import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.main}>
            <Pressable
           // onPress={()=>alert("I  Like You")}
           // onLongPress={()=>alert("Wow")}
            onPressIn={()=>alert("Vicky")}
            onPressOut={()=>alert("Rampratap")}

            > 
                <Text style={styles.text}>Pressable</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
      backgroundColor:"skyblue"  ,
      fontSize:20,
      margin:20,
      borderRadius:10,
      textAlign:"center",
      color:"white"
    }
});

export default App;
