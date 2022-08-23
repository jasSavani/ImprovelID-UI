import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, SectionList, TouchableOpacity, FlatList, Modal } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { DEVICEDATA, IDENTITYDATA } from '../../constants/mocksData';
import PopupMessage from '../../components/PopupMessage';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

const ManageIdentities = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount, selectedDevice } = useData();
    const { t, translate } = useTranslation();
    const [identityCard, setIdentityCard] = useState(IDENTITYDATA)
    const [open, setOpen] = useState([])
    const [ismodal, setIsmodal] = useState(false)
    const [visible, setVisible] = useState(false);
    const { styles } = Styles

    const hideMenu = (index) => {
        let _tempdata = [...identityCard]
        _tempdata[index].isOpen = false
        setIdentityCard(_tempdata)
    };

    const showMenu = (index) => {
        let _tempdata = [...identityCard]
        _tempdata[index].isOpen = true
        setIdentityCard(_tempdata)
    };


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
            <TouchableOpacity onPress={() => { setIsmodal(true) }} >
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
        const { number, name, isOpen } = item
        let selected = open.includes(number)
        // let icon = open.includes(number) ? icons.upIcon : icons.downIcon
        let icon = icons.menudotIcon

        return (
            <View activeOpacity={0.8} style={styles.cardOuteview} onPress={() => { _select(number) }}>
                <View style={styles.rowView} >
                    <Image style={styles.deviceimageView} resizeMode={'stretch'} source={icons.dltestIcon} />
                    <View style={styles.centerView}>
                        <Text numberOfLines={1} style={styles.nameText(theme)}>{name}</Text>
                        <Text numberOfLines={1} style={styles.subnametext(theme)}>{number}</Text>
                    </View>

                    <TouchableOpacity onPress={() => showMenu(index)} style={{ alignSelf: 'center', marginRight: deviceBasedDynamicDimension(20, true, 1) }} >
                        <Image style={styles.rightArrow} resizeMode={'contain'} source={icon} />
                        <Menu
                            visible={isOpen}
                            style={styles.menuOuterView}
                            // anchor={<Image style={styles.rightArrow} resizeMode={'contain'} source={icon} />}
                            onRequestClose={() => hideMenu(index)}
                        >
                            <MenuItem style={styles.menuView} onPress={() => {onSuspendButtonClick(index)  }}>
                                <View style={[styles.rowView, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <View style={[styles.dotView, { backgroundColor: colors.orangeText }]}>
                                    </View>
                                    <Text style={styles.menuText(theme)}>{t("common.suspend")}</Text>
                                </View>
                            </MenuItem>
                            <MenuItem style={styles.menuView} onPress={() => hideMenu(index)}>
                                <View style={[styles.rowView, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <View style={[styles.dotView, { backgroundColor: colors.primary }]}>
                                    </View>
                                    <Text style={styles.menuText(theme)}>{t("common.revoke")}</Text>
                                </View>
                            </MenuItem>
                            <MenuItem style={styles.menuView} onPress={() => hideMenu(index)}>
                                <View style={[styles.rowView, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <View style={[styles.dotView, { backgroundColor: colors.redText }]}>
                                    </View>
                                    <Text style={styles.menuText(theme)}>{t("common.delete")}</Text>
                                </View>
                            </MenuItem>
                            <MenuItem style={styles.menuView} onPress={() => hideMenu(index)}>
                                <View style={[styles.rowView, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <View style={[styles.dotView, { backgroundColor: colors.activetext }]}>
                                    </View>
                                    <Text style={styles.menuText(theme)}>{t("common.renew")}</Text>
                                </View>
                            </MenuItem>
                        </Menu>
                    </TouchableOpacity>
                </View>
                {/* {selected && <View style={styles.extraView}>
                    {_renderSuspendbtn(item)}
                    {_renderRevokebtn(item)}
                </View>} */}
            </View>
        )
    }

    const renderTopView = () => {
        const { type, placeanddate, name } = selectedDevice
        const colr = (type == 'android') ? gradients.green : (type == 'ios') ? gradients.primary : gradients.lightblue
        const icon = (type == 'android') ? icons.androidIcon : (type == 'ios') ? icons.iphoneIcon : icons.laptopIcon
        return (
            <View style={styles.topView}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={colr} style={styles.topdeviceimageView}>
                    <Image style={{ height: '70%', width: '70%' }} resizeMode={'contain'} source={icon} />
                </LinearGradient>
                <View style={styles.textView}>
                    <Text numberOfLines={1} style={styles.nameText(theme)}>{name}</Text>
                    <Text numberOfLines={1} style={styles.subnametext(theme)}>{placeanddate}</Text>
                </View>
                <TouchableOpacity style={{ position: 'absolute', right: deviceBasedDynamicDimension(20, true, 1), top: 20 }} >
                    <Image style={styles.rightArrow} resizeMode={'contain'} source={icons.menudotIcon} />
                </TouchableOpacity>
            </View>
        )
    }

    const onSuspendButtonClick = async (index) =>{
        hideMenu(index)
        setTimeout(() => {
            setIsmodal(true)
        }, 500);
    }


    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("screens.manageidentity")} />

            <View style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
                {renderTopView()}
                <FlatList
                    data={identityCard}
                    keyExtractor={(item, index) => item + index}
                    contentContainerStyle={styles.containerStyle}
                    renderItem={_renderIdentityView}
                />
            </View>
            {ismodal && <PopupMessage title={t("popupmessage.suspend")} message={t("popupmessage.deletemsg")} primaryBtnname={t("popupmessage.yes")} secondaryBtnname={t("popupmessage.no")} primaryBtn={() => { }} secondaryBtn={() => { }} onCancel={() => { setIsmodal(!ismodal) }} icon={icons.suspendIcon} />}
        </Block>
    )
}

export default ManageIdentities