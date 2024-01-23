import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import pallet from './styles/pallet';
import Home from './screens/Home';
import Cars from './screens/Cars';
import CarDetailScreen from './screens/CarScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const CarsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cars" component={Cars} />
            <Stack.Screen name="CarDetail" component={CarDetailScreen} />
        </Stack.Navigator>
    );
};

export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor={pallet.red}
                barStyle={{ backgroundColor: pallet.white }}
                activeIndicatorStyle={{ backgroundColor: pallet.white }}
                inactiveColor={pallet.black}
                keyboardHidesNavigationBar={true}
                backBehavior='history'
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="CarsStack"
                    component={CarsStack}
                    options={{
                        tabBarLabel: 'Cars',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="car" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
