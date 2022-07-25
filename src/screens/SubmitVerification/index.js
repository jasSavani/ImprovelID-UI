import React, { useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Button from '../../components/Button';
import BackArrow from '../../components/backArrow';
import { deviceBasedDynamicDimension } from '../../utils';
import VerificationCard from '../../components/VerificationCard';
import PopupMessage from '../../components/PopupMessage';

const SubmitVerification = (props) => {

    const { assets, colors, gradients,icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const [ismodal, setIsmodal] = useState(false)

    const onsubmitClick=()=>{
        setIsmodal(!ismodal),
        setTimeout(() => {     
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Drawer' }]
            })
        }, 100);
    }



    return (
        <View style={styles.container}>
            <BackArrow {...props} />
            <View style={{ flex: 1 }}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText(theme)}>{t("submitverification.title")}</Text>
                    <Text style={styles.smallText(theme)}>{t("submitverification.subtitle")}</Text>

                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start',marginTop:deviceBasedDynamicDimension(19,false,1)}}>
                   <VerificationCard onClick={()=>{}} leftIcon={icons.docuploadicon} docName={t("submitverification.doc")} />
                   <VerificationCard onClick={()=>{}} leftIcon={icons.selfieuploadIcon} docName={t("submitverification.selfie")} />
                   <VerificationCard onClick={()=>{}} leftIcon={icons.signatureuploadIcon} docName={t("submitverification.signature")} />

                </View>
                <View style={styles.bottomView}>
                    <Button isgradient={true} onClick={() => {setIsmodal(!ismodal) }} gradient={gradients.primary}  name={t("submitverification.sumitbtn")} />
                </View>
            </View>
            {ismodal && <PopupMessage isVisible={ismodal} title={t("popupmessage.success")} message={t("popupmessage.successmessage")} primaryBtnname={t("popupmessage.ok")}   primaryBtn={onsubmitClick} onCancel={() => { setIsmodal(!ismodal) }} icon={icons.succespop} />}

        </View>
    )
}

export default SubmitVerification