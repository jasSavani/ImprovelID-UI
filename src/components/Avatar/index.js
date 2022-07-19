import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity,View,Text, Platform, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

const Avatar = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles

    return (
        <View style={styles.outerView({...props,theme})}>
            <Image style={styles.imageView} source={props.image} resizeMode={'cover'} />
        </View>
    )
}

export default Avatar