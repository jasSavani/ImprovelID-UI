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
// import React, { useEffect } from "react";
// import { StyleSheet, View } from "react-native";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withDelay,
//   withRepeat,
//   withTiming,
//   interpolate,
// } from "react-native-reanimated";

// const Ring = ({ delay }) => {
//   const ring = useSharedValue(0);

//   const ringStyle = useAnimatedStyle(() => {
//     return {
//       opacity: 0.8 - ring.value,
//       borderWidth:1,
//       transform: [
//         {
//           scale: interpolate(ring.value, [0, 1], [0, 8]),
//         },
//       ],
//     };
//   });
//   useEffect(() => {
//     ring.value = withDelay(
//       delay,
//       withRepeat(
//         withTiming(1, {
//           duration: 4000,
//         }),
//         -1,
//         false
//       )
//     );
//   }, []);
//   return <Animated.View style={[styles.ring, ringStyle]} />;
// };

// export default function Splash() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//       }}
//     >
//       <Ring delay={0} />
//       <Ring delay={250} />
//       <Ring delay={500} />
//       <Ring delay={750} />
//       <Ring delay={1000} />
//       <Ring delay={1250} />
//       <Ring delay={1500} />
//       <Ring delay={1750} />
//       <Ring delay={2000} />
//       <Ring delay={2250} />
//       <Ring delay={2500} />
//       <Ring delay={2750} />
//       <Ring delay={3000} />
//       <Ring delay={3250} />
//       <Ring delay={3500} />
//       <Ring delay={3750} />






//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: "tomato",
//   },
//   ring: {
//     position: "absolute",
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderColor: "tomato",
//     borderWidth: 1,
//     borderStyle:'dotted'
//   },
// });