import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Touchable, TouchableOpacity } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import { USERDETAILS } from '../../constants/mocksData';
const Detailspage = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);


    const _renderTopView = () => {
        return (
            <View style={style.topview}>
                <Image source={assets.profileimage} resizeMode={'cover'} style={style.imageView} />
                <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                    <Text style={style.nameText}>Robert Alberto Johnson</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={style.lightText}>{t("detailsscreen.status")}:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[style.activeText, { color: colors.activetext }]}>{t("common.active")}</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={style.lightText}>{t("detailsscreen.consent")}:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[style.activeText, { color: colors.activetext }]}>{t("common.verified")}</Text>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("detailsscreen.screenname")} />
            <View style={style.container}>
                <View style={style.mainView}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        {_renderTopView()}
                        <View style={{ height: 1, backgroundColor: colors.borderColor, marginBottom: 17 }}></View>
                        {Object.entries(USERDETAILS).map(([key, value], index) => {
                            return (
                                <View style={style.singlebox}>
                                    <Text style={style.keyText}>{t(key)}</Text>
                                    <Text style={style.valueText}>{value}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </Block>
    )
}

export default Detailspage