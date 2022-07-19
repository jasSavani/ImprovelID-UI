import React, { useEffect, useRef, useState } from 'react'
import { Image, TouchableOpacity, View, Text, Modal, StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import { deviceBasedDynamicDimension } from '../../utils';
import * as Styles from './styles';
import QrCodeMask from 'react-native-qrcode-mask';
import Icon from 'react-native-vector-icons/Fontisto'

const SelfieCamera = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const _cameraRef = useRef(null)
    return (
        <Modal visible={props?.isVisible} transparent style={styles.containerView}>
            <RNCamera
                style={styles.containerView}
                ref={_cameraRef}
                type={RNCamera.Constants.Type.front}
                flashMode={RNCamera.Constants.FlashMode.auto}
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
            >
                <QrCodeMask
                    showLineAnimated={false}
                    height={deviceBasedDynamicDimension(256, false, 1)}
                    width={deviceBasedDynamicDimension(256, false, 1)}
                    edgeBorderWidth={deviceBasedDynamicDimension(5,false,1)}
                    edgeHeight={deviceBasedDynamicDimension(50,false,1)}
                    edgeWidth={deviceBasedDynamicDimension(50,false,1)}
                    overlayOpacity={0.6}
                    edgeColor={colors.white}
                    renderTop={() => {
                        return (
                            <>
                            <View style={styles.headerView}>
                                <View style={{flex:1,justifyContent:'center',paddingRight:deviceBasedDynamicDimension(35,false,1),alignItems:'flex-end'}}>
                                <Text style={styles.titleText(theme)}>{t(props?.texts?.title)}</Text>
                                </View>
                                <TouchableOpacity  onPress={()=>{props?.onCancel()}} style={styles.crossView}>
                                    <Icon name='close-a' size={deviceBasedDynamicDimension(18,false,1)} style={styles.cossImage} color={colors.whiteText} />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop:deviceBasedDynamicDimension(20,false,1)}}>
                            <Text style={styles.subtitleText(theme)}>{t(props?.texts?.instruction)}</Text>
                            </View>
                            </>
                        )
                    }}
                    renderBottom={() => {
                        return (
                            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                                <TouchableOpacity onPress={async()=>{
                                    const options = { quality: 1, base64: false };
                                    const data = await _cameraRef.current.takePictureAsync(options);
                                    props?.onPictureTaken(data)
                                }} style={styles.btnView}>
                                    <Image style={styles.btnImage} source={icons.camerabtnIcon} />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                >

                </QrCodeMask>
                {/* <View style={styles.frameView(theme)}></View> */}
            </RNCamera>

        </Modal>

    )
}

export default SelfieCamera