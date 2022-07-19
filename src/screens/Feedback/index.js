import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TextInput, KeyboardAvoidingView, Keyboard, Touchable, TouchableOpacity,Platform } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Feedback = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(1);


    const ratings = ['1', '2', '3', '4', '5']
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {
            setActivescreen("Feedback")
        });

        return unsubscribe;
    }, [])

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const _renderfeedbackBox = () => {
        return (
            <View style={style.inputView}>
                <View style={style.feedbackBox}>
                <TextInput
                    placeholder='Your Feedback (optional)'
                    value={feedback}
                    onChangeText={setFeedback}
                    multiline
                    placeholderTextColor={colors.placeholderTextColor}
                    style={style.inputText}
                />
                </View>
            </View>
        )
    }

    const onpressRating = (ratingnumber) => {
        setRating(ratingnumber)
    }

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("screens.feedback")} />
            <KeyboardAwareScrollView  style={style.container} enableOnAndroid extraScrollHeight={Platform.OS == 'ios' ? 20:0} >
                {/* <ScrollView style={style.container} contentContainerStyle={{ flexGrow: 1 }} > */}
                <View style={{ flex: 1, }}>
                    <Text style={style.text1}>Give your Feedback</Text>
                    <Text style={style.text2}>How do you feel about the support you received from us?</Text>
                    <View style={style.ratingView}>
                        {ratings.map((i) => {
                            let _rating = rating >= i
                            return (
                                <TouchableOpacity onPress={() => onpressRating(i)}><Image source={_rating ? icons.ratingIcon : icons.noratingIcon} style={{ height: 30, width: 30, marginHorizontal: 4 }} resizeMode={'contain'} /></TouchableOpacity>
                            )
                        })}
                    </View>
                    <Text style={style.text3}>Please add any comments and suggestions on anything that how can be improved?</Text>
                    {_renderfeedbackBox()}
                </View>
                {/* </ScrollView> */}
            </KeyboardAwareScrollView>
            <View style={style.bottomView}>
                <Button isgradient={true} onClick={() => { }} gradient={gradients.primary} name={t("feedbackscreen.submit")} />
            </View>
        </Block>
    )
}

export default Feedback