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


const Useraggrement = (props) => {

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
                    <Text style={style.subText}>{t(item.text1)}{`\n`}</Text>
                </View>
            </View>
        )
    }, [])

    const keyExtractor = useCallback((item, index) => "user" + index.toString(), [])

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("useraggrement.screenname")} />
            <View style={style.container}>
                <ScrollView style={style.cardDetailsView} contentContainerStyle={style.containerView}>
                    <Text style={style.titleText}>{t("useraggrement.title")}</Text>
                    <View style={style.smallView}></View>
                    <Text style={style.headText}>{t("useraggrement.introduction")}</Text>
                    <Text style={style.subText}>{t("useraggrement.instruction1")}{`\n`}</Text>
                    <Text style={style.headText}>{t("useraggrement.defination")}</Text>
                    <FlatList
                        data={mocksData.USERAGGREMENT}
                        style={style.flatlistView}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                    />
                </ScrollView>
            </View>
        </Block>
    )
}

export default Useraggrement