import React, { useEffect, useRef, useState } from 'react'
import { Image, TouchableOpacity, View, Text, Modal, StatusBar } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import { BlurView } from "@react-native-community/blur";
import { deviceBasedDynamicDimension } from '../../utils';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Fontisto'

const PopupMessage = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const _cameraRef = useRef(null)
    return (
        <View  style={styles.containerView}>
            <BlurView
                style={styles.absolute}
                blurType="dark"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
            />
            <View style={{ flex: 1, justifyContent: 'center',width:'100%' }}>
                <View style={styles.boxView(theme)}>
                    <TouchableOpacity onPress={props.onCancel} style={styles.crossView}>
                    <Icon name='close-a' size={deviceBasedDynamicDimension(16,false,1)} color={colors.closeiconcolor} />
                    </TouchableOpacity>
                    <View style={styles.imageView}>
                        <Image style={{height:'100%',width:'100%'}} resizeMode={'contain'} source={props.icon} />
                    </View>
                    <Text style={styles.titleText(theme)}>{props.title}</Text>
                    <Text style={styles.messageText(theme)}>{props.message}</Text>

                    {!props.secondaryBtnname ? <View style={{ paddingHorizontal: deviceBasedDynamicDimension(8, true, 1), paddingTop: deviceBasedDynamicDimension(10, false, 1), paddingBottom: deviceBasedDynamicDimension(30, false, 1) }}>
                        <Button isgradient={true} onClick={() => {props.primaryBtn() }} gradient={gradients.primary} name={props.primaryBtnname} />
                    </View>:
                    <View style={{ paddingHorizontal: deviceBasedDynamicDimension(34, true, 1), paddingTop: deviceBasedDynamicDimension(17, false, 1), paddingBottom: deviceBasedDynamicDimension(38, false, 1),flexDirection:'row',alignItems:'center' }}>
                         <Button style={{flex:1,paddingRight:6}} isgradient={true} onClick={() => {props.primaryBtn() }} gradient={gradients.primary} name={props.primaryBtnname} />
                         <Button style={{flex:1,paddingLeft:6}} isgradient={false} onClick={() => {props.secondaryBtn() }} gradient={colors.primary} name={props.secondaryBtnname} />
                    </View>}
                </View>

            </View>

        </View>

    )
}

export default PopupMessage