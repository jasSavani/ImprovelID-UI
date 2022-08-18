import React, { useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, StatusBar, Text, View } from 'react-native';
import Application from '../screens/Application';
import Identity from '../screens/Identity';
import ManageDevice from '../screens/ManageDevice';
import ManageIdentities from '../screens/ManageIdentities';
import Feedback from '../screens/Feedback';
import Detailspage from '../screens/Detailspage';
import Accountpage from '../screens/Accountpage';
import ProfileScreen from '../screens/ProfileScreen';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Screens = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false,animation:"none" }} initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Application" component={Application} />
            <Stack.Screen name="Identity" component={Identity} />
            <Stack.Screen name="ManageDevice" component={ManageDevice} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name='Account' component={Accountpage} />
            <Stack.Screen name="Profile" component={ProfileScreen} />   
        </Stack.Navigator>
    );
};

export default Screens
