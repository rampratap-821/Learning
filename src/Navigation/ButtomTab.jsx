import * as React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/MainScreen/HomeScreen/Home';
import Profile from '../screen/MainScreen/HomeScreen/Profile';
import Match from '../screen/MainScreen/HomeScreen/Match';
import Love from '../screen/MainScreen/Love';
import DashBoard from '../screen/MainScreen/DashBoard';


const Tab = createBottomTabNavigator();

const ButtomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      
      
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashBoard}
        options={{
             headerShown:false,
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text>,
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
             headerShown:false,
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>👤</Text>,
        }}
      />

      <Tab.Screen
        name="Match"
        component={Match}
        options={{
            headerShown:false,
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏏</Text>,

        }}
      />
       <Tab.Screen
        name="Love"
        component={Love}
        options={{
            optionsShown:false,
            tabBarIcon:()=><Text style ={{fontSize:20}}>💛</Text>
        }}
        />   
            </Tab.Navigator>
  ) }

  export default ButtomTab;