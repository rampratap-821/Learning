import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { DRAWERNAVIGATION, HOME } from '../../Navigation/NavigationString'


const Login = () => {
   const navigation = useNavigation()
    
    return (
        <View style={{flex:1,backgroundColor:"blue",justifyContent:"center",alignItems:"center"}}>
           
            <TouchableOpacity 
            onPress={()=> navigation.navigate(DRAWERNAVIGATION)}
             style={{padding:10,backgroundColor:"red",paddingHorizontal:20}}
            >
                <Text style={{color:"#fff"}}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login