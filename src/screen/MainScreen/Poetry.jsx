import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ENTERTAINMENT_STORY } from '../../Navigation/NavigationString'

const Poetry = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1,justifyContent:"center"}}>
      <TouchableOpacity 
      onPress={()=>navigation.navigate(ENTERTAINMENT_STORY)}
      style ={{backgroundColor:"violet",padding:20,margin:20,borderRadius:10}}
      >
      <Text style ={{textAlign:"center",fontSize:20}}>Poetry</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Poetry