import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList, Keyboard } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Block from '../../components/Block';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SmallIcon from '../../components/SmallIcon';
import { FIDO2DATA } from '../../constants/mocksData';
import PopupMessage from '../../components/PopupMessage';
import LinearGradient from 'react-native-linear-gradient';
import ProgressbarView from '../../components/ProgressbarView';
const Home = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);


    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {
            setActivescreen("Home")
        });

        return unsubscribe;
    }, [])

    const BigCardView = () => {
        return (
            <View style={style.bigCard}>
                <View style={style.topCardView}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={gradients.primary} style={style.imaageView}>
                        <Image style={{ height: '50%', width: '50%' }} resizeMode={'contain'} source={icons.drawerprofile} />
                    </LinearGradient>
                    <Text style={style.cardTopttext}>{t("homescreen.overview")}</Text>
                </View>
                <ProgressbarView name={t("homescreen.profilecompletion")} value={'40'} color={gradients.orange} textColor={colors.orangeText} />
                <TouchableOpacity onPress={() => { onPressnavigate("Profile") }} style={style.topCardBottomView}>
                    <View>
                        <Text style={style.bottomText} >{t("homescreen.update")}</Text>
                    </View>
                    <Image style={style.rightArrow} source={icons.rightArrow} />
                </TouchableOpacity>

            </View>
        )
    }

    const SmallCardView = ({ icon, color, title, subtitle, navigation, btnName }) => {
        return (
            <View style={style.smallCard}>
                <View style={style.topCardView}>
                    <LinearGradient colors={color} style={style.imaageView}>
                        <Image style={{ height: '50%', width: '50%' }} resizeMode={'contain'} source={icon} />
                    </LinearGradient>
                </View>
                <Text style={style.cardtitlettext}>{title}</Text>
                <Text style={style.cardsubttext}>{subtitle}</Text>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity onPress={() => { onPressnavigate(navigation) }} style={style.topCardBottomView}>
                    <View>
                        <Text style={style.bottomText} >{btnName}</Text>
                    </View>
                    <Image style={style.rightArrow} source={icons.rightArrow} />
                </TouchableOpacity>

            </View>
        )
    }
    const DefaultAuthCard = () => {
        return (
            <View style={style.bigCard}>
                <View style={style.topCardView}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={gradients.green} style={style.imaageView}>
                        <Image style={{ height: '50%', width: '50%' }} resizeMode={'contain'} source={icons.autenticationIcn} />
                    </LinearGradient>
                    <Text style={style.cardTopttext}>{t("homescreen.defaultauth")}</Text>
                </View>
                <Text style={style.cardsubttext}>{t("homescreen.signinmethoid")} <Text style={style.valueText}>FIDO2</Text></Text>
                <Text style={style.cardsubttext}>{t("homescreen.devicename")} <Text style={style.valueText}>Sam's Iphone</Text></Text>
                <TouchableOpacity onPress={() => { onPressnavigate("FIDO2Regestration") }} style={style.topCardBottomView}>
                    <View>
                        <Text style={style.bottomText} >{t("homescreen.change")}</Text>
                    </View>
                    <Image style={style.rightArrow} source={icons.rightArrow} />
                </TouchableOpacity>

            </View>
        )
    }

    const NotificationCard = () => {
        return (
            <View style={style.bigCard}>
                <View style={[style.topCardView, { alignItems: 'flex-start' }]}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={gradients.orange} style={style.imaageView}>
                        <Image style={{ height: '50%', width: '50%' }} resizeMode={'contain'} source={icons.bellIcon} />
                    </LinearGradient>
                    <View style={{ flex: 1, justifyContent: 'center', marginTop: 5 }}>
                        <Text style={style.cardTopttext}>{t("homescreen.notification")}</Text>
                        <Text style={style.cardsubttext}>{t("homescreen.notetext")}</Text>

                        <TouchableOpacity onPress={() => { onPressnavigate("Notification") }} style={style.topCardBottomView}>
                            <View>
                                <Text style={style.bottomText} >{t("homescreen.view")}</Text>
                            </View>
                            <Image style={style.rightArrow} source={icons.rightArrow} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }

    const onPressnavigate = (nav) => {
        props.navigation.navigate(nav)
    }




    return (
        <Block>
            <Header
                leftIcon={icons.menuIcon}
                onleftClick={() => { Keyboard.dismiss(), props.navigation.openDrawer() }}
                screenName={t("screens.home")} />
            <ScrollView style={style.container} contentContainerStyle={style.listStyle}>
                <View style={style.toptextView}>
                    <Text style={style.welComeText}>{t("common.welcome")}, Sam Smith</Text>
                    <Text style={style.subText}>{t("homescreen.managetext")}</Text>
                </View>
                <BigCardView />
                <View style={style.rowView}>
                    <SmallCardView icon={icons.identityHome} color={gradients.darkblue} title={t("screens.identities")} subtitle={t("homescreen.viewidentity")} navigation={"Identity"} btnName={t("homescreen.view")} />
                    <SmallCardView icon={icons.drawerapplication} color={gradients.lightorange} title={t("screens.application")} subtitle={t("homescreen.viewsso")} navigation={"Application"} btnName={t("homescreen.update")} />
                </View>
                <DefaultAuthCard />
                <View style={style.rowView}>
                    <SmallCardView icon={icons.reportIconHome} color={gradients.reportBtn} title={t("homescreen.reports")} subtitle={t("homescreen.viewactivityreport")} navigation={"Reports"} btnName={t("homescreen.view")} />
                    <SmallCardView icon={icons.consentIcon} color={gradients.consentBtn} title={t("homescreen.consentcontrol")} subtitle={t("homescreen.consenttext")} navigation={""} btnName={t("homescreen.update")} />
                </View>
                <NotificationCard />
            </ScrollView>
        </Block>
    )
}

export default Home