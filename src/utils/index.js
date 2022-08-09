import React from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Dimensions, Platform, PixelRatio } from 'react-native';


export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

//Artboard Dimension 
// let artBoardHeightOrg = 375;
// let artBoardWidthOrg = 667;

let artBoardHeightOrg = 812;
let artBoardWidthOrg = 375;
//Re calculated Artboard Dimension 
let artBoardWidth = isSameRatio() ? artBoardWidthOrg : screenWidth;
let artBoardHeight = isSameRatio() ? artBoardHeightOrg : screenHeight;
// To check if Artboard and Device screen has same ratio 
function isSameRatio() {
    return artBoardWidthOrg / artBoardHeightOrg < 1 && screenWidth / screenHeight < 1
}

//Top or Bottom nav spaces or any extra space occupied by os e.g Status bar, Notch 
let extraSpace = 0;

export function deviceBasedDynamicDimension(originalDimen, compareWithWidth, resizeFactor) {
    if (originalDimen != null) {
        if (resizeFactor != null) {
            originalDimen *= resizeFactor;
        }
        const compareArtBoardDimenValue = compareWithWidth ? artBoardWidth : artBoardHeight;
        const artBoardScreenDimenRatio = (originalDimen * 100) / compareArtBoardDimenValue;
        let compareCurrentScreenDimenValue = compareWithWidth ? screenWidth : screenHeight - extraSpace;
        if (Platform.OS === 'web') {
            return (responsiveWidth(originalDimen / compareCurrentScreenDimenValue) * 100);
        }
        return PixelRatio.roundToNearestPixel((artBoardScreenDimenRatio * compareCurrentScreenDimenValue) / 100,);
    }
    return null;
}
export const calcWidth = x => PixelRatio.roundToNearestPixel((screenWidth * x) / 100)
export const calcHeight = x => PixelRatio.roundToNearestPixel((screenHeight * x) / 100)

export const cardNumberChange = (number) => {
    if (number && number != "" & number.trim().length != 0) {
        // return number.replace(/\d{4}(?=\d{4})/g, "**** ")
        let arr = Object.values(number);
        let newValue = arr.splice(0, 12).fill('*').join('') + arr.splice(-4).join('')
        let formatText=newValue.match(/.{1,4}/g);
        return formatText.join(' ');
    }
    return number
}