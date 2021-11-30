import {View,Text} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './main/home';
import Profile from './main/profile';
import Message from './main/msg';

const Tab = createBottomTabNavigator( );


export default function Main(){
    return(
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{ tabBarActiveTintColor: '#e91e63',headerShown: false,tabBarLabelStyle: { fontSize: 20,fontWeight:'bold' } }}>
                <Tab.Screen
                    name="Feed"
                    component={Home}
                    options={{tabBarLabel: 'Home' }}/>
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{tabBarLabel: 'Profile' }}/>
                <Tab.Screen
                    name="Message"
                    component={Message}
                    options={{tabBarLabel: 'Message' }}/>
        </Tab.Navigator>
    )
}