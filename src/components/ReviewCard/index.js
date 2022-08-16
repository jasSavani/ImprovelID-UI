import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { cardNumberChange } from '../../utils';
import SmallIcon from '../SmallIcon';
import ProgressbarView from '../ProgressbarView';
import Button from '../Button';


const ReviewCard = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    return (
        <View style={style.cardView}>
            <View style={style.topView}>
                <View style={style.leftView}></View>
                <View style={style.styleTextView}>
                    <Text style={style.reviewText}>{t("reports.reviews")}</Text>
                </View>
            </View>
            <View style={style.centerView}>
                <ProgressbarView name={t("reports.positivereview")} value={'80'} color={gradients.green} />
                <ProgressbarView name={t("reports.neutralreview")} value={'20'} color={gradients.orange} />
                <ProgressbarView name={t("reports.negativereview")} value={'10'} color={gradients.red} />
            </View>
            <Text style={style.normalText}>{t("reports.morethan")}<Text style={style.boldText}>15000</Text>{t("reports.centerText")}<Text style={style.boldText}>15000</Text>{t("reports.reviewText")}</Text>
            <Button style={{}} custumStyle={style.btnView} isgradient gradient={gradients.primary} name={t("reports.viewallreview")} onClick={props.onViewallPress} />

        </View>
    )
}
ReviewCard.propTypes = {

}
export default ReviewCard