import React, { useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View,Image, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const CodeValidateBtn = (props) => {

    const [code,setCode] = useState("")
    const { assets, colors, gradients } = useTheme();
    const {isDark, theme, setTheme} = useData();
    const {t,translate} = useTranslation();
    const { styles } = Styles



    return (
        <View style={styles.container(theme)}>
            <View style={{flex:1}}>
            <TextInput 
            placeholder={t("qrscreen.entercode")}
            value={code}
            placeholderTextColor={theme.colors.placeholderTextColor}
            onChangeText={(code)=>{setCode(code)}}
            underlineColorAndroid="transparent"
            style={styles.inputText(theme)}
            />
            </View>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={gradients.primary} style={styles.validBtnview(theme)}>
                <TouchableOpacity onPress={()=>{props.onBtnpress(code)}} style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.validText(theme)}>{t("qrscreen.validate")}</Text>
                </TouchableOpacity>
            </LinearGradient>

        </View>

    )
}

export default CodeValidateBtn