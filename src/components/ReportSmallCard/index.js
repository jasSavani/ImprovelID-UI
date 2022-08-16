import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { cardNumberChange } from '../../utils';
import SmallIcon from '../SmallIcon';


const ReportSmallCard = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    return (
        <View style={style.cardView}>
            <View style={style.rowView}>
                <SmallIcon
                    image={icons[props.data?.icon]}
                    gradient={gradients[props?.data?.color]} />
                <View style={style.centerView}>
                    <Text style={style.nameText}>{props.data?.value}</Text>
                </View>
                <TouchableOpacity onPress={props.onClick} style={style.rightView}>
                    <Image style={style.iconView} source={icons.report_menu} />
                </TouchableOpacity>
            </View>
            <View style={style.bottomRowView}>
                <Text style={style.keyText}>{t(props?.data?.name)}</Text>
                <Text style={style.percetntText}>{props.data?.percentage}%</Text>
            </View>

        </View>
    )
}
ReportSmallCard.propTypes = {
    onClick:PropTypes.func

}
export default ReportSmallCard