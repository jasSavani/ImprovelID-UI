import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import BackArrow from '../../components/backArrow'
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import { deviceBasedDynamicDimension } from '../../utils';
import { RNCamera } from 'react-native-camera';
import DocumentCamera from '../../components/DocumentCamera';
const BackCard = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme,cardData } = useData();
    const { t } = useTranslation();
    const { styles } = Styles
    const [isCamera, setIscamera] = useState(false)
    const [screndata, setScreenData] = useState({ title: "", subtitle: "", icon: "" })
    const [cameraInstruction, setCameraInstruction] = useState({ title: "", instruction: "", subinstruction: "" })
    const {type,uploadbackscreen,camerabackinstruction} = cardData

    const openCamera = () => {
        setIscamera(true)

    }
    const openFilemanager = () => {
        ImagePicker.openPicker({
            width: deviceBasedDynamicDimension(320, true, 1),
            height: deviceBasedDynamicDimension(230, true, 1),
            cropping: true,
        }).then(image => {
            let image_data = {
                type: image.mime,
                uri: image.path,
                name: image.path?.substring(image.path?.lastIndexOf('/') + 1)
            }
            props.navigation.navigate("Chekagain", { image: image_data })
        });
    }
    useEffect(() => {
        setScreenData(uploadbackscreen)
        setCameraInstruction(camerabackinstruction)
    }, [])


    return (
        <View style={styles.container}>
            <BackArrow {...props} />
            {/* <FlatList
                data={[1]}
                keyExtractor={(item, index) => index.toString()}
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1, }}
                renderItem={({ item, index }) => {
                    return ( */}
            <View style={{ flex: 1 }}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText(theme)}>{t(screndata.title)}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View style={type == 1 ? styles.imageView : styles.otherImage}>
                        <Image source={icons[screndata.icon]} style={{ height: '100%', width: '100%' }} resizeMode={'contain'} />
                    </View>
                    <Text style={styles.smallText(theme)}>{t(screndata.subtitle)}</Text>
                </View>
                <View style={styles.bottomView}>
                    <Button isgradient={false} onClick={() => { openFilemanager() }} gradient={colors.primary} icon={icons.uploadIcon} name={t("uploadscreen.upload")} />
                    <Button isgradient={true} onClick={() => { openCamera() }} gradient={gradients.primary} icon={icons.cameraIcon} name={t("uploadscreen.takephoto")} />
                </View>

            </View>
            {/* )
                }}
            /> */}
            {isCamera && <DocumentCamera isVisible={isCamera} texts={cameraInstruction} onCancel={() => { setIscamera(!isCamera) }} onPictureTaken={(image) => { setIscamera(!isCamera), props.navigation.navigate("Chekagain", { image: image }) }} />}

        </View>

    )
}

export default BackCard