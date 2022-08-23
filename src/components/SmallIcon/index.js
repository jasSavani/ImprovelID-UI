import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Touchable, TouchableOpacity, Platform, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import PropTypes from 'prop-types';

const SmallIcon = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate, locale } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    return (
        <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }} colors={props.gradient} style={[style.smallView,{paddingLeft:props?.padding}]}>
            <Image style={style.imageView(props)} source={props.image} resizeMode={'contain'} />
        </LinearGradient>
    )
}

SmallIcon.propTypes = {
    gradient : PropTypes.array.isRequired,
    padding: PropTypes.number,
    image: PropTypes.any.isRequired,
    height:PropTypes.string,
    width:PropTypes.string
}

export default SmallIcon