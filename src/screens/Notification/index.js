import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Touchable, TouchableOpacity, Platform, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Block from '../../components/Block';
import Header from '../../components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { READNOTIFICATION, UNREADNOTIFICATION } from '../../constants/mocksData';
import SmallIcon from '../../components/SmallIcon';
import NotificationCard from '../../components/NotificationCard';

const Notification = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate, locale } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("screens.screenname")} />
            <KeyboardAwareScrollView style={style.container} enableOnAndroid extraScrollHeight={Platform.OS == 'ios' ? 20 : 0} >
                {/* <ScrollView style={style.container} contentContainerStyle={{ flexGrow: 1 }} > */}
                <View style={style.listView}>
                    <NotificationCard
                        title={`${t("notificationscreen.unread")} ${t("notificationscreen.screenname")}`}
                        onClick={() => { alert("click") }}
                        data={UNREADNOTIFICATION}
                        color={gradients.buttongradient} />
                    <NotificationCard
                        title={`${t("notificationscreen.read")} ${t("notificationscreen.screenname")}`}
                        onClick={() => { alert("click")}}
                        data={READNOTIFICATION}
                        color={gradients.readgradient} />
                </View>
                {/* </ScrollView> */}
            </KeyboardAwareScrollView>
        </Block>
    )
}

export default Notification