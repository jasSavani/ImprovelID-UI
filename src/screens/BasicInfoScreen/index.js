import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Touchable, TouchableOpacity } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import * as MoreStyles from './stylesmore';


import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import { USERDETAILS } from '../../constants/mocksData';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button';
import CountryPicker, { FlagButton, Country, getAllCountries } from 'react-native-country-picker-modal'
import TextInputMask from 'react-native-text-input-mask';
import SelectDropdown from 'react-native-select-dropdown'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
const states = ["State 1", "State 2", "State 3",]


const BasicInfoScreen = (props) => {

    const { assets, colors, gradients, icons, flags } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount, setUserdata, userData } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [countrypicker, setCountrypicker] = useState(false)
    const [cca2, setCca2] = useState("US")
    const [selectedCountry, setSelectedCountry] = useState({})
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastname] = useState("")

    const [phoneNumber, setPhonenumber] = useState("")
    const [unmaskphoneNumber, setunmaskPhonenumber] = useState("")
    const [screenData, setScreendata] = useState({ address: "", city: "", state: "", zipcode: "", dob: "" })
    const textinput1 = useRef(null)
    const [show, setShow] = useState(false);
    const { stylesm } = MoreStyles
    const stylesmore = useMemo(() => stylesm(theme), [theme]);




    useEffect(() => {
        const getCountry = async () => {
            let _country = await getAllCountries().then((data) => data.filter((i) => i.cca2 == cca2).pop())
            setSelectedCountry(_country)
        }
        getCountry()
    }, [])

    const onchangetext = (value, key) => {
        setScreendata({
            ...screenData,
            [key]: value
        })

    }

    const Addressbox = () => {
        const { address, city, state, zipcode } = screenData
        return (
            <>
                <Text style={stylesmore.blackTxt}>{t("moreinfoscreen.address")}</Text>
                <View style={stylesmore.boxView}>
                    <TextInput
                        placeholder={t("moreinfoscreen.address")}
                        multiline
                        value={address}
                        placeholderTextColor={colors.placeholderTextColor}
                        style={stylesmore.addressText}
                        onChangeText={(text) => { onchangetext(text, "address") }}
                    />

                </View>
                <Text style={stylesmore.lightText}>{t("moreinfoscreen.apartment")}</Text>
                <View style={stylesmore.boxView}>
                    <TextInput
                        placeholder={t("moreinfoscreen.city")}
                        placeholderTextColor={colors.placeholderTextColor}
                        style={stylesmore.inputText}
                        value={city}
                        returnKeyType={'next'}
                        onSubmitEditing={() => {
                            textinput1.current.focus()
                        }}
                        blurOnSubmit={false}
                        onChangeText={(text) => { onchangetext(text, "city") }}
                    />

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <SelectDropdown
                        data={states}
                        buttonTextStyle={stylesmore.inputText}
                        defaultValue={state}
                        selectedRowStyle={stylesmore.rowStyle}
                        selectedRowTextStyle={stylesmore.inputText}
                        rowTextStyle={stylesmore.normalText}
                        rowStyle={stylesmore.rowStyle}
                        statusBarTranslucent
                        renderDropdownIcon={() => {
                            return (
                                <Image style={stylesmore.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                            )
                        }}
                        onSelect={(selectedItem, index) => {
                            onchangetext(selectedItem, "state")
                        }}
                        buttonStyle={stylesmore.dropDownbtn}
                        renderCustomizedButtonChild={(text) => {
                            return (
                                <View style={stylesmore.dropdowntextView}>
                                    {text ? <Text numberOfLines={1} style={stylesmore.inputText}>{text}</Text> : <Text numberOfLines={1} style={[stylesmore.inputText, { color: colors.placeholderTextColor }]}>{t("moreinfoscreen.state")}</Text>}
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
                    <View style={[stylesmore.boxView, { flex: 1, marginLeft: 4 }]}>
                        <TextInput
                            placeholder={t("moreinfoscreen.zipcode")}
                            ref={textinput1}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={stylesmore.inputText}
                            value={zipcode}
                            keyboardType={'number-pad'}
                            onChangeText={(text) => { onchangetext(text, "zipcode") }}
                        />
                    </View>
                </View>
            </>
        )
    }
    const Dobbox = () => {
        const { dob } = screenData
        return (
            <>
                <View style={stylesmore.dobView}>
                    <Text style={stylesmore.blackTxt}>{t("moreinfoscreen.dob")}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => { setShow(true) }} style={stylesmore.monthBox}>
                            <TextInput
                                placeholder={t("moreinfoscreen.month")}
                                placeholderTextColor={colors.placeholderTextColor}
                                style={stylesmore.inputText}
                                editable={false}
                                value={dob && moment(dob).format('MMMM')}
                            />
                            <Image style={stylesmore.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                        </TouchableOpacity>
                        <View style={stylesmore.dateBox}>
                            <TextInput
                                placeholder={t("moreinfoscreen.day")}
                                placeholderTextColor={colors.placeholderTextColor}
                                style={[stylesmore.inputText, { textAlign: 'center' }]}
                                editable={false}
                                value={dob && moment(dob).format('DD')}

                            />
                        </View>
                        <View style={stylesmore.yearBox}>
                            <TextInput
                                placeholder={t("moreinfoscreen.year")}
                                placeholderTextColor={colors.placeholderTextColor}
                                style={[stylesmore.inputText, { textAlign: 'center' }]}
                                editable={false}
                                value={dob && moment(dob).format('YYYY')}

                            />
                        </View>
                    </View>
                </View>
            </>
        )
    }

    const onChange = (event, selectedDate) => {
        setShow(false)
        if (event.type == 'dismissed') {
            return
        }
        const currentDate = selectedDate;
        setScreendata({
            ...screenData,
            dob: selectedDate
        })
    };




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
                                setunmaskPhonenumber(extracted)
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
                                setMiddleName(text)
                            }}
                            placeholder={t('basicinfoscreen.middlename')}
                            placeholderTextColor={colors.placeholderTextColor}
                            value={middleName}
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

    const navigateNextScreen = () => {
        let _tempUserdata = {
            firstName,
            lastName,
            middleName,
            callingcode: selectedCountry.callingCode[0],
            phoneNo: unmaskphoneNumber
        }
        setUserdata({ ...userData, ..._tempUserdata,...screenData })
        props.navigation.navigate("OtpVerification")
    }


    return (
        <Block>
            <StatusBar barStyle={'light-content'} />
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("basicinfoscreen.screenname")} />
            <View style={style.container}>
                <View style={style.mainView}>
                    <KeyboardAwareScrollView style={style.scrollView} enableOnAndroid contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} >
                        <BoxView />
                        {numberView()}
                        {nameView()}
                        {Addressbox()}
                        {<Dobbox />}
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={screenData.dob ? new Date(screenData.dob) : new Date()}
                                mode={"date"}
                                display={Platform.OS == 'ios' ? "spinner" : 'calendar'}
                                maximumDate={new Date()}
                                onChange={onChange}
                            />
                        )}
                    </KeyboardAwareScrollView>
                    <View style={style.bottomView}>
                        <Button style={{}} isgradient={true} onClick={navigateNextScreen} gradient={gradients.primary} name={t("basicinfoscreen.snedverificationcode")} />
                    </View>
                </View>
            </View>
            {countrypicker && <CountryPicker closeButtonStyle={style.closeButton} closeButtonImageStyle={style.closeImage} withEmoji={false} withAlphaFilter visible={countrypicker} onClose={() => setCountrypicker(false)} onSelect={(country) => { setSelectedCountry(country); }} />}
        </Block>
    )
}

export default BasicInfoScreen