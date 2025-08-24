import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { SAKRKARIJOBS } from '../../../Navigation/NavigationString'



const Home = () => {
   // const navigation = useNavigation()
    return (
        <View style={{flex:1,backgroundColor:"yellow",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity  
             style={{backgroundColor:"red",padding:10,paddingHorizontal:20}}
        //  onPress={()=> navigation.navigate(SAKRKARIJOBS)}
            >
            <Text></Text>
            </TouchableOpacity>
            </View>
    )
}

export default Home