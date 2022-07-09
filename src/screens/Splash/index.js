import React, { useEffect } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View,Image, Text, Platform } from 'react-native';
import { useTheme } from '../../context';
import * as Styles from './style';

const Splash = (props) => {

    const { assets, colors, gradients } = useTheme();
    const { styles } = Styles
    useEffect(()=>{
       setTimeout(() => {
        props.navigation.replace("QRScan")
       }, 2000);
    },[])


    return (
        <ImageBackground source={assets.background} style={styles.container} >
            <StatusBar hidden  />
            <View style={styles.topLogoView}>
                <Image source={assets.impovedLogo} style={{height:'100%',width:'100%',resizeMode:'contain'}} />
            </View>
            {/* <View style={styles.centerImage}>
            <Image source={assets.centerrGroup} style={{height:'100%',width:'100%',resizeMode:'contain'}} />
            </View> */}
            <View style={styles.animatinBg}>
            <Image source={assets.centerLogo} style={{height:'100%',width:'100%',resizeMode:'contain'}} />
            </View>
            <View style={styles.smallLogo}>
            <Text style={styles.poweredText({textColor:'#F8CAFF'})}>Powered By</Text>
            <Image source={assets.impovedLogo} style={{height:'100%',width:'100%',resizeMode:'contain'}} />
            </View>
        </ImageBackground>

    )
}

export default Splash