import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, SectionList, TouchableOpacity } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { DEVICEDATA } from '../../constants/mocksData';


const ManageDevice = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {
            setActivescreen("Home")
        });

        return unsubscribe;
    }, [])

    const _renderDeviceView = ({ item, index }) => {
        const { type, placeanddate, name } = item
        const colr = (type == 'android') ? gradients.green : (type == 'ios') ? gradients.primary : gradients.lightblue
        const icon = (type == 'android') ? icons.androidIcon : (type == 'ios') ? icons.iphoneIcon : icons.laptopIcon

        return (
            <TouchableOpacity activeOpacity={0.8} style={styles.deviceOuterView}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={colr} style={styles.deviceimageView}>
                    <Image style={{ height: '70%', width: '70%' }} resizeMode={'contain'} source={icon} />
                </LinearGradient>
                <View style={styles.centerView}>
                    <Text numberOfLines={1} style={styles.nameText(theme)}>{name}</Text>
                    <Text numberOfLines={1} style={styles.subnametext(theme)}>{placeanddate}</Text>
                </View>
                <Image style={styles.rightArrow} resizeMode={'contain'} source={icons.rightArrow} />
            </TouchableOpacity>
        )
    }

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.openDrawer() }}
                screenName={t("screens.managedevice")} />

            <View style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
                <SectionList
                    sections={DEVICEDATA}
                    keyExtractor={(item, index) => item + index}
                    contentContainerStyle={styles.containerStyle}
                    renderItem={_renderDeviceView}
                    renderSectionHeader={({ section: { title } }) => null}
                />
            </View>


        </Block>
    )
}

export default ManageDevice