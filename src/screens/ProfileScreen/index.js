import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList, TextInput } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Block from '../../components/Block';
import Header from '../../components/Header';
import { mocksData } from '../../constants';
import CountryPicker, { FlagButton, Country, getAllCountries } from 'react-native-country-picker-modal'
import TextInputMask from 'react-native-text-input-mask';
import SelectDropdown from 'react-native-select-dropdown';
const states = ["State 1", "State 2", "State 3",]
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/Button';



const ProfileScreen = (props) => {

    const { assets, colors, gradients, icons, flags } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [profileData, setProfileData] = useState({})
    const [selectedCountry, setSelectedCountry] = useState({})
    const [countrypicker, setCountrypicker] = useState(false)
    const [maskphoneNumber, setmaskPhonenumber] = useState("")
    const [show, setShow] = useState(false);
    const [imagedata, setIamgedata] = useState({})


    useEffect(() => {
        setProfileData({
            firstname: "Robert",
            middlename:"Alberto",
            lastname: "Johnson",
            email: "robertjohnson123@gmail.com",
            country: "US",
            code: "1",
            phoneNumber: "(132) 456 7890",
            address: "13th st. Bryan Avenue Eagan",
            city: "New York",
            state: "United States",
            dob: "2022-08-09T05:55:38.946Z",
            profileImage: "profileimage"
        })
        // API CALL FOR GET PROFILE DATA AND AFTER GETTING DATA CALL THIS TWO FUNCTIONS
        getCountry("US")
        setmaskPhonenumber("(132) 456 7890")
    }, [])

    const openFilemanager = () => {
        try {
            ImagePicker.openPicker({
            }).then(image => {
                let image_data = {
                    type: image.mime,
                    uri: image.path,
                    name: image.path?.substring(image.path?.lastIndexOf('/') + 1)
                }
                setIamgedata(image_data)
            });
        } catch (error) {

        }

    }


    const getCountry = async (cca2) => {
        let _country = await getAllCountries().then((data) => data.filter((i) => i.cca2 == cca2).pop())
        if (_country) {
            setSelectedCountry(_country)
        }
    }


    const handleTextChange = (text, key) => {
        setProfileData({
            ...profileData,
            [key]: text
        })
    }

    const oneSingleCard = (placeholder, key, value) => {
        return (
            <View style={style.oneView}>
                <Text style={style.blackTxt}>{placeholder}</Text>
                <View style={style.boxView}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            onChangeText={(text) => {
                                handleTextChange(text, key)
                            }}
                            placeholder={placeholder}
                            placeholderTextColor={colors.placeholderTextColor}
                            value={value}
                            style={style.inputText}
                        />
                    </View>
                </View>
            </View>
        )
    }

    const coutryView = () => {
        const { flag, name, callingCode, cca2 } = selectedCountry
        return (
            <View style={style.oneView}>
                <Text style={style.blackTxt}>{t('basicinfoscreen.liveText')}</Text>
                <TouchableOpacity onPress={() => setCountrypicker(true)} style={style.countryBox}>
                    <View style={style.imageView} >
                        {cca2 && <Image source={flag?.includes("data") ? { uri: flag } : flags[cca2]} style={{ height: '100%', width: '100%' }} resizeMode={'cover'} />}
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={style.countryNametext}>{name}</Text>
                    </View>
                    <Image style={style.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                </TouchableOpacity>
            </View>
        )
    }

    const numberView = () => {
        const { flag, name, callingCode, cca2 } = selectedCountry

        return (
            <View style={style.oneView}>
                <Text style={style.blackTxt}>{t('common.phoneeno')}</Text>
                <View style={style.countryBox}>
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
                                handleTextChange(extracted, "phoneNumber")
                                setmaskPhonenumber(formatted)
                            }}
                            mask={"([000]) [000] [0000]"}
                            placeholder='(000) 000 0000 '
                            placeholderTextColor={colors.placeholderTextColor}
                            keyboardType={'numeric'}
                            value={maskphoneNumber}
                            style={style.inputText}
                        />
                    </View>
                </View>
            </View>
        )
    }

    const cityStateView = () => {
        return (
            <View style={[{ flexDirection: 'row' }, style.oneView]}>
                <View style={{ flex: 1, marginRight: 9 }}>
                    <Text style={style.blackTxt}>{t('moreinfoscreen.city')}</Text>
                    {/* <SelectDropdown
                        data={states}
                        buttonTextStyle={[style.inputText]}
                        defaultValue={profileData?.state}
                        selectedRowStyle={style.rowStyle}
                        selectedRowTextStyle={style.inputText}
                        rowTextStyle={style.normalText}
                        rowStyle={style.rowStyle}
                        statusBarTranslucent
                        renderDropdownIcon={() => {
                            return (
                                <Image style={style.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                            )
                        }}
                        onSelect={(selectedItem, index) => {
                            handleTextChange(selectedItem, "state")
                        }}
                        buttonStyle={style.dropDownbtn}
                        renderCustomizedButtonChild={(text) => {
                            return (
                                <View style={style.dropdowntextView}>
                                    {text ? <Text numberOfLines={1} adjustsFontSizeToFit style={style.inputText}>{text}</Text> : <Text numberOfLines={1} adjustsFontSizeToFit style={[style.inputText, { color: colors.placeholderTextColor }]}>{t("moreinfoscreen.state")}</Text>}
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
                    /> */}
                    <View style={[style.boxView]}>
                        <TextInput
                            placeholder={t("moreinfoscreen.city")}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={[style.inputText, { flex: 1 }]}
                            numberOfLines={1}
                            value={profileData?.city}
                            onChangeText={(text) => { handleTextChange(text, "city") }}
                        />
                    </View>
                </View>
                <View style={{ marginLeft: 9, flex: 1 }}>
                    <Text style={style.blackTxt}>{t('moreinfoscreen.state')}</Text>
                    <View style={[style.boxView]}>
                        <TextInput
                            placeholder={t("moreinfoscreen.state")}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={[style.inputText, { flex: 1 }]}
                            value={profileData?.state}
                            onChangeText={(text) => { handleTextChange(text, "state") }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    const Dobbox = () => {
        const { dob } = profileData
        return (
            <View style={style.oneView}>
                <Text style={style.blackTxt}>{t("moreinfoscreen.dob")}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => { setShow(true) }} style={style.monthBox}>
                        <TextInput
                            placeholder={t("moreinfoscreen.month")}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={[style.inputText, { flex: 1 }]}
                            editable={false}
                            value={dob && moment(dob).format('MMMM')}
                        />
                        <Image style={style.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                    </TouchableOpacity>
                    <View style={style.dateBox}>
                        <TextInput
                            placeholder={t("moreinfoscreen.day")}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={[style.inputText, { textAlign: 'center', flex: 1 }]}
                            editable={false}
                            value={dob && moment(dob).format('DD')}
                        />
                    </View>
                    <View style={style.yearBox}>
                        <TextInput
                            placeholder={t("moreinfoscreen.year")}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={[style.inputText, { textAlign: 'center', flex: 1 }]}
                            editable={false}
                            value={dob && moment(dob).format('YYYY')}
                        />
                    </View>
                </View>
            </View>
        )
    }

    const onChange = (event, selectedDate) => {
        setShow(false)
        if (event.type == 'dismissed') {
            return
        }
        const currentDate = selectedDate;
        handleTextChange(selectedDate, "dob")
    };

    const profileImageView = () => {
        return (
            <View style={style.imageOuterView}>
                <Image style={style.profileImage} source={imagedata?.uri ? { uri: imagedata?.uri } : assets[profileData.profileImage]} />
                <TouchableOpacity onPress={openFilemanager} style={style.editBtn}>
                    <Image style={style.editImage} source={icons.profileEdit} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("profile.screenname")} />
            <KeyboardAwareScrollView enableOnAndroid style={style.container} contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} >
                {profileImageView()}
                <View style={style.titleView}>
                    <Text style={style.titleText}>{t("basicinfoscreen.screenname")}</Text>
                </View>
                <View style={style.cardView}>
                    {oneSingleCard(t("basicinfoscreen.firstname"), "firstname", profileData?.firstname)}
                    {oneSingleCard(t("basicinfoscreen.middlename"), "middlename", profileData?.middlename)}
                    {oneSingleCard(t("basicinfoscreen.lastname"), "lastname", profileData?.lastname)}
                    {oneSingleCard(t("common.email"), "email", profileData?.email)}
                    {coutryView()}
                    {numberView()}
                </View>
                <View style={style.titleView}>
                    <Text style={style.titleText}>{t("moreinfoscreen.screenname")}</Text>
                </View>
                <View style={style.cardView}>
                    {oneSingleCard(t("moreinfoscreen.address"), "address", profileData?.address)}
                    {cityStateView()}
                    {<Dobbox />}
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={profileData.dob ? new Date(profileData.dob) : new Date()}
                            mode={"date"}
                            display={Platform.OS == 'ios' ? "spinner" : 'calendar'}
                            maximumDate={new Date()}
                            onChange={onChange}
                        />
                    )}
                </View>
                <Button isgradient gradient={gradients.primary} name={t("profile.btnText")} onClick={() => { alert('btnPress') }} />

            </KeyboardAwareScrollView>
            {countrypicker && <CountryPicker closeButtonStyle={style.closeButton}  closeButtonImageStyle={style.closeImage} withEmoji={false} withAlphaFilter visible={countrypicker} onClose={() => setCountrypicker(false)} onSelect={(country) => { setSelectedCountry(country), handleTextChange(country.cca2, "country"), handleTextChange(country.callingCode[0], "code"); }} />}
        </Block>
    )
}

export default ProfileScreen