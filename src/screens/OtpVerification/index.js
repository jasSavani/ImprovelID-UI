import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList, TextInput } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Block from '../../components/Block';
import Header from '../../components/Header';
import Button from '../../components/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { mocksData } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { formatPhoneNumber } from '../../utils';


const OtpVerification = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount, userData } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [isvalidate, setIsvalidate] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsvalidate(false)
        }, 5000);
    }, [])

    const renderNoteView = useCallback(() => {
        return (
            <View style={style.instructionView}>
                <Text style={style.instructionText}>{t("otpverificationscreen.wehavesend1")}+ {userData?.callingcode} {formatPhoneNumber(userData?.phoneNo)}{t("otpverificationscreen.wehavesend2")}</Text>
                <Text>{`\n`}</Text>
                <View style={style.noteView}>
                    <View style={style.topnotchView}>
                        <Text style={style.notetitletext}>{t("otpverificationscreen.note")}</Text>
                    </View>
                    <LinearGradient start={{ x: 0.5, y: 0.5 }} end={{ x: 1, y: 1 }} colors={gradients.notegradient} style={style.stickyView}>
                        {mocksData.NOTEDATA.map((item, index) => {
                            return (
                                <View style={style.noteTextView}>
                                    <Text style={style.noteText}>-  </Text>
                                    <Text style={style.noteText}>{t(item.name)}</Text>
                                </View>
                            )
                        })}
                    </LinearGradient>
                    <Text>{`\n`}</Text>
                </View>
            </View>
        )

    }, [])
    const renderOtpView = useCallback(() => {
        return (
            <View style={style.instructionView}>
                <Text style={style.instructionText}>{t("otpverificationscreen.instruction1")}</Text>
                <Text>{`\n`}</Text>
                <Text style={style.instructionText}>{t("otpverificationscreen.instruction2")} + {userData?.callingcode} {formatPhoneNumber(userData?.phoneNo)}</Text>
                <OTPInputView
                    style={style.inputBox}
                    pinCount={6}
                    autoFocusOnLoad={false}
                    codeInputFieldStyle={style.textContainer}
                    codeInputHighlightStyle={style.highlighttextContainer}
                    onCodeFilled={(code) => {
                        console.log(`Code is ${code}, you are good to go!`)
                    }}
                />
                <View style={style.bottomView}>
                    <Button style={{}} isgradient={true} onClick={() => { props.navigation.navigate("StartVerification") }} gradient={gradients.primary} name={t("otpverificationscreen.btnText")} />
                </View>
            </View>
        )

    }, [])


    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("otpverificationscreen.screenname")} />
            <View style={style.container}>
                <ScrollView style={style.cardDetailsView} contentContainerStyle={style.containerView}>
                    <View style={style.imageouterView}>
                        <Image style={style.imageView} source={isvalidate ? icons.otpVerifyLogo : icons.otpLogoIcon} />
                    </View>

                    <Text style={style.titleText}>{t("otpverificationscreen.checkmobile")}</Text>
                    {isvalidate ? renderNoteView() : renderOtpView()}
                    <Text style={style.haventText}>{t("otpverificationscreen.haventreceive")}  <Text onPress={() => {alert("resend") }} style={style.resendText}>{t("otpverificationscreen.resend")}</Text></Text>
                    <Text>{`\n`}</Text>
                    {!isvalidate && <Text style={style.haventText}>{t("otpverificationscreen.wrongnumber")}</Text>}
                </ScrollView>
            </View>
        </Block>
    )
}

export default OtpVerification