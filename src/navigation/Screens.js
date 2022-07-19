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

// import { } from '../screens';


const Stack = createNativeStackNavigator();
function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}
const Screens = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }} initialRouteName={'Application'}>
            {/* <Stack.Screen name="Home" component={ManageDevice} /> */}
            <Stack.Screen name="Application" component={Application} />
            <Stack.Screen name="Identity" component={Identity} />
            <Stack.Screen name="ManageIdentity" component={ManageIdentities} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name='Profile' component={Detailspage} />
            <Stack.Screen name='Account' component={Accountpage} />


        </Stack.Navigator>
    );
};

export default Screens
