import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { cardNumberChange } from '../../utils';


const CreditCardView = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    const { data } = props

    return (
        <LinearGradient colors={gradients.primary} style={style.cardView}>
            <View style={style.imageView}>
                <Image style={style.iconView} source={icons.masterCardIcon} />
            </View>
            <View style={style.bodyView}>
                <Text style={style.cardNumbertext}>{cardNumberChange(data?.number)}</Text>
                <View style={style.secondView}>
                    <View style={style.flexView}>
                        <Text style={style.keyText}>{t("addcardscreen.expirydate")}</Text>
                        <Text numberOfLines={1} style={style.valueText}>{data?.expirydate}</Text>
                    </View>
                    <View style={style.flexView}>
                        <Text style={style.keyText}>{t("addcardscreen.cardholdername")}</Text>
                        <Text numberOfLines={1} style={style.valueText}>{data?.name}</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}
CreditCardView.propTypes = {
    data: PropTypes.any.isRequired,
}
export default CreditCardView