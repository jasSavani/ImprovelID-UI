import React, { useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import { RNCamera, FaceDetector } from 'react-native-camera';
import Button from '../../components/Button';
import BackArrow from '../../components/backArrow';
import PopupMessage from '../../components/PopupMessage';

const Chekagain = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, cardData } = useData();
    const { t, translate } = useTranslation();
    const [screndata, setScreenData] = useState({ title: "", subtitle: "", })
    const [ismodal, setIsmodal] = useState(false)
    const { styles } = Styles
    const {type,readScreen} = cardData

    useEffect(() => {
       setScreenData(readScreen)
    }, [])

    const onClickConfirm = () => {
        if (type == 2) {
            setIsmodal(!ismodal)
        }
    }



    return (
        <View style={styles.container}>
            <BackArrow {...props} />
            <View style={{ flex: 1 }}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText(theme)}>{t(screndata.title)}</Text>
                    <Text style={styles.smallText(theme)}>{t(screndata.subtitle)}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    {type == 3 ?
                        <View style={styles.outerbigView}>
                            <View style={styles.bigImage}>
                                <Image source={{ uri: props.route?.params?.image?.uri }} style={{ height: '100%', width: '100%' }} resizeMode={'cover'} />
                            </View>
                        </View>
                        :
                        <View style={styles.outerView}>
                            <View style={styles.imageView}>
                                <Image source={{ uri: props.route?.params?.image?.uri }} style={{ height: '100%', width: '100%' }} resizeMode={'contain'} />
                            </View>
                        </View>}
                </View>
                <View style={styles.bottomView}>
                    <Button isgradient={false} onClick={() => { props.navigation.goBack() }} gradient={colors.primary} name={t("readscreen.redo")} />
                    <Button isgradient={true} onClick={() => { onClickConfirm() }} gradient={gradients.primary} name={t("readscreen.confirm")} />
                </View>
            </View>
            {ismodal && <PopupMessage isVisible={ismodal} title={t("popupmessage.waiting")} message={t("popupmessage.waitingmsg")} primaryBtnname={t("popupmessage.yes")} secondaryBtnname={t("popupmessage.no")} secondaryBtn={() => { }} primaryBtn={() => { }} onCancel={() => { setIsmodal(!ismodal) }} icon={icons.waitingpop} />}

        </View>
    )
}

export default Chekagain