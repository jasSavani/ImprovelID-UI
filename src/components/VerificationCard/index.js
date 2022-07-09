import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

const VerificationCard = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles

    return (
        <View style={styles.outerView}>
            <TouchableOpacity onPress={props.onClick} style={styles.cardView(theme)}>
                <Image style={styles.leftImage(theme)} source={props.leftIcon} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.docText(theme)}>{props?.docName}</Text>
                </View>
                <Image style={styles.rightImage} source={icons.verificationIcon} />
            </TouchableOpacity>
        </View>

    )
}

export default VerificationCard