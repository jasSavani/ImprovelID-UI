import React from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Dimensions, Platform, PixelRatio, Image } from 'react-native';
import { useTheme, useTranslation } from '../context';


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
        let formatText = newValue.match(/.{1,4}/g);
        return formatText.join(' ');
    }
    return number
}

export const getstatus = (type) => {
    switch (type) {
        case 1:
            return "common.active"
        case 2:
            return "common.revoked"
        case 3:
            return "common.suspended"
        default:
            break;
    }
}
export const getstatusColortext = (type) => {
    switch (type) {
        case 1:
            return "activetext"
        case 2:
            return "orangeText"
        case 3:
            return "redText"
        default:
            break;
    }
}
export const getstatusIcon = (type) => {
    switch (type) {
        case 1:
            return "activeIcon"
        case 2:
            return "revokedIcon"
        case 3:
            return "suspendedIcon"
        default:
            break;
    }
}
export const getverifiedStatus = (type) => {
    switch (type) {
        case 1:
            return "common.verified"
        case 2:
            return "common.unverified"
        default:
            break;
    }
}
export const getverifiedStatusColor = (type) => {
    switch (type) {
        case 1:
            return "activetext"
        case 2:
            return "textColor"
        default:
            break;
    }
}
export const getverifiedStatusIcon = (type) => {
    switch (type) {
        case 1:
            return "verificationIcon"
        case 2:
            return "unverificationIcon"
        default:
            break;
    }
}

export const getImageRatio = (uri, type) => {
    if (uri) {
        if (type == 'local') {
            const { width, height } = Image.resolveAssetSource(uri);
            let rationew = deviceBasedDynamicDimension(width, true, 1) / deviceBasedDynamicDimension(height, false, 1)
            if (rationew < 0.7) {
                return 0.7
            } else {
                return rationew
            }
        } else {
            Image.getSize(uri, (width, height) => {
                let rationew = deviceBasedDynamicDimension(width, true, 1) / deviceBasedDynamicDimension(height, false, 1)
                if (rationew < 0.7) {
                    return 0.7
                } else {
                    return rationew
                }
            })
        }
    } else {
        return 1.5
    }
}

export const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        var intlCode = (match[1] ? '+1 ' : '');
        return [intlCode, match[2], , ' ', match[3], ' ', match[4]].join('');
    }
    return null;
}

export const isEmpty = (value) =>{
    const { t, translate } = useTranslation();
    if(value && value.trim() != 0){
        return value
    }else{
        return t("common.notfilled")
    }
}
export const isEmptyColor = (value) =>{
    const { colors} = useTheme();
    if(value && value.trim() != 0){
        return colors.darkTextColor
    }else{
        return colors.borderColor
    }
}