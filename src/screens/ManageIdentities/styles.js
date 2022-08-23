import { Platform, StyleSheet } from 'react-native';
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
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent"
    },
    titleText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(27, false, 1),
        fontSize: deviceBasedDynamicDimension(20, false, 1),
        opacity: 1,
        color: 'white'
    },
    containerStyle: {
        paddingHorizontal: deviceBasedDynamicDimension(18, true, 1),
        paddingVertical: deviceBasedDynamicDimension(16, false, 1)
    },
    cardOuteview: {
        borderRadius: deviceBasedDynamicDimension(10, false, 1),
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(5, false, 1),
        backgroundColor: 'white',
        marginVertical: deviceBasedDynamicDimension(9, false, 1),

    },
    rowView: {
        flexDirection: 'row'
    },
    outerview: {
        marginTop: deviceBasedDynamicDimension(11, false, 1),
        marginLeft: deviceBasedDynamicDimension(11, true, 1),
        overflow: 'hidden',
        padding: deviceBasedDynamicDimension(10, false, 1),
    },
    deviceimageView: {
        height: deviceBasedDynamicDimension(63, false, 1),
        width: deviceBasedDynamicDimension(40, true, 1),
        marginLeft: deviceBasedDynamicDimension(15, true, 1),
        borderRadius: deviceBasedDynamicDimension(2, false, 1),
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.1,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(4, false, 1),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: deviceBasedDynamicDimension(15, false, 1)
    },
    centerView: {
        flex: 1,
        paddingHorizontal: deviceBasedDynamicDimension(11, true, 1),
        justifyContent: 'center'
    },
    rightArrow: {
        width: deviceBasedDynamicDimension(5, true, 1),
        height: deviceBasedDynamicDimension(18, false, 1),
        alignSelf: 'center',
    },
    nameText: (props) => {
        const { colors } = props
        return {
            fontFamily: "OpenSans-SemiBold",
            lineHeight: deviceBasedDynamicDimension(25, false, 1),
            fontSize: deviceBasedDynamicDimension(18, false, 1),
            opacity: 1,
            color: colors.darkTextColor
        }
    },
    subnametext: (props) => {
        const { colors } = props
        return {
            fontFamily: "OpenSans-Regular",
            lineHeight: deviceBasedDynamicDimension(20, false, 1),
            fontSize: deviceBasedDynamicDimension(15, false, 1),
            opacity: 1,
            color: colors.textColor
        }
    },
    extraView: {
        marginHorizontal: deviceBasedDynamicDimension(15, true, 1),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopColor: 'lightgray',
        borderTopWidth: 1
    },
    btnView: {
        height: 32,
        width: 96,
        marginVertical: deviceBasedDynamicDimension(10, false, 1),
        marginHorizontal: deviceBasedDynamicDimension(6, true, 1),
        borderRadius: deviceBasedDynamicDimension(4, false, 1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: (props) => {
        const { colors } = props
        return {
            fontFamily: "OpenSans-SemiBold",
            lineHeight: deviceBasedDynamicDimension(20, false, 1),
            fontSize: deviceBasedDynamicDimension(15, false, 1),
            opacity: 1,
            color: colors.whiteText
        }
    },
    topView: {
        backgroundColor: 'white',
        borderRadius: deviceBasedDynamicDimension(10, false, 1),
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.1,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(4, false, 1),
        marginHorizontal: deviceBasedDynamicDimension(18, true, 1),
        marginTop: deviceBasedDynamicDimension(20, false, 1),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: deviceBasedDynamicDimension(25, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
    },
    topdeviceimageView: {
        height: deviceBasedDynamicDimension(47, false, 1),
        width: deviceBasedDynamicDimension(47, false, 1),
        borderRadius: deviceBasedDynamicDimension(7, false, 1),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    textView: {
        marginTop: deviceBasedDynamicDimension(15, false, 1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        height:deviceBasedDynamicDimension(35,false,1),
        marginLeft:Platform.OS == "android" ? deviceBasedDynamicDimension(-5,true,1): deviceBasedDynamicDimension(10,true,1),
        marginVertical:deviceBasedDynamicDimension(5,false,1),
    },
    dotView:{
        height:deviceBasedDynamicDimension(10,false,1),
        width:deviceBasedDynamicDimension(10,false,1),
        borderRadius:deviceBasedDynamicDimension(10,false,1),
    },
    menuText: (props) => {
        const { colors } = props
        return {
            fontFamily: "OpenSans-SemiBold",
            lineHeight: deviceBasedDynamicDimension(22, false, 1),
            fontSize: deviceBasedDynamicDimension(16, false, 1),
            opacity: 1,
            color: colors.darkTextColor,
            paddingHorizontal:deviceBasedDynamicDimension(7,true,1)
        }
    },
    menuOuterView:{
        borderRadius:deviceBasedDynamicDimension(5,false,1)
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles