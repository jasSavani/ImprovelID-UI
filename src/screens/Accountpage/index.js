import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, Switch } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { ACCOUNTDATA, CARDDATA, DEVICEDATA } from '../../constants/mocksData';
import DocCard from '../../components/DocCard';
import SelectDropdown from 'react-native-select-dropdown'


const countries = [{ type: "en", name: "English" },{ type: "fr", name: "Franse" }]

const Accountpage = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount, setIsDark,handleIsDark } = useData();
    const { t, translate, locale, setLocale } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [selectedLanguage, setSelectedlanguage] = useState()


    const toggleSwitch = (value) => {
        handleIsDark(value)
    };
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {
            setActivescreen("Account")
            searchDropdownIndex()
        });

        return unsubscribe;
    }, [])

    const searchDropdownIndex = () => {
        let index = countries.findIndex((i) => i.type == locale)
        if (index != -1) {
            setSelectedlanguage(index)
        }
    }

    const firstBox = () => {
        return (
            <View style={style.firstboxView}>
                <Image style={style.profileImage} source={assets.profileimage} />
                <View style={style.textView}>
                    <Text numberOfLines={1} style={style.nameText}>Robert Alberto Johnson</Text>
                    <Text numberOfLines={1} style={style.emailText}>michealwilson123@gmail.com</Text>
                </View>
            </View>
        )
    }
    const SwitchView = (subdata) => {
        const { type, name } = subdata

        return (
            <View style={style.subSecondView}>
                <View style={{ flex: 1 }}>
                    <Text style={style.darkText}>{t(name)}</Text>
                </View>
                <Switch
                    style={style.switchView}
                    trackColor={{ false: "#767577", true: colors.primary }}
                    thumbColor={colors.white}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isDark}
                />
            </View>
        )
    }
    const LanguageView = (subdata) => {
        const { type, name } = subdata

        return (
            <View style={style.subSecondView}>
                <View style={{ flex: 1 }}>
                    <Text style={style.darkText}>{t(name)}</Text>
                </View>
                <SelectDropdown
                    data={countries}
                    buttonTextStyle={style.selectText}
                    defaultValueByIndex={selectedLanguage}
                    selectedRowStyle={style.rowStyle}
                    selectedRowTextStyle={style.selectText}
                    rowTextStyle={style.normalText}
                    rowStyle={style.rowStyle}
                    statusBarTranslucent
                    renderDropdownIcon={() => {
                        return (
                            <Image style={style.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                        )
                    }}
                    onSelect={(selectedItem, index) => {
                        setLocale(selectedItem.type)
                    }}
                    buttonStyle={style.dropDownbtn}
                    renderCustomizedButtonChild={(text) => {
                        return (
                            <View style={style.dropdowntextView}>
                                <Text numberOfLines={1} style={style.selectText}>{text?.name}</Text>
                            </View>
                        )
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item.name
                    }}
                />
            </View>
        )
    }
    const BtnView = (subdata) => {
        const { type, name } = subdata
        return (
            <TouchableOpacity onPress={()=>onclick(subdata?.navigate)} style={style.subSecondView}>
                <View style={{ flex: 1 }}>
                    <Text style={style.darkText}>{t(name)}</Text>
                </View>
                <View style={style.righarrowView}>
                    <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={icons.rightArrow} />
                </View>
            </TouchableOpacity>
        )
    }
    const secondBox = (accountdata, index) => {
        const { description, name, icon, subData } = accountdata
        return (
            <View style={style.secondboxView}>
                <View style={style.subfirstView}>
                    <LinearGradient colors={gradients.primary} style={style.subImageView}>
                        <Image style={{ height: '50%', width: '50%', resizeMode: 'contain' }} source={icons[icon]} />
                    </LinearGradient>
                    <View style={style.subTextView}>
                        <Text numberOfLines={1} style={style.subText}>{t(name)}</Text>
                        <Text numberOfLines={1} style={style.subLightText}>{t(description)}</Text>
                    </View>
                </View>
                {subData?.map((subdata, subindex) => {
                    const { type } = subdata
                    if (type == 1) {
                        return SwitchView(subdata)
                    }
                    if (type == 2) {
                        return LanguageView(subdata)
                    }
                    return BtnView(subdata)
                })}
            </View>
        )
    }

    const onclick =(screenname)=>{
        screenname && props.navigation.navigate(screenname)
    }

    return (
        <Block>
            <Header
                leftIcon={icons.menuIcon}
                rightIcon={icons.bellIcon}
                onleftClick={() => { props.navigation.openDrawer() }}
                onRightClick={() => { }}
                screenName={t("screens.account")} />
            <ScrollView style={style.container} contentContainerStyle={{ flexGrow: 1, paddingBottom: deviceBasedDynamicDimension(50, false, 1) }}>
                {firstBox()}
                {ACCOUNTDATA.map((accountdata, index) => {
                    return secondBox(accountdata, index)
                }
                )}
            </ScrollView>


        </Block>
    )
}

export default Accountpage