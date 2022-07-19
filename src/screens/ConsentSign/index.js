import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView } from 'react-native';
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
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const [check, setCheck] = useState([])
    const _signatureRef = useRef()

    const onradioClick = (number) => {
        if(check.includes(number)){
            setCheck([...check.filter((i)=> i!= number)])
        }else{
            setCheck([...check,number])
        }
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
                                <Octicons onPress={() => onradioClick(1)} name={check?.includes(1)  ? "check-circle-fill":"circle"} size={deviceBasedDynamicDimension(21, true, 1)} color={colors.primaryradio} />
                            </View>
                            <View style={{ flex: 1 }}><Text style={styles.instructionText(theme)}>{t("consentsign.instruction1")}</Text></View>
                        </View>
                        <View style={styles.radioView}>
                            <View style={styles.radioBtn}>
                                <Octicons onPress={() => onradioClick(2)} name={check?.includes(2) ? "check-circle-fill":"circle"} size={deviceBasedDynamicDimension(21, true, 1)} color={colors.primaryradio} />
                            </View>
                            <View style={{ flex: 1 }}><Text style={styles.instructionText(theme)}>{t("consentsign.instruction2")}</Text></View>
                        </View>
                    </View>
                    <Text style={styles.pleaseSignText(theme)}>{t("consentsign.pleasesign")}</Text>
                    <View style={styles.signaturView}>
                        <SignatureCapture
                            style={styles.signture}
                            ref={_signatureRef}
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
                            <Text onPress={() => { _signatureRef.current.resetImage() }} style={styles.clearText(theme)}>{t("consentsign.clear")}</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <Button isgradient={true} onClick={() => {props.navigation.navigate("SubmitVerification") }} gradient={gradients.primary} name={t("consentsign.next")} />
                </View>
            </View>

        </View>
    )
}

export default ConsentSign