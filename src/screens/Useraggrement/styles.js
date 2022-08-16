import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        paddingHorizontal: deviceBasedDynamicDimension(18, true, 1),
        paddingVertical: deviceBasedDynamicDimension(9, false, 1)
    },
    cardDetailsView: {
        flex: 1,
        marginVertical: deviceBasedDynamicDimension(9, false, 1),
        borderRadius: deviceBasedDynamicDimension(15, false, 1),
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: 'white',
    },
    containerView: {
        flexGrow: 1,
        paddingVertical: deviceBasedDynamicDimension(25, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(16, true, 1),
    },
    titleText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(23, false, 1),
        fontSize: deviceBasedDynamicDimension(17, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        textAlign: 'center'
    },
    singleView: {
        flexDirection: 'row',
        // marginTop: deviceBasedDynamicDimension(5, false, 1)
    },
    leftView: {
        width: deviceBasedDynamicDimension(4, false, 1),
        height: deviceBasedDynamicDimension(4, false, 1),
        borderRadius: deviceBasedDynamicDimension(4, false, 1),
        backgroundColor: colors.textColor,
        marginTop: deviceBasedDynamicDimension(12, false, 1)
    },
    rightView: {
        paddingHorizontal: deviceBasedDynamicDimension(9, true, 1),
    },
    subText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingTop: deviceBasedDynamicDimension(4, false, 1)
    },
    headText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(22, false, 1),
        fontSize: deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        marginBottom: deviceBasedDynamicDimension(5, false, 1)
    },
    smallView: {
        height: deviceBasedDynamicDimension(3, false, 1),
        width: deviceBasedDynamicDimension(23, true, 1),
        backgroundColor: colors.primary,
        alignSelf: 'center',
        marginTop: deviceBasedDynamicDimension(2, false, 1),
        marginBottom: deviceBasedDynamicDimension(24, false, 1)
    }
})
const Styles = {
    styles
};
export default Styles