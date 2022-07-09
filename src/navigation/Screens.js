import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { } from '../screens';


const Stack = createNativeStackNavigator();
function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}
const Screens = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }} initialRouteName={'Splash'}>
            <Stack.Screen name="Splash" component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default Screens
