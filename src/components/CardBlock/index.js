import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity,View,Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

const CardBlock = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles

    return (
        <View style={styles.outerView}>
        <TouchableOpacity onPress={props.onClick} style={styles.cardView(theme)}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={props.gradient} style={styles.gradientBox}>{props.icon}</LinearGradient>
            <View style={{flex:1}}>
            <Text style={styles.docText(theme)}>{props?.docName}</Text>
            </View>
            <Image style={styles.rightArrow} source={icons.rightArrow} />
        </TouchableOpacity>
        </View>

    )
}

export default CardBlock