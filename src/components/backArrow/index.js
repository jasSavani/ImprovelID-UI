import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

const BackArrow = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles

    const goBack=()=>{
        props.navigation.goBack()
    }

    return (
        <TouchableOpacity onPress={props.onBackClick ?? goBack} style={styles.backArrowView}>
            <Image source={icons.backArrow} style={styles.backArrowImage} />
        </TouchableOpacity>

    )
}

export default BackArrow