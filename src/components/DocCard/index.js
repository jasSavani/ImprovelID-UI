import React, { useEffect, useMemo, useState } from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import { getImageRatio, getstatus, getstatusIcon, getverifiedStatus, getverifiedStatusIcon } from '../../utils';
import * as Styles from './styles';

const DocCard = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);
    let ratioImage = getImageRatio(assets[props?.data?.frontimage], "local")

    
    return (
        <TouchableOpacity onPress={() => props?.onPress(props.data)} activeOpacity={0.9} style={style.cardView}>
            <View style={style.imageView}>
                <Image source={assets[props?.data?.frontimage]} style={style.dlImage(ratioImage)} />
            </View>
            <View style={style.bottomView}>
                <View style={style.activeBtnView}>
                    <Image style={style.activeIcon} source={icons[getstatusIcon(props?.data?.activestatus)]} />
                    <View style={{ flex: 1 }}>
                        <Text  adjustsFontSizeToFit style={style.activeText}>{t(getstatus(props?.data?.activestatus))}</Text>
                    </View>
                </View>
                <View style={style.activeBtnView}>
                    <Image style={style.activeIcon} source={icons[getverifiedStatusIcon(props?.data?.verifystatus)]} />
                    <View style={{ flex: 1 }}>
                        <Text  adjustsFontSizeToFit style={style.activeText}>{t(getverifiedStatus(props?.data?.verifystatus))}</Text>
                    </View>
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