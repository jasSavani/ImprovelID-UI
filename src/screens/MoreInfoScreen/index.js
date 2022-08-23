import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Touchable, TouchableOpacity, Platform } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import SelectDropdown from 'react-native-select-dropdown';
const states = ["State 1", "State 2", "State 3",]

const MoreInfoScreen = (props) => {

    const { assets, colors, gradients, icons, flags } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount,setUserdata,userData  } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [show, setShow] = useState(false);
    const [screenData, setScreendata] = useState({ address: "", city: "", state: "", zipcode: "", dob: "" })
    const textinput1 = useRef(null)


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
                <Text style={style.blackTxt}>{t("moreinfoscreen.address")}</Text>
                <View style={style.boxView}>
                    <TextInput
                        placeholder={t("moreinfoscreen.address")}
                        multiline
                        value={address}
                        placeholderTextColor={colors.placeholderTextColor}
                        style={style.addressText}
                        onChangeText={(text) => { onchangetext(text, "address") }}
                    />

                </View>
                <Text style={style.lightText}>{t("moreinfoscreen.apartment")}</Text>
                <View style={style.boxView}>
                    <TextInput
                        placeholder={t("moreinfoscreen.city")}
                        placeholderTextColor={colors.placeholderTextColor}
                        style={style.inputText}
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
                        buttonTextStyle={style.inputText}
                        defaultValue={state}
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
                            onchangetext(selectedItem, "state")
                        }}
                        buttonStyle={style.dropDownbtn}
                        renderCustomizedButtonChild={(text) => {
                            return (
                                <View style={style.dropdowntextView}>
                                    {text ? <Text numberOfLines={1}  style={style.inputText}>{text}</Text> : <Text numberOfLines={1}  style={[style.inputText, { color: colors.placeholderTextColor }]}>{t("moreinfoscreen.state")}</Text>}
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
                    <View style={[style.boxView, { flex: 1, marginLeft: 4 }]}>
                        <TextInput
                            placeholder={t("moreinfoscreen.zipcode")}
                            ref={textinput1}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={style.inputText}
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
                <View style={style.dobView}>
                    <Text style={style.blackTxt}>{t("moreinfoscreen.dob")}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => { setShow(true) }} style={style.monthBox}>
                            <TextInput
                                placeholder={t("moreinfoscreen.month")}
                                placeholderTextColor={colors.placeholderTextColor}
                                style={style.inputText}
                                editable={false}
                                value={dob && moment(dob).format('MMMM')}
                            />
                            <Image style={style.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
                        </TouchableOpacity>
                        <View style={style.dateBox}>
                            <TextInput
                                placeholder={t("moreinfoscreen.day")}
                                placeholderTextColor={colors.placeholderTextColor}
                                style={[style.inputText, { textAlign: 'center' }]}
                                editable={false}
                                value={dob && moment(dob).format('DD')}

                            />
                        </View>
                        <View style={style.yearBox}>
                            <TextInput
                                placeholder={t("moreinfoscreen.year")}
                                placeholderTextColor={colors.placeholderTextColor}
                                style={[style.inputText, { textAlign: 'center' }]}
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

    const navigateNextScreen = () => {
        setUserdata({...userData,...screenData})
        props.navigation.navigate("OtpVerification")
    }


    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("moreinfoscreen.screenname")} />
            <View style={style.container}>
                <View style={style.mainView}>
                    <KeyboardAwareScrollView enableOnAndroid style={style.scrollView} contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} >
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
        </Block>
    )
}

export default MoreInfoScreen