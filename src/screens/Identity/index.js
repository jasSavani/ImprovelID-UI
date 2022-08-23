import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { CARDDATA, DEVICEDATA } from '../../constants/mocksData';
import DocCard from '../../components/DocCard';
const Identity = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount,setSelectedIddata } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [selctedtype, setSelectedtype] = useState(1)

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {
            setActivescreen("Identity")
        });

        return unsubscribe;
    }, [])

    const SingleView = ({ item }) => {
        const { icon, id, name, data } = item
        let selected = id == selctedtype
        return (
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedtype(id)}>
                    <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }} colors={selected ? gradients.buttongradient : gradients.buttongradientoff} style={style.iconContainer}>
                        <Image source={icons[icon]} style={style.iconView} />
                    </LinearGradient>
                </TouchableOpacity>
                <Text numberOfLines={1} adjustsFontSizeToFit style={[style.titleText, { color: selected ? colors.identityselectedtabtext : colors.identitytabtext }]}>{t(name)}</Text>
            </View>
        )
    }

    const _renderDeviceView = ({ item, index }) => {
        return (
            <DocCard data={item} onPress={onCardClick} />
        )
    }

    const onCardClick = (data) => {
        setSelectedIddata([data]),
        props.navigation.navigate("ViewIDcard")
    }

    return (
        <Block>
            <Header
                leftIcon={icons.menuIcon}
                rightIcon={icons.bellIcon}
                onleftClick={() => { props.navigation.openDrawer() }}
                onRightClick={() => { props.navigation.navigate("Notification")}}
                isRefreshbtn
                onRefreshClick={()=>{}}
                onPlusClick={()=>{props.navigation.navigate("QRScan")}}
                screenName={t("screens.myidentities")} />
            <View style={style.container}>
                <View style={style.topView}>
                    {CARDDATA.map((item, index) => {
                        return <SingleView item={item} />
                    })}
                </View>
                <SectionList
                    sections={CARDDATA[selctedtype - 1].documentData}
                    extraData={CARDDATA[selctedtype - 1].documentData}
                    style={{ flex: 1, paddingVertical: deviceBasedDynamicDimension(6, false, 1) }}
                    keyExtractor={(item, index) => item + index}
                    contentContainerStyle={style.listView}
                    renderItem={_renderDeviceView}
                    renderSectionHeader={({ section: { name } }) => null}
                />
            </View>


        </Block>
    )
}

export default Identity