import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA"
    },
    toptextView: {
        paddingLeft: deviceBasedDynamicDimension(27, true, 1),
        paddingRight: deviceBasedDynamicDimension(20, true, 1),
        paddingTop: deviceBasedDynamicDimension(22, false, 1),
        paddingBottom: deviceBasedDynamicDimension(6, false, 1)
    },
    welComeText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(27, false, 1),
        fontSize: deviceBasedDynamicDimension(20, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    subText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.textColor,
    },
    bigCard: {
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: colors.white,
        marginHorizontal: deviceBasedDynamicDimension(12, true, 1),
        borderRadius: deviceBasedDynamicDimension(17, false, 1),
        marginVertical: deviceBasedDynamicDimension(6, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(22, true, 1),
        paddingVertical: deviceBasedDynamicDimension(15, false, 1),
    },
    topCardView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imaageView: {
        height: deviceBasedDynamicDimension(52, false, 1),
        aspectRatio: 1,
        borderRadius: deviceBasedDynamicDimension(13, false, 1),
        marginVertical: deviceBasedDynamicDimension(6, false, 1),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: deviceBasedDynamicDimension(15, true, 1)

    },
    cardTopttext: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(25, false, 1),
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    topCardBottomView: {
        marginVertical: deviceBasedDynamicDimension(3, false, 1),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    rightArrow: {
        height: deviceBasedDynamicDimension(10, false, 1),
        width: deviceBasedDynamicDimension(5, true, 1),
        resizeMode: 'contain',
        marginLeft: deviceBasedDynamicDimension(10, true, 1),
        tintColor: colors.primary
    },
    bottomText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.primary,
        textDecorationLine: "underline"
    },
    smallCard: {
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: colors.white,
        marginHorizontal: deviceBasedDynamicDimension(6, true, 1),
        borderRadius: deviceBasedDynamicDimension(17, false, 1),
        marginVertical: deviceBasedDynamicDimension(6, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(22, true, 1),
        paddingVertical: deviceBasedDynamicDimension(15, false, 1),
        flex: 0.5
    },
    rowView: {
        flexDirection: 'row',
        paddingHorizontal: deviceBasedDynamicDimension(6, true, 1)
    },
    cardtitlettext: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    cardsubttext: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(18, false, 1),
        fontSize: deviceBasedDynamicDimension(13, false, 1),
        opacity: 1,
        color: colors.textColor,
        paddingVertical: deviceBasedDynamicDimension(5, false, 1),
    },
    valueText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(22, false, 1),
        fontSize: deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingVertical: deviceBasedDynamicDimension(5, false, 1),
    },
    listStyle: {
        flexGrow: 1,
        paddingBottom: deviceBasedDynamicDimension(10, false, 1)
    }
})
const Styles = {
    styles
};
export default Styles