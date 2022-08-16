import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    cardView: {
        paddingVertical: deviceBasedDynamicDimension(10, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(10, true, 1),
        borderRadius: deviceBasedDynamicDimension(10, false, 1),
        marginVertical: deviceBasedDynamicDimension(6, false, 1),
        backgroundColor: colors.white,
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(20, false, 1),
        marginHorizontal:deviceBasedDynamicDimension(6,true,1),
        flex:0.5
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    centerView: {
        flex: 1,
        marginLeft: deviceBasedDynamicDimension(8, true, 1)
    },
    rightView: {
        height: deviceBasedDynamicDimension(5, false, 1),
        width: deviceBasedDynamicDimension(13, true, 1),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: deviceBasedDynamicDimension(2, true, 1)
    },
    iconView: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    nameText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(23, false, 1),
        fontSize: deviceBasedDynamicDimension(17, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding: 0,
    },
    keyText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(18, false, 1),
        fontSize: deviceBasedDynamicDimension(13, false, 1),
        opacity: 1,
        color: colors.textColor,
        padding: 0,
    },
    bottomRowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: deviceBasedDynamicDimension(10, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(2, true, 1)
    },
    percetntText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(18, false, 1),
        fontSize: deviceBasedDynamicDimension(13, false, 1),
        opacity: 1,
        color: colors.primary,
        padding: 0,
    },


})
const Styles = {
    styles
};
export default Styles