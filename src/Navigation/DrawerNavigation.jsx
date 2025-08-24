
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categories from '../screen/MainScreen/Categories';
import Vehicles from '../screen/MainScreen/Vehicles';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown:true}}>
            <Drawer.Screen name="Home" component={Categories}options={{headerShown:true,headerTitleAlign:"center"}} />
            <Drawer.Screen name="Vehicles" component={Vehicles}options={{headerShown:true,headerTitleAlign:"center"}} />


            
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;


