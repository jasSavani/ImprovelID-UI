import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import PropTypes from 'prop-types';

const Button = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles

    return (
        <View style={props.style ?? styles.outerView}>
            {props.isgradient ?
                <TouchableOpacity onPress={props.onClick} >
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={props.gradient} style={[styles.gradientBox,props.custumStyle]}>
                        {props.icon && <Image style={styles.iconImage(colors.white)} source={props.icon} />}
                        <Text style={[styles.nameText(colors.white)]}>{props.name}</Text>
                    </LinearGradient>
                </TouchableOpacity> :
                <TouchableOpacity onPress={props.onClick} style={[styles.borderBox(props.gradient),props.custumStyle]} >
                    {props.icon && <Image style={styles.iconImage(props.gradient)} source={props.icon} />}
                    <Text style={[styles.nameText(props.gradient)]}>{props.name}</Text>
                </TouchableOpacity>
            }
        </View>

    )
}
Button.propTypes = {
    isgradient : PropTypes.bool,
    style: PropTypes.any,
    icon: PropTypes.any,
    name:PropTypes.string.isRequired,
    gradient:PropTypes.any,
    custumStyle:PropTypes.any,
    onClick:PropTypes.func
}
export default Button