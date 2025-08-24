import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { POETRY } from '../../../Navigation/NavigationString'
import { useNavigation } from '@react-navigation/native'

const User = () => {
  const navigation = useNavigation()
   
  return (
    <View style={{flex:1,backgroundColor:"green",justifyContent:"center",alignItems:"center"}}>
    
      <TouchableOpacity 
       onPress={()=> navigation.navigate(POETRY)}
      style={{backgroundColor:"#fff",padding:12}}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default User