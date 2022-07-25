import React, { useEffect } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import BackArrow from '../../components/backArrow'
import CardBlock from '../../components/CardBlock';
import { FlatList } from 'react-native-gesture-handler';
import { mocksData } from '../../constants';

const IdentityVerification = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setCardData } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const { VERIFCATIONCARD } = mocksData

    const onButtonClick = (item) => {
        setCardData(item), props.navigation.navigate("UploadpageScreen",)
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <BackArrow {...props} />
            <View style={{ flex: 1 }}>
                    <Image style={styles.bigImage} source={icons.identityCardIcon} />
                    <View style={styles.firstView}>
                        <Text style={styles.identityText(theme)}>{t("validationscreen.identityText")}</Text>
                        <Text style={styles.selectionText(theme)}>{t("validationscreen.selectionText")}</Text>
                    </View>
                    <FlatList
                        data={VERIFCATIONCARD}
                        style={{ flex: 1 }}
                        contentContainerStyle={{flexGrow:1}}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            const { name, asset, color, type } = item
                            return (
                                <CardBlock
                                    icon={<Image source={icons[asset]}
                                        style={type == 1 ? styles.passportimage : type == 2 ? styles.docImage : styles.certificateimage} />}
                                    docName={t(name)}
                                    gradient={gradients[color]}
                                    onClick={() => onButtonClick(item)} />
                            )
                        }}
                    />
                    <View style={styles.bottomView}>
                        <Text style={styles.selectionText(theme)}>{t("validationscreen.makesureText")}</Text>
                    </View>
            </View>
            {/* <FlatList
                data={[1]}
                scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item, index }) => {
                    return (
                        
                    )
                }}
            /> */}
        </View>

    )
}

export default IdentityVerification