// import React from 'react'

// function Navigation() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Navigation
 

// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BOOKINGINFORMATION, BOTTOMTAB, DRIVERINFORMATION, HEDERSCREEN, HOMESCREEN, LOCATIONCON, LOGINSCREEN, ROGERPAYADVANCED, SPSCEEN, TEXBOKING } from "./NavigationString";
import LoginScreen from "../screen/Auth/Login";
import HomeScreen from "../Component/HomeScreen";
import HederScreen from "../screen/MainScreen/HederSrceen";
import Taxiboking from "../screen/MainScreen/Taxiboking";
import LocationCon from "../screen/MainScreen/LocationCon";
import BottomTab from "./ButtomTab";
import BookingInformation from "../screen/MainScreen/BookingInformation/BookingInformation";
import DriverInformation from "../screen/MainScreen/BookingInformation/DriverInformation";
import SpSceen from "../screen/Auth/SpSceen";
import RogerPayAdvanced from "../screen/MainScreen/RogerPayAdvanced/RogerPayAdvanced";


const Stack = createNativeStackNavigator();

export default function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SPSCEEN} component={SpSceen} />
        <Stack.Screen name={LOGINSCREEN} component={LoginScreen} />
         <Stack.Screen name={BOTTOMTAB} component={BottomTab} />
        <Stack.Screen name={HOMESCREEN} component={HomeScreen} />
         <Stack.Screen name={HEDERSCREEN} component={HederScreen} />
         <Stack.Screen name={TEXBOKING} component={Taxiboking} />
         <Stack.Screen name={LOCATIONCON} component={LocationCon} />
           <Stack.Screen name={BOOKINGINFORMATION} component={BookingInformation} />
         <Stack.Screen name={DRIVERINFORMATION} component={DriverInformation} />
         <Stack.Screen name={ROGERPAYADVANCED} component={RogerPayAdvanced} />

         
      </Stack.Navigator>
    </NavigationContainer>
  );
}
