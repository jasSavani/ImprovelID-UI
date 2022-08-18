import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Touchable, TouchableOpacity } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension, getImageRatio, getstatus, getstatusColortext, getstatusIcon, getverifiedStatus, getverifiedStatusColor } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import mocksData, { PAGEDATA, USERDETAILS } from '../../constants/mocksData';
import LinearGradient from 'react-native-linear-gradient';
const Detailspage = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount, selecteIdData } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [selctedtype, setSelectedtype] = useState(props.route.params.selectedId)


    const _renderTopView = () => {
        let textColor = getstatusColortext(selecteIdData[0].activestatus)
        let textvColor = getverifiedStatusColor(selecteIdData[0].verifystatus)
        return (
            <View style={style.topview}>
                <Image source={assets.profileimage} resizeMode={'cover'} style={style.imageView} />
                <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                    <Text style={style.nameText}>Robert Alberto Johnson</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={style.lightText}>{t("detailsscreen.status")}:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[style.activeText, { color: colors[textColor] }]}>{t(getstatus(selecteIdData[0].activestatus))}</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={style.lightText}>{t("detailsscreen.consent")}:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[style.activeText, { color: colors[textvColor] }]}>{t(getverifiedStatus(selecteIdData[0].verifystatus))}</Text>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

    const BottomView = ({ item }) => {
        const { icon, id, title, } = item
        let selected = id == selctedtype
        return (
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { setSelectedtype(id) }}>
                    <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }} colors={selected ? gradients.buttongradient : gradients.buttongradientoff} style={style.iconContainer}>
                        <Image source={icons[icon]} style={style.iconView} />
                    </LinearGradient>
                </TouchableOpacity>
                <Text numberOfLines={1} adjustsFontSizeToFit style={[style.titleText, { color: selected ? colors.identityselectedtabtext : colors.identitytabtext }]}>{t(title)}</Text>
            </View>
        )
    }

    const BiographicView = () => {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                {_renderTopView()}
                <View style={{ height: 1, backgroundColor: colors.borderColor, marginBottom: 17 }}></View>
                {Object.entries(USERDETAILS).map(([key, value], index) => {
                    return (
                        <View style={style.singlebox}>
                            <Text style={style.keyText}>{t(key)}</Text>
                            <Text style={style.valueText}>{value}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
    const OtherView = () => {
        let selectedimage = imageCheck()
        let ratioImage = getImageRatio(assets[selectedimage], "local")
        return (
            // <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={{ alignSelf: 'center' }}>
                {selctedtype == 3 ? <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image style={style.imgeTopView(ratioImage)} source={assets[selectedimage]} />
                </View> : <View >
                    <Image style={style.imgeTopView(ratioImage)} source={assets[selectedimage]} />
                </View>}
                <View style={style.bottomView}>
                    <Image style={style.iconView} source={icons[getstatusIcon(selecteIdData[0].activestatus)]} />
                    <Text style={style.bottomText}>{t(getstatus(selecteIdData[0].activestatus))} / {t(getverifiedStatus(selecteIdData[0].verifystatus))}</Text>
                </View>
            </View>
            // </ScrollView>
        )
    }

    const imageCheck = () => {
        switch (selctedtype) {
            case 1:
                return selecteIdData[0]?.frontimage;
            case 2:
                return selecteIdData[0]?.backimage;
            case 3:
                return selecteIdData[0]?.qrimage;
            default:
                return selecteIdData[0]?.frontimage;
        }
    }
    const pageTitle = () =>{
       return PAGEDATA.find((i)=> i.id == selctedtype)?.title
    }

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t(pageTitle())} />
            <View style={style.container}>

                {selctedtype != 4 && <Text style={style.visualText}>{t("viewIdcardscreen.visulaiid")}</Text>}
                <View style={style.oyerMainview}>
                    <View style={style.mainView}>
                        {selctedtype == 4 ? <BiographicView /> : <OtherView />}
                    </View>
                </View>
                {selctedtype != 4 && <View style={style.centerView}>
                    {mocksData.PAGEDATA.map((item, index) => {
                        return <BottomView item={item} />
                    })}
                </View>}
            </View>
        </Block>
    )
}

export default Detailspage