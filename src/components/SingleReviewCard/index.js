import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import PropTypes from 'prop-types';


const SingleReviewCard = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    const { data } = props

    const textColor = (value) => {
        switch (value) {
            case "Positive":
                return colors.activetext
            case "Neutral":
                return colors.orangeText
            case "Negative":
                return colors.redText
            default:
                return colors.darkTextColor;
        }
    }

    const rowView = (key, value) => {
        return (
            <View style={style.rowView}>
                <View style={style.keyView}>
                    <Text style={style.keyText}>{key}:</Text>
                </View>
                <Text style={[style.keyText, { color: textColor(value) }]}>{value}</Text>
            </View>
        )
    }

    return (
        <View style={style.cardView}>
            <View style={style.topView}>
                <Image style={style.imageView} source={assets[data?.profileimage]} />
                <View style={style.textView}>
                    <Text style={style.nameText}>{data?.name}</Text>
                    <Text style={style.roleText}>{data?.role}</Text>
                </View>
            </View>
            <View style={style.centerView}>
                {rowView(t("reports.review"), data?.reviewtype)}
                {rowView(t("reports.email"), data?.email)}
                <View style={style.rowView}>
                    <View style={[style.topView, { flex: 1 }]}>
                        <View style={style.keyView}>
                            <Text style={style.keyText}>{t("reports.employed")}:</Text>
                        </View>
                        <Text style={[style.keyText, { color: textColor() }]}>{data?.employed}</Text>
                    </View>
                    <View style={style.topView}>
                        <View>
                            <Text style={style.keyText}>{t("reports.id")}:   </Text>
                        </View>
                        <Text style={[style.keyText, { color: textColor() }]}>{data?.id}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}
SingleReviewCard.propTypes = {

}
export default SingleReviewCard