import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Touchable, TouchableOpacity, SectionList, Platform } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension, screenWidth } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import { CARDDATA, USERDETAILS } from '../../constants/mocksData';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import DocCard from '../../components/DocCard';
import { IM } from 'react-native-round-flags/flags/64';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ViewIDcard = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [seconds, setSeconds] = useState(10);
    const [otp, setOtp] = useState("");


    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('0');
        }
    });

    const HeaderView = () => {
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={gradients.primary}>
                <View style={style.headerView}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={style.leftBtn}>
                        <Image source={icons.backArrow} style={{ height: '100%', width: '100%', tintColor: colors.whiteText }} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <View style={style.textView}>
                        <Text numberOfLines={1} style={style.nameText}>Robert Alberto Johnson</Text>
                        <Text numberOfLines={1} style={style.emailText}>michealwilson123@gmail.com</Text>
                    </View>
                    <View style={style.imageView}>
                        <Image source={assets.profileimage} style={style.profileImage} />
                    </View>
                </View>
            </LinearGradient>
        )
    }
    const _renderItem = ({ item, index }) => {
        return (
            <View style={style.caraouselOuterview}>
                <View style={style.caraouselImage}>
                    <Image source={assets.dlimage} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                </View>
            </View>
        );
    }
    const _renderDeviceView = ({ item, index }) => {
        return (
            <>
                {item.id != 4 ? <AuthSingleCard item={item} /> :
                    OtpView()}
            </>
        )
    }

    const AuthSingleCard = ({ item }) => {
        return (
            <View style={style.cardView}>
                <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }} colors={gradients.buttongradient} style={style.iconOuterView}>
                    <Image style={{ height: '50%', width: '50%' }} resizeMode={'contain'} source={icons[item.icon]} />
                </LinearGradient>
                <View style={{ flex: 1 }}>
                    <Text style={style.certiName}>{item.name}</Text>
                    <Text style={style.numbText}>{item.number}</Text>
                </View>
                <Image source={icons.rightArrow} style={style.rightArrow} />
            </View>
        )
    }

    const OtpView = () => {
        return (
            <View style={style.otpOuterview}>
                <View style={style.rowView}>
                    <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }} colors={gradients.buttongradient} style={style.iconOuterView}>
                        <Image style={{ height: '50%', width: '50%' }} resizeMode={'contain'} source={icons.otpIcon} />
                    </LinearGradient>
                    <View style={{ flex: 1 }}>
                        <Text style={style.certiName}>OTP</Text>
                    </View>
                    <Text style={style.timeText}>00:{seconds < 10 ? `0${seconds}` : seconds} sec</Text>
                </View>
                <View style={style.inputdotView}>
                    <TextInput
                    style={style.inputText}
                    placeholder={'Enter OTP'}
                    placeholderTextColor={colors.placeholderTextColor}
                    keyboardType={'number-pad'}
                    onChangeText={setOtp}
                    value={otp}
                    maxLength={6} />
                    <TouchableOpacity activeOpacity={0.8} style={style.copyView}>
                        <Image source={icons.copyIcon} style={style.copyimage} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <Block>
            <HeaderView />
                <KeyboardAwareScrollView style={style.container} extraScrollHeight={Platform.OS == 'ios' ? 40:0}>
            {/* <ScrollView style={style.container}> */}
                <View style={style.topView}>
                    <Text style={style.visualText}>Visual  ID</Text>
                    <View style={style.secondView}>
                        <Image source={icons.activeIcon} style={style.iconImage} />
                        <Text style={style.activeText}>Active / Verified</Text>
                    </View>
                </View>
                <View style={style.caraouselView}>
                    <Carousel
                        data={[1, 2]}
                        renderItem={_renderItem}
                        sliderWidth={screenWidth}
                        itemWidth={screenWidth - 52}
                    />
                </View>
                <SectionList
                    sections={CARDDATA[0].documentData[0].data}
                    style={{ flex: 1 }}
                    keyExtractor={(item, index) => item + index}
                    contentContainerStyle={style.listView}
                    renderItem={_renderDeviceView}
                    renderSectionHeader={({ section: { name } }) => {
                        return (
                            <View style={{ marginTop: 12 }}>
                                <Text style={style.authText}>Authentication Credentials</Text>
                            </View>
                        )
                    }}
                />
            {/* </ScrollView> */}
            </KeyboardAwareScrollView>
        </Block>
    )
}


export default ViewIDcard