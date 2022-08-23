import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, SectionList, FlatList, TextInput } from 'react-native';
import { useData, useTheme, useTranslation } from '../../context';
import * as Styles from './styles';
import Block from '../../components/Block';
import Header from '../../components/Header';
import { mocksData } from '../../constants';
import ReportSmallCard from '../../components/ReportSmallCard';
import ReviewCard from '../../components/ReviewCard';
import SingleReviewCard from '../../components/SingleReviewCard';



const Reports = (props) => {

    const { assets, colors, gradients, icons } = useTheme();
    const { isDark, theme, setTheme, setActivescreen, setnotificationCount } = useData();
    const { t, translate } = useTranslation();
    const { styles } = Styles
    const style = useMemo(() => styles(theme), [theme]);

    const renderItem = useCallback(({ item, index }) => {
        return (
            <ReportSmallCard data={item} onClick={()=>{alert("click")}} />
        )
    }, [])

    const keyExtractor = useCallback((item, index) => "report" + index.toString(), [])

    const renderItem2 = useCallback(({ item, index }) => {
        return (
            <SingleReviewCard data={item} />
        )
    }, [])

    const keyExtractor2 = useCallback((item, index) => "review" + index.toString(), [])

    return (
        <Block>
            <Header
                leftIcon={icons.backArrow}
                onleftClick={() => { props.navigation.goBack() }}
                screenName={t("reports.screenname")} />
            <ScrollView style={style.container}>
                <View>
                    <FlatList
                        data={mocksData.REPORTDATA}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        numColumns={2}
                    />
                </View>
                <ReviewCard onViewallPress={()=>{alert('View all Press')}} />
                <FlatList
                    data={mocksData.REVIEWDATA}
                    contentContainerStyle={style.reviewView}
                    renderItem={renderItem2}
                    keyExtractor={keyExtractor2}
                />

            </ScrollView>
        </Block>
    )
}

export default Reports