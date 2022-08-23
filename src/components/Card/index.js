import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { cardNumberChange } from '../../utils';


const Card = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    const { data,isCard,onCardPress } = props

    return (
        <TouchableOpacity onPress={onCardPress} style={props.isSelected ? style.selectedcardView : style.cardView}>
            <View style={style.imageView}>
                <Image style={style.iconView} source={icons[data.icon]} />
            </View>
            <View style={style.centerView}>
                {isCard ? <Text numberOfLines={1} style={style.cardText}>{cardNumberChange(data.title)}</Text>:
                <Text numberOfLines={1} style={style.cardText}>{t(data.title)}</Text>
                }
                
            </View>
            <View style={style.rightView}>
                <Image style={style.iconView} source={icons.menudotIcon} />
            </View>
        </TouchableOpacity>
    )
}
Card.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    data: PropTypes.any.isRequired,
    onCardPress: PropTypes.func
}
export default Card