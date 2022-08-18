import React, { useEffect, useRef, useState } from 'react'
import { Image, TouchableOpacity, View, Text, Modal, StatusBar, ActivityIndicator, Animated, Easing, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import { BlurView } from "@react-native-community/blur";
import { deviceBasedDynamicDimension } from '../../utils';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Fontisto'

const Loader = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const _cameraRef = useRef(null)
    let rotateValueHolder = new Animated.Value(0);

    useEffect(() => {
        if (props.animating) {
            startImageRotateFunction()
        }
    }, [])

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => startImageRotateFunction());
    };

    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const bodyView = () => {
        return (
            <View style={styles.listVIew}>
                {props.bodyData.map((item, index) => {
                    return (
                        <View key={index.toString()} style={styles.rowView}>
                            <View style={styles.dotView}></View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.bodyText(theme)}>{t(item)}</Text>
                            </View>
                        </View>
                    )
                })}

            </View>
        )
    }


    return (
        <Modal transparent={false} visible style={styles.containerView}>
            <View style={{ flex: 1 }}>
                <View style={styles.boxView(theme)}>
                    {props.isclose ? <TouchableOpacity onPress={props.onCancel} style={styles.crossView}>
                        <Icon name='close-a' size={deviceBasedDynamicDimension(20, false, 1)} color={colors.darkTextColor} />
                    </TouchableOpacity> :
                        <View style={styles.crossView}></View>
                    }
                    {props.centerLogo && <Image source={props.centerLogo} style={[styles.logoVIew]} />}
                    <View style={styles.centerView}>
                        <Animated.View style={[styles.imageView, { transform: [{ rotate: "0deg" }] }]}>
                            <Animated.Image style={{ height: '100%', width: '100%', transform: [{ rotate: rotateData }] }} resizeMode={'center'} source={props.icon} />
                            {props.icon2 && <Image style={styles.lightningImage(theme)} source={props.icon2} resizeMode={'center'} />}
                        </Animated.View>

                        {props.title && <Text style={styles.titleText(theme)}>{props.title}</Text>}
                        {props.message && <Text style={styles.messageText(theme)}>{props.message}</Text>}
                        {props?.bodyData && props?.bodyData.length > 0 && bodyView()}
                    </View>
                    {props.secondaryBtnname && <View style={{ paddingHorizontal: deviceBasedDynamicDimension(8, true, 1), paddingTop: deviceBasedDynamicDimension(10, false, 1), marginHorizontal: deviceBasedDynamicDimension(10, true, 1) }}>
                        <Button style={{ flex: 1, paddingLeft: 6 }} isgradient={false} onClick={() => { props.secondaryBtn() }} gradient={colors.primary} name={props.secondaryBtnname} />
                    </View>}
                    {props.primaryBtnname && <View style={{ paddingHorizontal: deviceBasedDynamicDimension(8, true, 1), paddingTop: deviceBasedDynamicDimension(10, false, 1), paddingBottom: deviceBasedDynamicDimension(30, false, 1), marginHorizontal: deviceBasedDynamicDimension(10, true, 1) }}>
                        <Button isgradient={true} onClick={() => { props.primaryBtn() }} gradient={gradients.primary} name={props.primaryBtnname} />
                    </View>}
                </View>

            </View>

        </Modal>

    )
}

export default Loader