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
const UploadpageScreen = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, cardData } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const [isCamera, setIscamera] = useState(false)
    const [screndata, setScreenData] = useState({ title: "", subtitle: "", icon: "" })
    const [cameraInstruction, setCameraInstruction] = useState({ title: "", instruction: "", subinstruction: "" })
    const { type, uploadscreen, camerainstruction } = cardData


    const openCamera = () => {
        // ImagePicker.openCamera({
        //     width: deviceBasedDynamicDimension(333,true,1),
        //     height: deviceBasedDynamicDimension(236,true,1),
        //     cropping: true,
        //   }).then(image => {
        //     console.log(image);
        //   });
        setIscamera(true)


    }
    const openFilemanager = () => {
        ImagePicker.openPicker({
            cropping: true,
            compressImageQuality: 1,
            freeStyleCropEnabled: true,
            width: deviceBasedDynamicDimension(1536, true, 1),
            height: deviceBasedDynamicDimension(1024, true, 1),
        }).then(image => {
            let image_data = {
                type: image.mime,
                uri: image.path,
                name: image.path?.substring(image.path?.lastIndexOf('/') + 1)
            }
            props.navigation.navigate("Checkreadiability", { image: image_data })
        });
    }
    useEffect(() => {
        setScreenData(uploadscreen)
        setCameraInstruction(camerainstruction)
    }, [])

    const openCroper = (imagedata) => {
        setIscamera(!isCamera),
            ImagePicker.openCropper({
                path: imagedata.uri,
                compressImageQuality: 1,
                freeStyleCropEnabled: true,
                width: deviceBasedDynamicDimension(1536, true, 1),
                height: deviceBasedDynamicDimension(1024, true, 1),
            }).then(image => {
                let image_data = {
                    type: image.mime,
                    uri: image.path,
                    name: image.path?.substring(image.path?.lastIndexOf('/') + 1)
                }
                props.navigation.navigate("Checkreadiability", { image: image_data })

            });
    }


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
            {isCamera && <DocumentCamera isVisible={isCamera} texts={cameraInstruction} onCancel={() => { setIscamera(!isCamera) }} onPictureTaken={(image) => { openCroper(image) }} />}

        </View>

    )
}

export default UploadpageScreen