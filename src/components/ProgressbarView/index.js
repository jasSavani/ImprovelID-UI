import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { cardNumberChange } from '../../utils';
import SmallIcon from '../SmallIcon';
import LinearGradient from 'react-native-linear-gradient';


const ProgressbarView = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    return (
        <View style={style.barView}>
            <Text style={style.nameText}>{props?.name}</Text>
            <View style={style.rowView}>
                <View style={style.leftView}>
                    <LinearGradient colors={props?.color} style={style.colorView(props.value)}></LinearGradient>
                </View>
                <Text style={[style.percentText,{color:props?.textColor ?? colors.darkTextColor}]}>{props.value}%</Text>
            </View>
        </View>
    )
}
ProgressbarView.propTypes = {

    name:PropTypes.string.isRequired,
    value:PropTypes.any,
    color:PropTypes.any.isRequired
}
export default ProgressbarView