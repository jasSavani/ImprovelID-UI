import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity,View,Text, Platform, StatusBar, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

const SearchBar = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles

    return (
        <View style={styles.searchBox}>
            <Image style={styles.searchImage} source={icons.searchIcon}  />
            <View style={{flex:1,paddingLeft:13}}>
            <TextInput
            placeholder='Search your app'
            value={props.value}
            onChangeText={props.onChangeText}
            style={styles.inputText}
            />
            </View>
        </View>
    )
}

export default SearchBar