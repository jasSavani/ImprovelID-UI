import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Image, TouchableOpacity, View, Text, Modal, StatusBar, FlatList } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import { BlurView } from "@react-native-community/blur";
import { deviceBasedDynamicDimension } from '../../utils';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Fontisto'
import { mocksData } from '../../constants';

const PopupCountrySelect = (props) => {

    const [code, setCode] = useState("")
    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const _cameraRef = useRef(null)
    const [isselected, setIsselected] = useState("")


    const renderItem = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity onPress={()=>{setIsselected(item)}} style={isselected == item ? styles.singleViewSelected(theme): styles.singleView(theme)}>
                <Text style={isselected == item ? styles.selectedtitleText(theme):styles.messageText(theme)}>{item}</Text>
            </TouchableOpacity>
        )
    }, [isselected])

    const keyExtractor = useCallback((item, index) => "user" + index.toString(), [])

    const onContinueClick = () => {
        if (isselected) {
            props.primaryBtn()
            return
        } else {
            alert("Please selecte authority")
        }
    }


    return (
        <Modal animationType='slide' presentationStyle='pageSheet' transparent={false} visible style={styles.containerView}>
            <View style={{ flex: 1 }}>
                <View style={styles.boxView(theme)}>
                    <TouchableOpacity onPress={props.onCancel} style={styles.crossView}>
                        <Icon name='close-a' size={deviceBasedDynamicDimension(20, false, 1)} color={colors.darkTextColor} />
                    </TouchableOpacity>
                    <Text style={styles.titleText(theme)}>{props?.title}</Text>
                    <View style={styles.centerView}>
                        <FlatList
                            contentContainerStyle={{ flexGrow: 1, }}
                            data={mocksData.AuthorityDATA}
                            keyExtractor={keyExtractor}
                            renderItem={renderItem}
                        />

                    </View>
                    {props.primaryBtnname && <View style={{ paddingHorizontal: deviceBasedDynamicDimension(8, true, 1), paddingTop: deviceBasedDynamicDimension(10, false, 1), paddingBottom: deviceBasedDynamicDimension(30, false, 1), marginHorizontal: deviceBasedDynamicDimension(10, true, 1) }}>
                        <Button style={{}} isgradient={true} onClick={onContinueClick} gradient={gradients.primary} name={props.primaryBtnname} />
                    </View>}
                </View>

            </View>

        </Modal>

    )
}

export default PopupCountrySelect