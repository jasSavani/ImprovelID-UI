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
        <Modal animationType='slide' transparent={false} visible style={styles.containerView}>
            <View style={{ flex: 1,height:'100%',width:'100%' }}>
                <View style={styles.boxView(theme)}>
                    <TouchableOpacity onPress={props.onCancel} style={styles.crossView}>
                        <Icon name='close-a' size={deviceBasedDynamicDimension(20, false, 1)} color={colors.darkTextColor} />
                    </TouchableOpacity>
                    {props.centerLogo && <Image source={assets.impovedColorLogo} style={styles.logoVIew} />}
                    <View style={styles.centerView}>
                        <View style={styles.imageView}>
                            <Image style={{ height: '100%', width: '100%' }} resizeMode={'center'} source={props.icon} />
                        </View>
                        <Text style={styles.titleText(theme)}>{props.title}</Text>
                        <Text style={styles.messageText(theme)}>{props.message}</Text>
                    </View>
                    {props.secondaryBtnname && <View style={{ paddingHorizontal: deviceBasedDynamicDimension(8, true, 1), paddingTop: deviceBasedDynamicDimension(10, false, 1), marginHorizontal: deviceBasedDynamicDimension(10, true, 1) }}>
                        <Button  isgradient={false} onClick={() => { props.secondaryBtn() }} gradient={colors.primary} name={props.secondaryBtnname} />
                    </View>}
                    {props.primaryBtnname && <View style={{ paddingHorizontal: deviceBasedDynamicDimension(8, true, 1), paddingTop: deviceBasedDynamicDimension(10, false, 1), paddingBottom: deviceBasedDynamicDimension(30, false, 1), marginHorizontal: deviceBasedDynamicDimension(10, true, 1) }}>
                        <Button isgradient={true} onClick={() => { props.primaryBtn() }} gradient={gradients.primary} name={props.primaryBtnname} />
                    </View>}
                </View>

            </View>

        </Modal>

    )
}

export default PopupMessage