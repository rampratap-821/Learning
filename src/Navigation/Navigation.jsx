
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/MainScreen/SplashScreen/SplashScreen';
import Login from '../screen/Auth/Login';
import { BOTTUMTAB, BUTTON, CATEGORIES, DASHBOARD, DRAWERNAVIGATION, ENTERTAINMENT_STORY, LOGIN, POETRY, PRODUCTLIST, RAGISTERHERE, RAM_COM, SAKRKARIJOBS, SPLASHCREEN, TRANSPORT, TRUCKERSHEALTHCARE, VEHICLESLIST, } from './NavigationString';
import DrawerNavigation from './DrawerNavigation';
import SarkariJobs from '../screen/MainScreen/SarkariJobs';
import Poetry from '../screen/MainScreen/Poetry';
import Entertainment_Story from '../screen/MainScreen/Entertainment_Story';
import TruckersHeathCare from '../screen/TruckersHeathCare';
import RagisterHere from '../screen/MainScreen/RagisterHere';
import Transport from '../screen/MainScreen/Transport';
import DashBoard from '../screen/MainScreen/DashBoard';
import { Text } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native';
import ButtomTab from './ButtomTab';
import Button1 from '../screen/MainScreen/Button';
import Categories from '../screen/MainScreen/Categories';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import ProductList from '../screen/MainScreen/ProductList';
import VehiclesList from '../screen/MainScreen/VehiclesList';






const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}>
                {/* <Stack.Screen name={SPLASHCREEN} component={SplashScreen} />
                <Stack.Screen name={LOGIN} component={Login} />
                <Stack.Screen name={DRAWERNAVIGATION} component={DrawerNavigation} />
                <Stack.Screen name={SAKRKARIJOBS} component={SarkariJobs} options={{headerShown:true}}/>
                <Stack.Screen name ={POETRY}component={Poetry}options={{headerShown:true}}/>
                <Stack.Screen name ={ENTERTAINMENT_STORY}component={Entertainment_Story}options={{headerShown:true}}/>
               
                <Stack.Screen name={RAGISTERHERE} component={RagisterHere} />
                <Stack.Screen name={TRANSPORT} component={Transport} />
                <Stack.Screen name={TRUCKERSHEALTHCARE} component={TruckersHeathCare} />
                

                     <Stack.Screen name={DRAWERNAVIGATION} component={DrawerNavigation}
                    options={{
                        headerShown: false,
                        
                        headerTintColor: "white",
                        headerStyle: {
                            backgroundColor: "red"
                        },
                        headerTitleStyle: {
                            fontSize: 25,

                        },
                    }} />*/}
              <Stack.Screen name={SPLASHCREEN} component={SplashScreen} options={{headerShown:false}}/>
              <Stack.Screen name={BUTTON} component={Button1} options={{headerShown:false}}/>
              <Stack.Screen name={DASHBOARD} component={DashBoard}/>
              <Stack.Screen name={DRAWERNAVIGATION} component={DrawerNavigation} options={{headerShown:false}} />
              <Stack.Screen name={PRODUCTLIST} component={ProductList}/>
              <Stack.Screen name={VEHICLESLIST} component={VehiclesList}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation;