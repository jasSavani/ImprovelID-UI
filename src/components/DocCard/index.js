import React, { useEffect, useMemo, useState } from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

const DocCard = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    return (
        <TouchableOpacity onPress={()=> props?.onPress(props.data.id)} activeOpacity={0.9} style={style.cardView}>
            <View style={style.imageView}>
                <Image source={assets.dlimage} style={style.dlImage} />
            </View>
            <View style={style.bottomView}>
                <View style={style.activeBtnView}>
                    <Image style={style.activeIcon} source={icons.activeIcon} />
                    <Text style={style.activeText}>{t("common.active")}</Text>
                </View>
                <View style={style.activeBtnView}>
                    <Image style={style.activeIcon} source={icons.verificationIcon} />
                    <Text style={style.activeText}>{t("common.verified")}</Text>
                </View>
                <TouchableOpacity>
                    <LinearGradient colors={gradients.viewbtn} style={style.viewBtn}>
                        <Image style={style.eyeIcon} source={icons.eyeIcon} />
                        <Text style={style.viewText}>{t("common.view")}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>

        </TouchableOpacity>

    )
}

export default DocCard