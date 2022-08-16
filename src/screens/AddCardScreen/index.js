import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList, TextInput } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Block from '../../components/Block';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CreditCardView from '../../components/CreditCardView';
import TextInputMask from 'react-native-text-input-mask';
import { cardNumberChange } from '../../utils';
import MaskInput from 'react-native-mask-input';


const AddCardScreen = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [cardData, setCarddata] = useState({
        name: "",
        expirydate: "",
        cvv: "",
        number: ""
    })
    const [fomatText, setFormatText] = useState("")
    const [cvv, setCvv] = useState("")
    const textinput1 = useRef(null)
    const textinput2 = useRef(null)
    const textinput3 = useRef(null)





    const signleView = (title, key) => {
        return (
            <View>
                <Text style={style.blackTxt}>{title}</Text>
                <View style={style.boxView}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            onChangeText={(text) => {
                                setCarddata({
                                    ...cardData,
                                    [key]: text
                                })
                            }}
                            onSubmitEditing={() => {
                                textinput1.current.focus()
                            }}
                            returnKeyType={'next'}
                            placeholder={title}
                            blurOnSubmit={false}
                            placeholderTextColor={colors.placeholderTextColor}
                            value={cardData[key]}
                            style={style.inputText}
                        />
                    </View>
                </View>
            </View>
        )
    }
    const cardNumber = (title, key) => {
        return (
            <>
                <Text style={style.blackTxt}>{title}</Text>
                <View style={style.boxView}>
                    <View style={{ flex: 1 }}>
                        <TextInputMask
                            onChangeText={(formatted, extracted) => {
                                setFormatText(formatted),
                                    setCarddata({
                                        ...cardData,
                                        [key]: extracted
                                    })
                            }}
                            ref={textinput1}
                            mask={"[0000] [0000] [0000] [0000]"}
                            placeholder={title}
                            placeholderTextColor={colors.placeholderTextColor}
                            keyboardType={'numeric'}
                            value={fomatText}
                            style={style.inputText}
                            onSubmitEditing={() => {
                                textinput2.current.focus()
                            }}
                            returnKeyType={'next'}
                            blurOnSubmit={false}
                        />
                    </View>
                </View>
            </>
        )
    }

    const dateandCvvView = () => {
        return (
            <View style={style.rowView}>
                <View style={{ flex: 1, marginRight: 12 }}>
                    <Text style={style.blackTxt}>{t("addcardscreen.expirydate")}</Text>
                    <View style={style.boxView}>
                        <View style={{ flex: 1 }}>
                            <TextInputMask
                                onChangeText={(formatted, extracted) => {
                                    setCarddata({
                                        ...cardData,
                                        expirydate: formatted
                                    })
                                }}
                                mask={"[00]{/}[0000]"}
                                maxLength={7}
                                placeholder={t("addcardscreen.expirydate")}
                                placeholderTextColor={colors.placeholderTextColor}
                                keyboardType={'numeric'}
                                value={cardData.expirydate}
                                style={style.inputText}
                                ref={textinput2}
                                onSubmitEditing={() => {
                                    textinput3.current.focus()
                                }}
                                returnKeyType={'next'}
                                blurOnSubmit={false}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ width: '40%' }}>
                    <Text style={style.blackTxt}>{t("addcardscreen.cvv")}</Text>
                    <View style={style.boxView}>
                        <View style={{ flex: 1 }}>
                            <MaskInput
                                onChangeText={(formatted, extracted, obfuscated) => {
                                    setCarddata({
                                        ...cardData,
                                        cvv: extracted
                                    })
                                }}
                                mask={[[/\d/], [/\d/], [/\d/]]}
                                maxLength={3}
                                showObfuscatedValue={true}
                                placeholder={t("addcardscreen.cvv")}
                                placeholderTextColor={colors.placeholderTextColor}
                                keyboardType={'numeric'}
                                value={cardData.cvv}
                                style={style.inputText}
                                ref={textinput3}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const onAddClick=()=>{
        // props.onPress(cardData)
        props.navigation.goBack()
    }

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("addcardscreen.screenname")} />
            <View style={style.container}>
                <View style={style.cardView}>
                    <CreditCardView data={cardData} />
                </View>
                <ScrollView style={style.cardDetailsView} contentContainerStyle={style.containerView}>
                    {signleView(t("addcardscreen.cardholdername"), "name")}
                    {cardNumber(t("addcardscreen.cardnumbrer"), "number")}
                    {dateandCvvView()}
                    <View style={style.bottomView}>
                        <Button style={{}} isgradient={true} onClick={onAddClick} gradient={gradients.primary} name={t("addcardscreen.btnText")} />
                    </View>
                </ScrollView>
            </View>
        </Block>
    )
}

export default AddCardScreen