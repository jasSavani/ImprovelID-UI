import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View, Text, Platform, StatusBar, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { useData, useTheme, useTranslation } from '../../context';
import { deviceBasedDynamicDimension } from '../../utils';
import * as Styles from './styles';

const GridBox = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles

    return (
        <TouchableOpacity onPress={() => props?.onBoxClick(props?.data?.id)} style={styles.boxView}>
            <TouchableOpacity onPress={() => props?.onMenuClick(props?.data?.id)} style={styles.menuView}>
                <Icon name='options-vertical' size={deviceBasedDynamicDimension(11, false, 1)} color={colors.placeholderTextColor} />
            </TouchableOpacity>
            <View style={styles.imageView}>
                <Image style={{ height: '80%', width: '80%', resizeMode: 'contain' }} source={icons[props?.data?.image]} />
            </View>
            <Text numberOfLines={1} style={styles.nameText}>{t(props?.data?.name)}</Text>
        </TouchableOpacity>
    )
}

export default GridBox