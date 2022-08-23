import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Block from '../../components/Block';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SmallButton from '../../components/SmallButton';
import Card from '../../components/Card';
import { mocksData } from '../../constants';



const PaymentMethod = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [selectedCard, setSelectedCard] = useState("")




    const renderItem = useCallback(({ item, index }) => {
        let selectedValue = item.id == selectedCard
        return (
            <Card isCard={true} onCardPress={() => { setSelectedCard(item.id) }} isSelected={selectedValue} data={item} />
        )
    }, [selectedCard])

    const keyExtractor = useCallback((item, index) => "cards" + index.toString(), [])

    const renderItem2 = useCallback(({ item, index }) => {
        // let selectedValue = item.id == selectedCard
        return (
            <Card onCardPress={() => { }} isSelected={false} data={item} />
        )
    }, [])

    const keyExtractor2 = useCallback((item, index) => "other" + index.toString(), [])

    const onAddcardPress = () => {
        props.navigation.navigate("AddCardScreen")
    }

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("paymentmethodscreen.screenname")} />
            <ScrollView style={style.container}>
                <View style={style.titleView}>
                    <Text style={style.titleText}>{t("paymentmethodscreen.selectetype")}</Text>
                </View>
                <FlatList
                    data={mocksData.PAYMENTCARDS}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />
                <View style={style.bottomView}>
                    <SmallButton icon={icons.plusIcon} isgradient={false} onClick={() => { onAddcardPress() }} gradient={colors.primary} name={t("paymentmethodscreen.btnText")} style={style.btnView} />
                </View>
                <View style={style.titleView}>
                    <Text style={style.titleText}>{t("paymentmethodscreen.otherway")}</Text>
                </View>
                <FlatList
                    data={mocksData.OTHERCARDS}
                    keyExtractor={keyExtractor2}
                    renderItem={renderItem2}
                />
            </ScrollView>
        </Block>
    )
}

export default PaymentMethod