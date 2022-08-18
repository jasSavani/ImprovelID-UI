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
import moment from 'moment';


const Summary = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount, userData, cardData } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);


    const PhotgraphView = () => {
        return (
            <View style={style.cardView}>
                <View style={style.pTextview}>
                    <Text style={style.headingtext}>{t("summary.photograph")}</Text>
                </View>
                <Image style={style.profileImage} source={{ uri: userData?.profileImage?.uri }} />
            </View>
        )
    }
    const UserInfoBox = () => {
        return (
            <View style={style.cardView}>
                <View style={style.uTextview}>
                    <Text style={style.headingtext}>{t("summary.userinformation")}</Text>
                </View>
                <View style={style.secondView}>
                    <View style={style.rowView}>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={style.keyText}>{t("basicinfoscreen.firstname")}</Text>
                            <Text numberOfLines={1} style={style.valueText}>{userData?.firstName}</Text>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Text numberOfLines={1} style={style.keyText}>{t("basicinfoscreen.lastname")}</Text>
                            <Text numberOfLines={1} style={style.valueText}>{userData?.lastName}</Text>
                        </View>
                    </View>
                    <View style={style.rowView}>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={style.keyText}>{t("summary.dob")}</Text>
                            <Text numberOfLines={1} style={style.valueText}>{userData.dob && moment(userData?.dob).format("DD/MM/YYYY")}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={style.keyText}>{t("detailsscreen.gneder")}</Text>
                            <Text numberOfLines={1} style={style.valueText}></Text>
                        </View>
                    </View>
                    <View style={style.rowView}>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={style.keyText}>{t("common.phoneeno")}</Text>
                            <Text numberOfLines={1} style={style.valueText}>+{userData?.callingcode} {userData?.phoneNo && userData?.phoneNo.substring(0, 5) + " " + userData?.phoneNo.substring(5)}</Text>
                        </View>
                    </View>
                    <View style={style.rowView}>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={style.keyText}>{t("moreinfoscreen.address")}</Text>
                            <Text numberOfLines={1} style={style.valueText}>{userData?.address && `${userData?.address},`} {userData?.city && `${userData.city},`} {userData?.state} {userData?.zipcode}</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
    const IDproofBox = () => {
        return (
            <View style={style.cardView}>
                <View style={style.uTextview}>
                    <Text style={style.headingtext}>{t("summary.idproofdoc")}</Text>
                </View>
                <View style={style.uTextview}>
                    <Text style={style.subHeadingText}>{t("summary.type")}: <Text style={{ color: colors.darkTextColor }}>{t(cardData?.name)}</Text></Text>
                </View>
                <View style={style.rowView}>
                    {userData?.frontImage && <View style={style.imageOuterview}>
                        <View style={style.shadowView}>
                            <Image style={style.proofImage} source={{ uri: userData?.frontImage?.uri }} />
                        </View>
                        <Text style={style.imageTypeText}>{t("common.front")}</Text>
                    </View>}
                    {userData?.backImage && <View style={style.backOuterView}>
                        <View style={style.shadowView}>
                            <Image style={style.proofImage} source={{ uri: userData?.backImage?.uri }} />
                        </View>
                        <Text style={style.imageTypeText}>{t("common.back")}</Text>
                    </View>}
                </View>

            </View>
        )
    }
    const SignTureBox = () => {
        return (
            <View style={style.cardView}>
                <View style={style.uTextview}>
                    <Text style={style.headingtext}>{t("consentsign.signature")}</Text>
                </View>
                {userData?.signatureImage?.uri && <Image style={style.signatureImage} source={{uri:userData?.signatureImage?.base64}} />}
            </View>
        )
    }

    const navigateNextScreen = () => {
        props.navigation.navigate("SubmitVerification")
    }
    return (
        <Block>
            <StatusBar barStyle={'light-content'} />
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("summary.screenname")} />
            <View style={style.container}>
                <ScrollView contentContainerStyle={style.containerView}>
                    <Text style={style.titleText}>{t("summary.title")}</Text>
                    {userData?.profileImage && <PhotgraphView />}
                    {<UserInfoBox />}
                    {<IDproofBox />}
                    {userData?.signatureImage && <SignTureBox />}
                    <View style={style.bottomView}>
                        <Button style={{}} isgradient={true} onClick={navigateNextScreen} gradient={gradients.primary} name={t("homescreen.update")} />
                    </View>
                </ScrollView>
            </View>
        </Block>
    )
}

export default Summary