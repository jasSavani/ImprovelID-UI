import React, { useEffect, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import { RNCamera, FaceDetector } from 'react-native-camera';
import Button from '../../components/Button';
import BackArrow from '../../components/backArrow';

const Checkreadiability = (props) => {

    const { assets, colors, gradients,icons } = useTheme();
    const { isDark, theme, setTheme,cardData } = useData();
    const { t, translate } = useTranslation();
    const [screndata, setScreenData] = useState({ title: "", subtitle: "", })
    const { styles } = Styles
    const {type,uploadscreen,camerainstruction,readScreen} = cardData

    useEffect(()=>{
       setScreenData(readScreen)
    },[])

    const onClickConfirm=()=>{
        if(type == 1){
            props.navigation.navigate("TakeSelfie")
        }
        if(type == 2){
            props.navigation.navigate("BackCard")
        }
        if(type == 3){
            // props.navigation.navigate("TakeSelfie")
        }
    }



    return (
        <View style={styles.container}>
            <BackArrow {...props} />
            <View style={{ flex: 1 }}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText(theme)}>{t(screndata.title)}</Text>
                    <Text style={styles.smallText(theme)}>{t(screndata.subtitle)}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center',  }}>
                    {type == 3 ? 
                    <View style={styles.outerbigView}>
                     <View style={ styles.bigImage}>
                     <Image source={{uri:props.route?.params?.image?.uri}} style={{ height: '100%', width: '100%' }} resizeMode={'cover'} />
                     </View>
                     </View>
                    :
                    <View style={styles.outerView}>
                    <View style={ styles.imageView}>
                        <Image source={{uri:props.route?.params?.image?.uri}} style={{ height: '100%', width: '100%' }} resizeMode={'contain'} />
                    </View>
                    </View>}
                </View>
                <View style={styles.bottomView}>
                    <Button isgradient={false} onClick={() => { props.navigation.goBack()}} gradient={colors.primary}  name={t("readscreen.redo")} />
                    <Button isgradient={true} onClick={() => { onClickConfirm()}} gradient={gradients.primary}  name={t("readscreen.confirm")} />
                </View>
            </View>

        </View>
    )
}

export default Checkreadiability