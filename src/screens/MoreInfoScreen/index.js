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

const MoreInfoScreen = (props) => {

    const { assets, colors, gradients, icons, flags } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [show, setShow] = useState(false);
    const [screenData, setScreendata] = useState({ address: "", city: "", state: "", zipcode: "", dob: "" })



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
                        onChangeText={(text) => { onchangetext(text, "city") }}
                    />

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[style.boxView, { flex: 1, marginRight: 4 }]}>
                        <TextInput
                            placeholder={t("moreinfoscreen.state")}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={style.inputText}
                            value={state}
                            onChangeText={(text) => { onchangetext(text, "state") }}
                        />

                    </View>
                    <View style={[style.boxView, { flex: 1, marginLeft: 4 }]}>
                        <TextInput
                            placeholder={t("moreinfoscreen.zipcode")}
                            placeholderTextColor={colors.placeholderTextColor}
                            style={style.inputText}
                            value={zipcode}
                            onChangeText={(text) => { onchangetext(text, "zipcode") }}
                        />
                        <Image style={style.dropdownImage} resizeMode={'contain'} source={icons.downIcon} />
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
                        <View style={style.yearBox}>
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




    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("moreinfoscreen.screenname")} />
            <View style={style.container}>
                <View style={style.mainView}>
                    <KeyboardAwareScrollView style={style.scrollView} contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} >
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
                        <Button style={{}} isgradient={true} onClick={() => {
                            props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'Drawer' }]
                            })
                        }} gradient={gradients.primary} name={t("moreinfoscreen.contiue")} />
                    </View>
                </View>
            </View>
        </Block>
    )
}

export default MoreInfoScreen