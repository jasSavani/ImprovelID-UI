import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Button, Image, Linking, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  useIsDrawerOpen,
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  useDrawerStatus,
} from '@react-navigation/drawer';

import Screens from './Screens';
import Block from '../components/Block';
import Styles from './styles';
import Avatar from '../components/Avatar';
import { useData, useTheme, useTranslation } from '../context';
import LinearGradient from 'react-native-linear-gradient';

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = (props) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.70],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{ scale: scale }],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen ? 1 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar barStyle={'light-content'} />
      {isDrawerOpen && <Animated.View style={[{ position: 'absolute', backgroundColor: 'rgba(255,255,255,0.18)', height: '65%', width: '50%', marginLeft: 0, borderRadius: 26 }]}></Animated.View>}
      <Animated.View
        style={StyleSheet.flatten([
          animatedStyle,
          {
            flex: 1,
            overflow: 'hidden',
            borderRadius: isDrawerOpen ? 22 : 0,
            marginLeft: isDrawerOpen ? -40 : 0,
          },
        ])}>

        {/*  */}
        <Screens />
      </Animated.View>

    </View>
  );
};

/* custom drawer menu */
const DrawerContent = (
  props,
) => {
  const { navigation } = props;
  const { styles } = Styles
  const { assets, colors, gradients, icons } = useTheme();
  const { isDark, theme, setTheme, cardData,activescreen,setActivescreen } = useData();

  const { t, translate } = useTranslation();

  const handleNavigation = useCallback(
    (to) => {
      console.log('backBehavior');
      setActivescreen(to)
      navigation.navigate(to);
    },
    [navigation, setActivescreen],
  );

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  const activeBox = (item, index, isActive) => {
    return (
      <TouchableOpacity onPress={() => { handleNavigation(item.to) }} style={styles.activeView}>
        {isActive && <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={gradients.activedrawer} style={{ height: '100%', width: '100%', position: 'absolute' }}></LinearGradient>}
        <View style={styles.view}>
          <View style={styles.iconView({ isActive, theme })}>
            <Image source={item.icon} style={styles.iconImage({ isActive, theme })} resizeMode={'contain'} />
          </View>
          <Text numberOfLines={1} style={styles.nameText({ isActive, theme })}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  // screen list for Drawer menu
  const screens = [
    { name: t('screens.home'), to: 'Home', icon: icons.drawerhome },
    { name: t('screens.application'), to: 'Application', icon: icons.drawerapplication },
    { name: t('screens.identities'), to: 'Identity', icon: icons.draweridentity },
    { name: t('screens.manageidentity'), to: 'ManageIdentity', icon: icons.drawermanageidentity },
    { name: t('screens.profile'), to: 'Profile', icon: icons.drawerprofile },
    { name: t('screens.account'), to: 'Account', icon: icons.draweraccount },
    { name: t('screens.feedback'), to: 'Feedback', icon: icons.drawerfeedback },
  ];
  return (
    // <DrawerContentScrollView
    //   {...props}
    //   scrollEnabled={false}
    //   removeClippedSubviews
    //   renderToHardwareTextureAndroid
    //   style={{flex:1}}
    //   contentContainerStyle={{ paddingBottom: 10,flexGrow:1}}>
    <View style={{ flex: 1 }}>
      <View style={styles.detailsView}>
        <Avatar height={70} image={assets.profileimage} />
        <Text numberOfLines={1} style={styles.userName(theme)}>Name</Text>
        <Text numberOfLines={1} style={styles.emailText(theme)}>Email</Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView >
          {screens.map((screen, index) => {
            const isActive = activescreen === screen.to;
            return (
              activeBox(screen, index, isActive)
            )
          })}
        </ScrollView>
      </View>
      <View style={styles.smallLogo}>
        <Text style={styles.poweredText({ textColor: '#F8CAFF' })}>Powered By</Text>
        <Image source={assets.impovedLogo} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
      </View>
    </View>
    // </DrawerContentScrollView>
  );
};
const Sidemenu = (props) => {
  return (
    <Block {...props}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          overlayColor: "transparent",
          swipeEnabled:false,
          headerShown: false,
          sceneContainerStyle: { backgroundColor: 'transparent' },
          drawerStyle: {
            flex: 1,
            width: '70%',
            borderRightWidth: 0,
            backgroundColor: 'transparent',
          }
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Screens" component={ScreensStack} />
      </Drawer.Navigator>
    </Block>
  );
};

export default Sidemenu;