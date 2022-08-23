import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { Image, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import SmallIcon from '../SmallIcon';
import * as Styles from './styles';

const NotificationCard = (props) => {
    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    const getIcon = (type) => {
        switch (type) {
            case 1:
                return icons.notificationMessage
            case 2:
                return icons.notificationdocId
            case 3:
                return icons.drawerprofile
            case 4:
                return icons.notificationAlert
            default:
                break;
        }
    }

    return (
        <View style={style.boxView}>
            <View style={style.titleView}>
                <Text numberOfLines={1} style={style.titleText}>{props.title}</Text>
            </View>
            <FlatList
                data={props?.data}
                contentContainerStyle={style.flatlistView}
                keyExtractor={(item, index) => `${props.title}-${index}`}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={style.seperatorLine}></View>
                    )
                }}
                renderItem={({ item, index }) => {
                    let paddingLeft = item.type == 2 ? 2 : 0
                    return (
                        <TouchableOpacity onPress={() => props.onClick()}>
                            <View style={style.singleView}>
                                <SmallIcon gradient={props.color} image={getIcon(item.type)} padding={paddingLeft} />
                                <View style={style.bodyView}>
                                    <View style={style.listtitleView}>
                                        <Text numberOfLines={1} style={style.listtitletext}>{t(item?.title)}</Text>
                                        <Text numberOfLines={1} style={style.timetext}>{item?.time}</Text>
                                    </View>
                                    <Text style={style.bodytext}>{item?.body}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )

}

export default NotificationCard;