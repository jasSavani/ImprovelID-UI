import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, SectionList, TouchableOpacity } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { DEVICEDATA, IDENTITYDATA } from '../../constants/mocksData';
import PopupMessage from '../../components/PopupMessage';


const ManageIdentities = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const [identityCard, setIdentityCard] = useState(IDENTITYDATA)
    const [open, setOpen] = useState([])
    const [ismodal, setIsmodal] = useState(false)


    const { styles } = Styles
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {
            setActivescreen("Home")
        });

        return unsubscribe;
    }, [])

    const _select = (number) => {
        if (open.includes(number)) {
            setOpen([...open.filter((i) => i != number)])
        } else {
            setOpen([...open, number])
            // setOpen([number])
        }
    }

    const _renderSuspendbtn = (item) => {
        return (
            <TouchableOpacity onPress={()=>{setIsmodal(true)}} >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={gradients.suspendbtn} style={styles.btnView}>
                <Text style={styles.btnText(theme)}>{t("myidentities.suspend")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    const _renderRevokebtn = (item) => {
        return (
            <TouchableOpacity >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={gradients.revokegbtn} style={styles.btnView}>
                <Text style={styles.btnText(theme)}>{t("myidentities.revoke")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    const _renderIdentityView = ({ item, index }) => {
        const { number, name } = item
        let selected = open.includes(number)
        let icon = open.includes(number) ? icons.upIcon : icons.downIcon
        return (
            <View style={styles.cardOuteview}>
                <TouchableOpacity activeOpacity={0.8} style={styles.rowView} >
                    <Image style={styles.deviceimageView} resizeMode={'stretch'} source={icons.dltestIcon} />
                    <View style={styles.centerView}>
                        <Text numberOfLines={1} style={styles.nameText(theme)}>{name}</Text>
                        <Text numberOfLines={1} style={styles.subnametext(theme)}>{number}</Text>
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { _select(number) }}>
                        <Image style={styles.rightArrow} resizeMode={'contain'} source={icon} />
                    </TouchableOpacity>
                </TouchableOpacity>
                {selected && <View style={styles.extraView}>
                    {_renderSuspendbtn(item)}
                    {_renderRevokebtn(item)}
                </View>}
            </View>
        )
    }

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("screens.manageidentity")} />

            <View style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
                <SectionList
                    sections={identityCard}
                    keyExtractor={(item, index) => item + index}
                    contentContainerStyle={styles.containerStyle}
                    renderItem={_renderIdentityView}
                    renderSectionHeader={({ section: { title } }) => null}
                />
            </View>
            {ismodal && <PopupMessage isVisible={ismodal} title={t("popupmessage.suspend")} message={t("popupmessage.deletemsg")} primaryBtnname={t("popupmessage.yes")} secondaryBtnname={t("popupmessage.no")}   primaryBtn={() => { }} secondaryBtn={()=>{}} onCancel={() => { setIsmodal(!ismodal) }} icon={icons.deletepop} />}
        </Block>
    )
}

export default ManageIdentities