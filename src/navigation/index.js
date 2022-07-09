import React, { useContext,useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useData,ThemeProvider,TranslationContext, TranslationProvider } from "../context";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash";
import QrCodeScan from "../screens/QrCodeScan";
import IdentityVerification from "../screens/IdentityVerification";
import UploadpageScreen from "../screens/UploadpageScreen";
import Checkreadiability from "../screens/Checkreadiability";
import TakeSelfie from "../screens/TakeSelfie";
import ConsentSign from "../screens/ConsentSign";
import SubmitVerification from "../screens/SubmitVerification";
import BackCard from "../screens/UploadpageScreen/BackCard";
import Chekagain from "../screens/Checkreadiability/Chekagain";
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
function DetailsScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}


const Route = (props) => {
    const {isDark, theme, setTheme} = useData();
    useEffect(() => {
        
        Platform.OS === 'android' && StatusBar.setTranslucent(true);
        Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent')
        StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content');
        return () => {
          StatusBar.setBarStyle('default');
        };
      }, [isDark]);
    return (
        <TranslationProvider>
            <ThemeProvider theme={theme} setTheme={setTheme}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{ headerShown: false }} initialRouteName={'Splash'}>
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="QRScan" component={QrCodeScan} />
                        <Stack.Screen name="IdentityVerification" component={IdentityVerification} />
                        <Stack.Screen name="UploadpageScreen" component={UploadpageScreen} />
                        <Stack.Screen name="Checkreadiability" component={Checkreadiability} />
                        <Stack.Screen name="TakeSelfie" component={TakeSelfie} />
                        <Stack.Screen name="ConsentSign" component={ConsentSign} />
                        <Stack.Screen name="SubmitVerification" component={SubmitVerification} />
                        <Stack.Screen name="BackCard" component={BackCard} />
                        <Stack.Screen name="Chekagain" component={Chekagain} />

                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </TranslationProvider>

    )
}

export default Route;