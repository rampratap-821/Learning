import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";

const Transport = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>

      <View style={{marginLeft:75,marginTop:20}}>

        <Image
          source={require('../../assets/image/Transport.jpg')} 
        />
      </View>

      <Text style={{textAlign:"center",fontSize:25,marginTop:20,color:"red"}}>Forgot Password ?</Text>
      <Text style={{textAlign:"center"}}>Have You Forgot Password</Text>
      <View style={{marginTop:40}}>
      <View style={{ borderWidth: 2, margin: 20, borderRadius: 5 }}>
        <TextInput
          placeholder="Enter Email"
        />
      </View>
      <View>
        <TouchableOpacity
          style={{ backgroundColor:"yellow",margin:20,padding:15,borderRadius:5}}>
          <Text style={{textAlign:"center"}}>Send varification Email</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
      
  )
}
export default Transport;