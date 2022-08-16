import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        paddingTop: deviceBasedDynamicDimension(12, false, 1)
    },
    cardView: {
        paddingHorizontal: deviceBasedDynamicDimension(25, true, 1),
        marginVertical: deviceBasedDynamicDimension(12, false, 1),
        borderRadius: deviceBasedDynamicDimension(15, false, 1),
        backgroundColor: colors.white,
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        marginHorizontal: deviceBasedDynamicDimension(15, true, 1),
        paddingTop: deviceBasedDynamicDimension(15, false, 1),
        paddingBottom: deviceBasedDynamicDimension(11, false, 1)
    },
    blackTxt: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(18, false, 1),
        fontSize: deviceBasedDynamicDimension(13, false, 1),
        opacity: 1,
        color: colors.textColor,
    },
    boxView: {
        borderWidth: deviceBasedDynamicDimension(1, false, 1),
        borderColor: colors.borderColor,
        borderRadius: deviceBasedDynamicDimension(8, false, 1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: deviceBasedDynamicDimension(13, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(21, true, 1),
        marginTop: deviceBasedDynamicDimension(6, false, 1),
        maxHeight: deviceBasedDynamicDimension(46, false, 1)
    },
    inputText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding: 0,
    },
    oneView: {
        marginVertical: deviceBasedDynamicDimension(8, false, 1)
    },
    imageView: {
        height: deviceBasedDynamicDimension(24, false, 1),
        width: deviceBasedDynamicDimension(24, false, 1),
        borderRadius: deviceBasedDynamicDimension(24, false, 1),
        overflow: 'hidden',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    countryNametext: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingHorizontal: deviceBasedDynamicDimension(5, true, 1),
    },
    dropdownImage: {
        height: deviceBasedDynamicDimension(5, false, 1),
        width: deviceBasedDynamicDimension(9, true, 1),
        marginHorizontal: deviceBasedDynamicDimension(3, true, 1)
    },
    countryBox: {
        borderWidth: deviceBasedDynamicDimension(1, false, 1),
        borderColor: colors.borderColor,
        borderRadius: deviceBasedDynamicDimension(8, false, 1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: deviceBasedDynamicDimension(13, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(14, true, 1),
        marginTop: deviceBasedDynamicDimension(6, false, 1),
        maxHeight: deviceBasedDynamicDimension(46, false, 1)
    },
    codeView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: deviceBasedDynamicDimension(3, true, 1),
        borderRightWidth: deviceBasedDynamicDimension(1, false, 1),
        borderRightColor: colors.lightborderColor,
        marginRight: deviceBasedDynamicDimension(14, true, 1)
    },
    codeText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: "#464242",
        paddingLeft: deviceBasedDynamicDimension(6, true, 1)
    },
    dropdowntextView: {
        justifyContent: 'center',
        paddingRight: deviceBasedDynamicDimension(5, true, 1),
        // flex:1
    },
    rowStyle: {
        maxHeight: deviceBasedDynamicDimension(46, false, 1)
    },
    selectText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.dropdownText,
    },
    normalText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.textColor,
    },
    dropDownbtn: {
        backgroundColor: 'transparent',
        borderWidth: deviceBasedDynamicDimension(1, false, 1),
        borderColor: colors.borderColor,
        borderRadius: deviceBasedDynamicDimension(8, false, 1),
        alignItems: 'center',
        paddingHorizontal: deviceBasedDynamicDimension(15, true, 1),
        marginTop: deviceBasedDynamicDimension(6, false, 1),
        marginLeft: deviceBasedDynamicDimension(4, true, 1),
        maxHeight: deviceBasedDynamicDimension(46, false, 1),
        width: '100%'

    },
    monthBox: {
        borderWidth: deviceBasedDynamicDimension(1, false, 1),
        borderColor: colors.borderColor,
        borderRadius: deviceBasedDynamicDimension(8, false, 1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: deviceBasedDynamicDimension(15, true, 1),
        marginTop: deviceBasedDynamicDimension(6, false, 1),
        // minWidth:deviceBasedDynamicDimension(120,true,1),
        flex: 1,
        marginRight: deviceBasedDynamicDimension(5, true, 1),
        height: deviceBasedDynamicDimension(46, false, 1)
    },
    dateBox: {
        borderWidth: deviceBasedDynamicDimension(1, false, 1),
        borderColor: colors.borderColor,
        borderRadius: deviceBasedDynamicDimension(8, false, 1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: deviceBasedDynamicDimension(15, true, 1),
        marginTop: deviceBasedDynamicDimension(6, false, 1),
        width: deviceBasedDynamicDimension(77, true, 1),
        marginRight: deviceBasedDynamicDimension(5, true, 1),
        height: deviceBasedDynamicDimension(46, false, 1)
    },
    yearBox: {
        borderWidth: deviceBasedDynamicDimension(1, false, 1),
        borderColor: colors.borderColor,
        borderRadius: deviceBasedDynamicDimension(8, false, 1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: deviceBasedDynamicDimension(15, true, 1),
        marginTop: deviceBasedDynamicDimension(6, false, 1),
        width: deviceBasedDynamicDimension(77, true, 1),
        height: deviceBasedDynamicDimension(46, false, 1)
    },
    titleText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.textColor,
    },
    titleView: {
        paddingHorizontal: deviceBasedDynamicDimension(21, true, 1),
        marginTop: deviceBasedDynamicDimension(12, false, 1)
    },
    imageOuterView: {
        height: deviceBasedDynamicDimension(100, false, 1),
        width: deviceBasedDynamicDimension(100, false, 1),
        backgroundColor: colors.white,
        borderRadius: deviceBasedDynamicDimension(14, false, 1),
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        alignSelf: 'center',
        marginVertical: deviceBasedDynamicDimension(5, false, 1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        height: deviceBasedDynamicDimension(100, false, 1),
        width: deviceBasedDynamicDimension(100, false, 1),
        borderWidth: deviceBasedDynamicDimension(4, false, 1),
        borderColor: colors.white,
        resizeMode: 'cover',
        borderRadius: deviceBasedDynamicDimension(14, false, 1),
        backgroundColor: colors.borderColor
    },
    editBtn: {
        height: deviceBasedDynamicDimension(35, false, 1),
        width: deviceBasedDynamicDimension(35, false, 1),
        position: 'absolute',
        bottom: deviceBasedDynamicDimension(-15.5, false, 1),
        right: deviceBasedDynamicDimension(-7, true, 1),
        borderWidth: deviceBasedDynamicDimension(4, false, 1),
        borderColor: colors.white,
        backgroundColor: colors.primary,
        borderRadius: deviceBasedDynamicDimension(35, false, 1),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
    },
    editImage: {
        height: '50%',
        width: '50%',
        resizeMode: 'center'
    }
})
const Styles = {
    styles
};
export default Styles