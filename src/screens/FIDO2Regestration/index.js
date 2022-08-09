import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Block from '../../components/Block';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SmallIcon from '../../components/SmallIcon';
import { FIDO2DATA } from '../../constants/mocksData';
const FIDO2Regestration = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    const renderItem = useCallback(({ item, index }) => {
        return (
            <View key={index} style={style.boxView}>
                <View style={style.imageOuterview}>
                    <SmallIcon gradient={gradients.buttongradient} image={icons[item.icon]} height={'70%'} width={'55%'} />
                </View>
                <View style={style.bodyView}>
                    <Text style={style.keyText}>{t(item.title)}</Text>
                    <Text style={style.valueText}>{item.subtitle}</Text>
                </View>
            </View>
        )
    }, [])

    const keyExtractor = useCallback((item, index) => "fido2" + index.toString(), [])

    
    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("fido2screen.screenname")} />
            <View style={style.container}>
                <View style={style.toptextView}>
                    <Text style={style.titleText}>{t("fido2screen.authcredential")}</Text>
                </View>
                <FlatList
                    style={{ flex: 1, }}
                    contentContainerStyle={style.flatlistView}
                    data={FIDO2DATA}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />
                <View style={style.bottomView}>
                    <Button isgradient={true} onClick={() => { }} gradient={gradients.primary} name={t("fido2screen.register")} />
                </View>
            </View>
        </Block>
    )
}

export default FIDO2Regestration