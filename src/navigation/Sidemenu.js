import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Linking, StyleSheet} from 'react-native';

import {
  useIsDrawerOpen,
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Screens from './Screens';

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = () => {
  const isDrawerOpen = useIsDrawerOpen();
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{scale: scale}],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen ? 1 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animatedStyle,
        {
          flex: 1,
          overflow: 'hidden',
          borderColor: "black",
          borderWidth: isDrawerOpen ? 1 : 0,
        },
      ])}>
      {/*  */}
      <Screens />
    </Animated.View>
  );
};

/* custom drawer menu */
const DrawerContent = (
  props,
) => {
  const {navigation} = props;
  const [active, setActive] = useState('Home');

  const handleNavigation = useCallback(
    (to) => {
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive],
  );

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  // screen list for Drawer menu

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled
      removeClippedSubviews
      renderToHardwareTextureAndroid
      contentContainerStyle={{paddingBottom: 10}}>

    </DrawerContentScrollView>
  );
};
const Sidemenu = () => {
  
    return (
        <Drawer.Navigator
          drawerType="slide"
          overlayColor="transparent"
          sceneContainerStyle={{backgroundColor: 'transparent'}}
          drawerContent={(props) => <DrawerContent {...props} />}
          drawerStyle={{
            flex: 1,
            width: '60%',
            borderRightWidth: 0,
            backgroundColor: 'transparent',
          }}>
          <Drawer.Screen name="Screens" component={ScreensStack} />
        </Drawer.Navigator>
    );
  };

  export default Sidemenu;