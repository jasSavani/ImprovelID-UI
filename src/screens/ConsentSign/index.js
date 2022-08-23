import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, Platform } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import { RNCamera, FaceDetector } from 'react-native-camera';
import Button from '../../components/Button';
import BackArrow from '../../components/backArrow';
import SignatureCapture from 'react-native-signature-capture';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import { deviceBasedDynamicDimension } from '../../utils';
const ConsentSign = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setUserdata, userData } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const [check, setCheck] = useState([])
    const [isSignature, setIssignature] = useState(false)

    const _signatureRef = useRef()

    const onradioClick = (number) => {
        if (check.includes(number)) {
            setCheck([...check.filter((i) => i != number)])
        } else {
            setCheck([...check, number])
        }
    }
    const navigateNextScreen = () => {
        if (isSignature) {
            _signatureRef.current.saveImage()
            _signatureRef.current.resetImage()
            setIssignature(false)
        } else {
            setUserdata({ ...userData, signatureImage: {} })
            props.navigation.navigate("Summary")
        }

    }

    const _onSaveEvent = (result) => {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        let image_data = {
            type: "image/png",
            uri: Platform.OS == 'android' ? `file://${result.pathName}` : `${result.pathName}`,
            name: result.pathName?.substring(result.pathName?.lastIndexOf('/') + 1),
            base64: `data:image/png;base64,${result.encoded}`
        }
        setUserdata({ ...userData, signatureImage: image_data })
        props.navigation.navigate("Summary")
    }
    const _onDragEvent = () => {
        // This callback will be called when the user enters signature
        setIssignature(true)
    }

    return (
        <View style={styles.container}>
            <BackArrow {...props} />
            <View style={{ flex: 1 }}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText(theme)}>{t("consentsign.title")}</Text>
                    <Text style={styles.smallText(theme)}>{t("consentsign.subtitle")}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={styles.radioView}>
                            <View style={styles.radioBtn}>
                                <Octicons onPress={() => onradioClick(1)} name={check?.includes(1) ? "check-circle-fill" : "circle"} size={deviceBasedDynamicDimension(21, true, 1)} color={colors.primaryradio} />
                            </View>
                            <View style={{ flex: 1 }}><Text style={styles.instructionText(theme)}>{t("consentsign.instruction1")}</Text></View>
                        </View>
                        <View style={styles.radioView}>
                            <View style={styles.radioBtn}>
                                <Octicons onPress={() => onradioClick(2)} name={check?.includes(2) ? "check-circle-fill" : "circle"} size={deviceBasedDynamicDimension(21, true, 1)} color={colors.primaryradio} />
                            </View>
                            <View style={{ flex: 1 }}><Text style={styles.instructionText(theme)}>{t("consentsign.instruction2")}</Text></View>
                        </View>
                    </View>
                    <Text style={styles.pleaseSignText(theme)}>{t("consentsign.pleasesign")}</Text>
                    <View style={styles.signaturView}>
                        <SignatureCapture
                            style={styles.signture}
                            ref={_signatureRef}
                            onSaveEvent={_onSaveEvent}
                            onDragEvent={_onDragEvent}
                            saveImageFileInExtStorage={false}
                            showNativeButtons={false}
                            showTitleLabel={false}
                            showBorder={false}
                            backgroundColor="#ffffff"
                            strokeColor="#000000"
                            minStrokeWidth={0}
                            maxStrokeWidth={10}
                            viewMode={"portrait"} />
                        <View style={styles.seperatorView}></View>
                        <View style={styles.bottombtn}>
                            <Text style={styles.signatureText(theme)}>{t("consentsign.signature")}</Text>
                            <Text onPress={() => { _signatureRef.current.resetImage(), setIssignature(false) }} style={styles.clearText(theme)}>{t("consentsign.clear")}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <Button isgradient={true} onClick={navigateNextScreen} gradient={gradients.primary} name={t("consentsign.next")} />
                </View>
            </View>

        </View>
    )
}

export default ConsentSign