import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import pallet from './styles/pallet';
import Cars from './screens/Cars';

const Tab = createMaterialBottomTabNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor={pallet.red}
                barStyle={{ backgroundColor: pallet.white }}
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
                    name="Cars"
                    component={Cars}
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
