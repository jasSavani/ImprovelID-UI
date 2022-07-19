import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Touchable, TouchableOpacity } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import { USERDETAILS } from '../../constants/mocksData';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button';
import CountryPicker, { FlagButton, Country, getAllCountries } from 'react-native-country-picker-modal'
import TextInputMask from 'react-native-text-input-mask';
import SelectDropdown from 'react-native-select-dropdown'
const countries = ["Egypt", "Canada", "AustraliaAustralia", "Ireland", "Egypt", "Canada", "Australia", "Ireland"]

const BasicInfoScreen = (props) => {

    const { assets, colors, gradients, icons, flags } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [countrypicker, setCountrypicker] = useState(false)
    const [cca2, setCca2] = useState("US")
    const [selectedCountry, setSelectedCountry] = useState({})
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastname] = useState("")

    const [phoneNumber, setPhonenumber] = useState("")
    const [unmaskphoneNumber, setunmaskPhonenumber] = useState("")


    useEffect(() => {
        const getCountry = async () => {
            let _country = await getAllCountries().then((data) => data.filter((i) => i.cca2 == cca2).pop())
            setSelectedCountry(_country)
        }
        getCountry()
    }, [])
    
    const BoxView = () => {
        const { flag, name, callingCode, cca2 } = selectedCountry
        return (
            <>
                <Text style={style.blackTxt}>{t('basicinfoscreen.liveText')}</Text>
                <TouchableOpacity onPress={() => setCountrypicker(true)} style={style.boxView}>
                    <View style={style.imageView} >
                        {cca2 && <Image source={flag?.includes("data") ? { uri: flag } : flags[cca2]} style={{ height: '100%', width: '100%' }} resizeMode={'cover'} />}
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={style.countryNametext}>{name}</Text>
                    </View>
                    <Image style={style.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                </TouchableOpacity>
            </>
        )
    }

    const numberView = () => {
        const { flag, name, callingCode, cca2 } = selectedCountry

        return (
            <>
                <Text style={style.blackTxt}>{t('basicinfoscreen.numberText')}</Text>
                <Text style={style.lightText}>{t("basicinfoscreen.rateText")}</Text>
                <View style={style.boxView}>
                    <View style={style.imageView} >
                        {cca2 && <Image source={flag?.includes("data") ? { uri: flag } : flags[cca2]} style={{ height: '100%', width: '100%' }} resizeMode={'cover'} />}
                    </View>
                    <View style={style.codeView}>
                        <Text style={style.codeText}>+{callingCode}</Text>
                        <Image style={style.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInputMask
                            onChangeText={(formatted, extracted) => {
                                setPhonenumber(formatted)
                            }}
                            mask={"([000]) [000] [0000]"}
                            placeholder='(000) 000 0000 '
                            placeholderTextColor={colors.placeholderTextColor}
                            keyboardType={'numeric'}
                            value={phoneNumber}
                            style={style.inputText}
                        />
                    </View>
                </View>
            </>
        )
    }
    const nameView = () => {
        console.log('NAME');
        return (
            <>
                <Text style={style.blackTxt}>{t('basicinfoscreen.nameText')}</Text>
                <View style={style.boxView}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            onChangeText={(text) => {
                                setFirstName(text)
                            }}
                            placeholder={t('basicinfoscreen.firstname')}
                            placeholderTextColor={colors.placeholderTextColor}
                            value={firstName}
                            style={style.inputText}
                        />
                    </View>
                </View>
                <View style={style.boxView}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            onChangeText={(text) => {
                                setLastname(text)
                            }}
                            placeholder={t('basicinfoscreen.lastname')}
                            placeholderTextColor={colors.placeholderTextColor}
                            value={lastName}
                            style={style.inputText}
                        />
                    </View>
                </View>
            </>
        )
    }


    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("basicinfoscreen.screenname")} />
            <View style={style.container}>
                <View style={style.mainView}>
                    <KeyboardAwareScrollView style={style.scrollView} contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} >
                        <BoxView />
                        {numberView()}
                        {nameView()}
                        {/* <View style={style.boxView}>
                            <View style={{ flex: 1 }}></View>

                            <SelectDropdown
                                data={countries}
                                defaultButtonText={'Select City'}
                                buttonTextStyle={style.blackTxt}
                                selectedRowTextStyle={style.lightText}
                                statusBarTranslucent
                                renderDropdownIcon={() => {
                                    return (
                                        <Image style={style.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                                    )
                                }}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                }}
                                buttonStyle={{ backgroundColor: 'transparent', height: '100%', minWidth: '40%' }}
                                renderCustomizedButtonChild={(text) => {
                                    console.log(text, 'TEXT');
                                    return (
                                        <View style={{ backgroundColor: 'pink',alignItems:'flex-end',justifyContent:'center' }}>
                                            <Text numberOfLines={1} style={style.lightText}>{text}</Text>
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
                                    return item
                                }}
                            />
                        </View> */}
                    </KeyboardAwareScrollView>
                    <View style={style.bottomView}>
                        <Button style={{}} isgradient={true} onClick={() => { props.navigation.navigate("Moreinfo")}} gradient={gradients.primary} name={t("basicinfoscreen.snedverificationcode")} />
                    </View>
                </View>
            </View>
            {countrypicker && <CountryPicker withEmoji={false} withAlphaFilter visible={countrypicker} onClose={() => setCountrypicker(false)} onSelect={(country) => { setSelectedCountry(country); }} />}
        </Block>
    )
}

export default BasicInfoScreen