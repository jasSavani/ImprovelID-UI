import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList, TextInput } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Block from '../../components/Block';
import Header from '../../components/Header';
import Button from '../../components/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { mocksData } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';


const AboutUs = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    const renderItem = useCallback(({ item, index }) => {
        return (
            <View style={style.singleView}>
                <View style={style.leftView}></View>
                <View style={style.rightView}>
                    <Text style={style.titleText}>{t(item.text1)}</Text>
                    <Text style={style.subText}>{t(item.text2)}</Text>
                </View>
            </View>
        )
    }, [])

    const keyExtractor = useCallback((item, index) => "aboutus" + index.toString(), [])

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("aboutus.screenname")} />
            <View style={style.container}>
                <ScrollView style={style.cardDetailsView} contentContainerStyle={style.containerView}>
                    <LinearGradient colors={gradients.primary} style={style.logoView}>
                        <Image style={style.imagView} source={assets.impovedLogo} />
                    </LinearGradient>
                    <FlatList
                        data={mocksData.ABOUTUSDATA}
                        style={style.flatlistView}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                    />
                </ScrollView>
            </View>
        </Block>
    )
}

export default AboutUs