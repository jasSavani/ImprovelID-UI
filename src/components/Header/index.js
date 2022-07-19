import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

const Header = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, notificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={gradients.primary}>
        <View style={styles.headerView}>
            <TouchableOpacity onPress={props.onleftClick} style={styles.leftBtn}>
                <Image source={props.leftIcon} style={{ height: '100%', width: '100%', tintColor: colors.whiteText }} resizeMode={'contain'} />
            </TouchableOpacity>
            <View style={styles.textView}>
                <Text style={styles.titleText(theme)}>{props?.screenName}</Text>
            </View>
            {props.rightIcon && <TouchableOpacity onPress={props.onRightClick} style={styles.rightBtn}>
                <Image source={props.rightIcon} style={[styles.bellImage, { tintColor: colors.whiteText }]} resizeMode={'contain'} />
                {notificationCount ? <View style={styles.notiView(theme)}>
                    <Text style={styles.notificationtext(theme)}>{notificationCount}</Text>
                </View> : null}
            </TouchableOpacity>}
        </View>
        </LinearGradient>

    )
}

export default Header