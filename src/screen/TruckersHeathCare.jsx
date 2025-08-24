import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, TextInput, TouchableOpacity } from 'react-native'
import { Text } from "react-native-gesture-handler";
import { DASHBOARD, DRAWERNAVIGATION, RAGISTERHERE, TRANSPORT } from "../Navigation/NavigationString";

const TruckersHeathCare = () => {
  const Navigation = useNavigation()
  return (
    < View style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        source={require('../assets/image/TruckersHeathCare.jpg')}
        style={{ height: 150, width: 150, borderRadius: 75, marginLeft: 100, marginTop: 40 }}
      />
      <View>
        <Text style={{ textAlign: "center", fontSize: 30, color: "green" }}>Rampratap</Text>
      </View>
      < View style={{ border: 10, borderWidth: 2, margin: 20, marginTop: 20, borderRadius: 10, borderColor: "gray" }} >
        <TextInput
          style={{ fontSize: 20 }}
          placeholder="Enter Number"
        />
      </View>

      < View style={{ border: 10, borderWidth: 2, margin: 20, marginTop: 5, borderRadius: 10, borderColor: "gray" }} >

        <TextInput
          style={{ fontSize: 20 }}

          placeholder="Enter Passsword"
        />
      </View>
<TouchableOpacity onPress={()=>Navigation.navigate(TRANSPORT)}>
      <Text style={{ color: "red",marginLeft:20 }}>Forgot Password</Text>

</TouchableOpacity>
      
      
      <View style={{ marginTop: 50 }}>
        < Text style={{ textAlign: "center", fontSize: 20 }}>OR</Text>
      </View>
      <View style={{ flex: 1, marginTop: 70, flexDirection: "row", marginLeft: 60 }}>
        <Text style={{ color: "violet" }} >Not a member ?</Text>
        <Text style={{ color: "blue" }} >RagisterNow</Text>

      </View>
      <TouchableOpacity
      onPress={()=>Navigation.navigate(DRAWERNAVIGATION)}
        style={{ marginTop: 0, backgroundColor: "skyblue", margin: 20, padding: 15, borderRadius: 10 }}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 20, }}>Login</Text>
      </TouchableOpacity>


    </View >
  )
}
export default TruckersHeathCare;