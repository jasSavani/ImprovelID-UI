import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { deviceBasedDynamicDimension } from '../../utils';


export const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 63.2px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA"
    },
    headerView: {
        flexDirection: 'row',
        height: deviceBasedDynamicDimension(103, false, 1),
        paddingLeft: deviceBasedDynamicDimension(18, true, 1),
        paddingRight: deviceBasedDynamicDimension(30, true, 1)
    },
    leftBtn: {
        height: deviceBasedDynamicDimension(20, false, 1),
        width: deviceBasedDynamicDimension(20, false, 1),
        marginTop: deviceBasedDynamicDimension(62, false, 1),
    },
    textView: {
        flex: 1,
        paddingHorizontal: deviceBasedDynamicDimension(27, true, 1),
        alignSelf: 'flex-end',
        paddingBottom: deviceBasedDynamicDimension(13, false, 1)
    },
    imageView: {
        height: deviceBasedDynamicDimension(50, false, 1),
        width: deviceBasedDynamicDimension(50, false, 1),
        backgroundColor: "rgba(255,255,255,0.18)",
        marginBottom: deviceBasedDynamicDimension(10, false, 1),
        alignSelf: 'flex-end',
        borderRadius: deviceBasedDynamicDimension(14, false, 1),
        justifyContent: 'center',
        alignItems: 'center'

    },
    profileImage: {
        height: '90%',
        width: '90%',
        borderRadius: deviceBasedDynamicDimension(14, false, 1),
        resizeMode: 'cover',
    },
    nameText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(24, false, 1),
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        opacity: 1,
        color: colors.whiteText,
    },
    emailText: {
        fontFamily: "OpenSans-Regular",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: "#FFDFFC",
    },
    topView: {
        flexDirection: 'row',
        paddingTop: deviceBasedDynamicDimension(17, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(26, true, 1),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    visualText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    secondView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconImage: {
        height: deviceBasedDynamicDimension(20, false, 1),
        width: deviceBasedDynamicDimension(20, false, 1),
        resizeMode: 'contain'
    },
    activeText: {
        paddingHorizontal: deviceBasedDynamicDimension(7, true, 1),
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(21, false, 1),
        fontSize: deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    caraouselView: {
        height: deviceBasedDynamicDimension(230, false, 1),
        alignItems: 'center',
    },
    caraouselImage: {
        height: '100%',
        width: '100%',
        borderRadius: deviceBasedDynamicDimension(12, false, 1),
        borderWidth: deviceBasedDynamicDimension(1, false, 1),
        borderColor: colors.lightborderColor,
        resizeMode: 'cover',
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(12, false, 1),
        overflow: 'hidden'
    },
    caraouselOuterview: {
        paddingVertical: deviceBasedDynamicDimension(12, false, 1)
    },
    listView: {
        flexGrow: 1,
        paddingHorizontal: deviceBasedDynamicDimension(24, true, 1),
        paddingBottom: deviceBasedDynamicDimension(19, false, 1)
    },
    authText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    cardView: {
        flexDirection: 'row',
        borderRadius: deviceBasedDynamicDimension(15, false, 1),
        marginVertical: deviceBasedDynamicDimension(6, false, 1),
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(12, false, 1),
        paddingVertical: deviceBasedDynamicDimension(20, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(10, true, 1),
        backgroundColor: 'white',
    },
    iconOuterView: {
        height: deviceBasedDynamicDimension(34, false, 1),
        width: deviceBasedDynamicDimension(34, false, 1),
        backgroundColor: 'red',
        marginHorizontal: deviceBasedDynamicDimension(10, true, 1),
        borderRadius: deviceBasedDynamicDimension(8, false, 1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    certiName: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    numbText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(17, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        marginTop: deviceBasedDynamicDimension(4, false, 1),
        marginRight: deviceBasedDynamicDimension(5, true, 1)
    },
    rightArrow: {
        height: deviceBasedDynamicDimension(13, false, 1),
        width: deviceBasedDynamicDimension(7, true, 1),
        marginHorizontal: deviceBasedDynamicDimension(6, true, 1),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    otpOuterview: {
        paddingVertical: deviceBasedDynamicDimension(16, false, 1),
        paddingLeft: deviceBasedDynamicDimension(10, true, 1),
        paddingRight: deviceBasedDynamicDimension(27, true, 1),
        borderRadius: deviceBasedDynamicDimension(15, false, 1),
        marginVertical: deviceBasedDynamicDimension(6, false, 1),
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(12, false, 1),
        backgroundColor: 'white',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(23, false, 1),
        fontSize: deviceBasedDynamicDimension(17, false, 1),
        opacity: 1,
        color: colors.primary,
        marginTop: deviceBasedDynamicDimension(4, false, 1)
    },
    inputdotView: {
        borderWidth: deviceBasedDynamicDimension(1, false, 1),
        borderStyle: 'dashed',
        height: deviceBasedDynamicDimension(50, false, 1),
        borderRadius: deviceBasedDynamicDimension(13, false, 1),
        borderColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: deviceBasedDynamicDimension(14, false, 1),
        marginLeft: deviceBasedDynamicDimension(10, true, 1),
    },
    inputText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(27, false, 1),
        fontSize: deviceBasedDynamicDimension(20, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding: 0
    },
    copyView: {
        height: deviceBasedDynamicDimension(50, false, 1),
        width: deviceBasedDynamicDimension(50, false, 1),
        backgroundColor: colors.primary,
        borderTopRightRadius: deviceBasedDynamicDimension(13, false, 1),
        borderBottomRightRadius: deviceBasedDynamicDimension(13, false, 1),
        marginRight: deviceBasedDynamicDimension(-1, false, 1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    copyimage: {
        height: deviceBasedDynamicDimension(23, false, 1),
        width: deviceBasedDynamicDimension(20, false, 1),
        resizeMode: 'contain'
    },
    centerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: deviceBasedDynamicDimension(25, true, 1),
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 1,
        paddingBottom:deviceBasedDynamicDimension(10,false,1)
    },
    iconContainer: {
        height: deviceBasedDynamicDimension(49, false, 1),
        width: deviceBasedDynamicDimension(49, false, 1),
        borderRadius: deviceBasedDynamicDimension(13, false, 1),
        backgroundColor: 'red',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:deviceBasedDynamicDimension(7,true,1)

    },
    titleText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(17, false, 1),
        fontSize: deviceBasedDynamicDimension(13, false, 1),
        opacity: 1,
        color: colors.identitytabtext,
        paddingTop: deviceBasedDynamicDimension(6, false, 1),
        textAlign: 'center'
    },
    iconView: {
        height: deviceBasedDynamicDimension(22, false, 1),
        width: deviceBasedDynamicDimension(22, false, 1),
        resizeMode: 'contain'
    },
    pageView:{
        paddingVertical:deviceBasedDynamicDimension(6,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(12,true,1),
        borderRadius:deviceBasedDynamicDimension(4,false,1),
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(12, false, 1),

    },
    pageText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.white,
        textAlign: 'center'
    }

})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles