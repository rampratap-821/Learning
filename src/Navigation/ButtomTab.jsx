import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Order from '../screen/MainScreen/Order';
import Payments from '../screen/MainScreen/Payments';
import Profile from '../screen/MainScreen/Profile';
import HederScreen from '../screen/MainScreen/HederSrceen';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconUrl;

            if (route.name === 'Home') {
              iconUrl = 'https://cdn-icons-png.flaticon.com/128/1946/1946436.png';
            } else if (route.name === 'Order') {
              iconUrl = 'https://cdn-icons-png.flaticon.com/128/839/839860.png';
            } else if (route.name === 'Payments') {
              iconUrl = 'https://cdn-icons-png.flaticon.com/128/18276/18276971.png';
            } else if (route.name === 'Profile') {
              iconUrl = 'https://cdn-icons-png.flaticon.com/128/18084/18084137.png';
            }

            return (
              <Image
                source={{ uri: iconUrl }}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#007bff' : 'gray', // Change color when selected
                }}
              />
            );
          },
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HederScreen} />
        <Tab.Screen name="Order" component={Order} />
        <Tab.Screen name="Payments" component={Payments} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
