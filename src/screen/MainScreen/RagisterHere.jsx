import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { Text } from "react-native-gesture-handler";
import { DRAWERNAVIGATION, TRUCKERSHEALTHCARE } from "../../Navigation/NavigationString";
import { useNavigation } from "@react-navigation/native";

const RagisterHere = () => {
      const Navigation = useNavigation()

    const[radio,setRadio]=useState(0)
    
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{marginTop:20,marginLeft:100}} >

        <Image source={require('../../assets/image/Bihar.jpg')}
         style={{ height: 180, width: 180, borderRadius: 50, }} />
      </View>
      <TouchableOpacity onPress={()=>Navigation.navigate(TRUCKERSHEALTHCARE)}>
      <Text style={{fontSize:30,textAlign:"center",color:"green"}}>Ragister Here </Text>
      </TouchableOpacity>
      <View style={{ border: 2, borderWidth: 1, color: "gray", margin: 10, borderRadius: 5 }}>
        <TextInput
          style={{ fontSize: 10 }}
          placeholder="Enter Name"
        />
      </View>
      <View style={{ border: 2, borderWidth: 1, color: "gray", margin: 10, borderRadius: 5 }}>
        <TextInput
          style={{ fontSize: 10 }}
          placeholder="Enter Mo. No"
        />
      </View><View style={{ border: 2, borderWidth: 1, color: "gray", margin: 10, borderRadius: 5 }}>
        <TextInput
          style={{ fontSize: 10 }}
          placeholder="Enter UserId"
        />
      </View><View style={{ border: 2, borderWidth: 1, color: "gray", margin: 10, borderRadius: 5 }}>
        <TextInput
          style={{ fontSize: 10 }}
          placeholder="Enter Password"
        />
      </View>
      <Text style={{ marginLeft: 10 }} >Select Your Gender</Text>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{margin:10 }} onPress={()=>setRadio(1)} >
          <View style={{ height: 40, width: 40, borderWidth: 2, borderColor: "green", borderRadius: 20 }}>
            { radio ===1?
            <Text style={{ height: 30, width: 30, backgroundColor: "red", borderRadius: 15, margin: 3 }}></Text>
            :null
            }
          </View>
          <Text>male</Text>
        </TouchableOpacity>
          <TouchableOpacity style={{margin:10 }} onPress={()=>setRadio(2)} >
          <View style={{ height: 40, width: 40, borderWidth: 2, borderColor: "green", borderRadius: 20 }}>
            { radio ===2?
            <Text style={{ height: 30, width: 30, backgroundColor: "red", borderRadius: 15, margin: 3 }}></Text>
            :null
            }
          </View>
          <Text>male</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={{backgroundColor:"blue",margin:10,padding:10,borderRadius:5}}>
        <Text style={{fontSize:20,textAlign:"center", color:"white",}}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  )
}
export default RagisterHere;