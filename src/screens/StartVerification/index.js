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


const StartVerification = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("startverification.screenname")} />
            <View style={style.container}>
                <ScrollView style={style.cardDetailsView} contentContainerStyle={style.containerView}>
                    <Text style={style.titleText}>{t("startverification.title")}</Text>
                    <Text style={style.subtitleText}>{t("startverification.subtitle")}</Text>
                    <Text>{`\n`}</Text>
                    <View style={style.stepView}>
                        {mocksData.STEPDATA.map((item, index) => {
                            return (
                                <View style={style.singleStep}>
                                    <View style={style.leftView}>
                                        <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 1 }} locations={[0, 0.5]} colors={gradients[item.gradient]} style={style.roundView}>
                                            <Text style={style.numberText}>{index + 1}</Text>
                                        </LinearGradient>
                                        {(index + 1 != mocksData.STEPDATA.length) && <View style={style.lineView} />}
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={style.descText}>{t(item.name)}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                    <View style={style.bottomView}>
                        <Button style={{}} isgradient={true} onClick={() => { }} gradient={gradients.primary} name={t("startverification.btnText")} />
                    </View>
                </ScrollView>
            </View>
        </Block>
    )
}

export default StartVerification