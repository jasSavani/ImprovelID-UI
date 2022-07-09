import React, { useEffect, useRef } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import { RNCamera, FaceDetector } from 'react-native-camera';
import QrCodeMask from 'react-native-qrcode-mask';
import { deviceBasedDynamicDimension } from '../../utils';
const QrCodeScan = (props) => {

    const { assets, colors, gradients } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const _cameraRef = useRef(null)


    const ontermsClick = () => {

    }
    const onPrivacypolicyClick = () => {
    }
    const onValidate = (code) => {
        props.navigation.navigate("IdentityVerification")
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText({ textColor: theme.colors.darkTextColor })}>{t("qrscreen.qrcodescan")}</Text>
                    <Text style={styles.subTitletext({ textColor: theme.colors.darkTextColor })}>{t("qrscreen.qrscantext")}</Text>
                </View>

                <View style={styles.boxView(theme)}>
                    <View style={styles.firstTextbox}>
                        <Text style={styles.alignText(theme)}>{t("qrscreen.alignText")}</Text>
                    </View>
                    <View style={styles.qrView}>
                        <QrCodeMask
                            lineColor={colors.primary}
                            lineDirection='vertical'
                            height={deviceBasedDynamicDimension(205, false, 1)}
                            width={deviceBasedDynamicDimension(205, false, 1)}
                            edgeHeight={deviceBasedDynamicDimension(30, true, 1)}
                            edgeWidth={deviceBasedDynamicDimension(30, true, 1)}
                            lineSize={'99%'}
                            lineThick={deviceBasedDynamicDimension(4, false, 1)}
                            edgeColor={colors.primary}
                            renderFrame={() => {
                                return (
                                    <View style={styles.roundView}>
                                        <RNCamera
                                            ref={_cameraRef}
                                            style={styles.roundView}
                                            type={RNCamera.Constants.Type.back}
                                            flashMode={RNCamera.Constants.FlashMode.on}
                                            androidCameraPermissionOptions={{
                                                title: 'Permission to use camera',
                                                message: 'We need your permission to use your camera',
                                                buttonPositive: 'Ok',
                                                buttonNegative: 'Cancel',
                                            }}
                                            androidRecordAudioPermissionOptions={{
                                                title: 'Permission to use audio recording',
                                                message: 'We need your permission to use your audio',
                                                buttonPositive: 'Ok',
                                                buttonNegative: 'Cancel',
                                            }}
                                            onBarCodeRead={(barcodes)=>{
                                                // YOU WILL RECEIVE QRCODE 
                                                onValidate()
                                            }}
                                        // onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                        //     console.log(barcodes);
                                        // }}
                                        />
                                    </View>
                                )
                            }}
                        //   topTitle='Bar Code Scanner'
                        //   bottomTitle='Put the barcode into the box'
                        />
                    </View>
                    <View style={styles.orTextView}>
                        <Text style={styles.orText(theme)}>{t("qrscreen.orText")}</Text>
                    </View>
                    <View style={styles.enterCodeView}>
                        <CodeValidateBtn onBtnpress={onValidate} />
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.normalText(theme)}>{t("qrscreen.continuetext")}</Text>
                    <Text style={styles.normalText(theme)}><Text onPress={ontermsClick} style={styles.highLightText(theme)}>{t("qrscreen.termofuse")}</Text> {t("qrscreen.andhave")} <Text onPress={onPrivacypolicyClick} style={styles.highLightText(theme)}>{t("qrscreen.privacypolicy")}.</Text></Text>
                </View>
            </ScrollView>

        </View>

    )
}

export default QrCodeScan