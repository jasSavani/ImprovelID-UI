import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        paddingVertical: deviceBasedDynamicDimension(9, false, 1),
    },
    containerView: {
        flexGrow: 1,
        paddingTop: deviceBasedDynamicDimension(7, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(15, true, 1),
    },
    bottomView: {
        marginBottom: deviceBasedDynamicDimension(27, false, 1),
        marginHorizontal: deviceBasedDynamicDimension(15, true, 1),
        marginTop: deviceBasedDynamicDimension(8,false,1),
    },
    titleText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.textColor,
        paddingHorizontal: deviceBasedDynamicDimension(8, true, 1)
    },
    cardView: {
        borderRadius: deviceBasedDynamicDimension(11, false, 1),
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: colors.white,
        marginVertical: deviceBasedDynamicDimension(8, false, 1),
        paddingVertical: deviceBasedDynamicDimension(20, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
    },
    pTextview: {
        marginTop: deviceBasedDynamicDimension(-5, false, 1),
        marginBottom: deviceBasedDynamicDimension(8, false, 1)
    },
    headingtext: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    profileImage: {
        height: deviceBasedDynamicDimension(101, false, 1),
        width: deviceBasedDynamicDimension(89, true, 1),
        borderRadius: deviceBasedDynamicDimension(9, false, 1),
        marginHorizontal: deviceBasedDynamicDimension(4, true, 1),
        marginVertical: deviceBasedDynamicDimension(4, false, 1),
    },
    uTextview: {
        marginBottom: deviceBasedDynamicDimension(8, false, 1)
    },
    secondView: {
        marginHorizontal: deviceBasedDynamicDimension(15, true, 1)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:deviceBasedDynamicDimension(8,false,1)
    },
    keyText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.placeholderTextColor,
    },
    valueText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(22, false, 1),
        fontSize: deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingVertical:deviceBasedDynamicDimension(2,false,1)
    },
    subHeadingText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.placeholderTextColor,
    },
    shadowView:{
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: colors.white,
        width:'100%',
        marginBottom:deviceBasedDynamicDimension(15,false,1),
    },
    proofImage:{
        height:deviceBasedDynamicDimension(235,false,1),
        resizeMode:'contain',
        width:'100%',
    },
    imageOuterview:{
        alignItems:'center',
        marginRight:deviceBasedDynamicDimension(9,true,1),
        flex:1
    },
    backOuterView:{
        alignItems:'center',
        marginLeft:deviceBasedDynamicDimension(9,true,1),
        flex:1
    },
    imageTypeText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    signatureImage:{
        height:deviceBasedDynamicDimension(120,false,1),
        width:'100%',
        resizeMode:'cover',
        alignSelf:'center',
    }
})
const Styles = {
    styles
};
export default Styles