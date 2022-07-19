import React, { useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import { RNCamera, FaceDetector } from 'react-native-camera';
import Button from '../../components/Button';
import BackArrow from '../../components/backArrow';
import SelfieCamera from '../../components/SelfieCamera';

const TakeSelfie = (props) => {

    const { assets, colors, gradients,icons } = useTheme();
    const { isDark, theme, setTheme,cardData } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const [cameraOn,setCameraon] = useState(false)
    const {type,selfiecamerainstruction} = cardData



    return (
        <View style={styles.container}>
            <BackArrow {...props} />
            <View style={{ flex: 1 }}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText(theme)}>{t("selfiescreen.title")}</Text>
                    <Text style={styles.smallText(theme)}>{t("selfiescreen.subtitle")}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-evenly',alignItems:'center'  }}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.imageView}>
                        <Image source={icons.selfieIcon} style={{ height: '100%', width: '100%' }} resizeMode={'contain'} />
                    </View>
                    <Text style={styles.instructionText(theme)}>{t("selfiescreen.instruction1")}</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.imageView}>
                        <Image source={icons.gogglesIcon} style={{ height: '100%', width: '100%' }} resizeMode={'contain'} />
                    </View>
                    <Text style={styles.instructionText(theme)}>{t("selfiescreen.instruction2")}</Text>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <Button isgradient={true} onClick={() => {setCameraon(true)}} gradient={gradients.primary}  name={t("selfiescreen.getstarted")} />
                </View>
            </View>
            {cameraOn && <SelfieCamera isVisible={cameraOn} texts={selfiecamerainstruction}  onCancel={() => { setCameraon(!cameraOn) }} onPictureTaken={(image) => { setCameraon(!cameraOn), props.navigation.navigate("ConsentSign") }} />}

        </View>
    )
}

export default TakeSelfie