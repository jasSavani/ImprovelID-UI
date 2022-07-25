import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, FlatList, Keyboard } from 'react-native';
import CodeValidateBtn from '../../components/codeValidateBtn';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';

import { deviceBasedDynamicDimension } from '../../utils';
import Block from '../../components/Block';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import GridBox from '../../components/GridBox';
import { APPLICATIONDATA } from '../../constants/mocksData';
const Application = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, activescreen, setActivescreen } = useData();
    const { t, translate } = useTranslation();
    const [searchText, setSearchtext] = useState("")
    const { styles } = Styles

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', (e) => {
            setActivescreen("Application")
        });

        return unsubscribe;
    }, [])

    const filterItems = useMemo(
        () =>
            APPLICATIONDATA.filter((items) => {
                return items.searchname.toLowerCase().includes(searchText.toLowerCase());
            }),
        [searchText]
    );


    return (
        <Block>
            <Header
                leftIcon={icons.menuIcon}
                rightIcon={icons.bellIcon}
                onleftClick={() => { Keyboard.dismiss(), props.navigation.openDrawer() }}
                onRightClick={() => { }}
                screenName={t("screens.application")} />

            <View style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
                <View style={{ paddingVertical: 17, paddingHorizontal: 19 }}>
                    <SearchBar placeholder={'Search your app'} value={searchText} onChangeText={(text) => { setSearchtext(text) }} />
                </View>
                <FlatList
                    data={filterItems}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ paddingHorizontal: deviceBasedDynamicDimension(10, true, 1) }}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                        return (
                            <GridBox data={item} onMenuClick={(index) => { console.log(index); }} onBoxClick={() => { }} />
                        )
                    }}
                />
            </View>


        </Block>
    )
}

export default Application