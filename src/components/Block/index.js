import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity,View,Text, Platform, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

const Block = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const {children} = props
    // useEffect(() => {
        
    //     Platform.OS === 'android' && StatusBar.setTranslucent(true);
    //     Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent')
    //     StatusBar.setBarStyle('light-content');
    //     return () => {
    //       StatusBar.setBarStyle('default');
    //     };
    //   }, [isDark]);

    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={gradients.primary} style={styles.gradientBox}>
            {children}
        </LinearGradient>
    )
}

export default Block