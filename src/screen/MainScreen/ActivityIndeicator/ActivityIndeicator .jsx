// import { View, Text } from 'react-native'
// import React from 'react'

// const ActivityIndeicator  = () => {
//   return (
//     <View>
//       <Text>ActivityIndeicator </Text>
//     </View>
//   )
// }

// export default ActivityIndeicator 


import React, { useEffect, useState } from "react";
import{ View,TouchableOpacity, Text, StyleSheet, ActivityIndicator, Button }from 'react-native';
const ActivityIndeicator = ()=>{
    const [show,setShow]=useState(false)
    const displayloader = ()=>{
        setShow(true)
        setTimeout(()=>{
            setShow(false)
        },3000)
    }
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            

            <ActivityIndicator size={70} color="red" animating={show}/>
            <Button title="Show"onPress={displayloader} />
        </View>
    )
}
export default ActivityIndeicator;