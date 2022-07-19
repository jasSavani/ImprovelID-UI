import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { deviceBasedDynamicDimension } from '../utils';


export const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 63.2px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
export const styles = StyleSheet.create({
    titleText: (props) => {
        const { colors } = props
        return {
            fontSize: deviceBasedDynamicDimension(20, false, 1),
            color: colors.darkTextColor,
            opacity: 1,
            fontFamily: "OpenSans-Bold",
            textAlign: 'center',
            paddingVertical: deviceBasedDynamicDimension(10, false, 1)
        }
    },
    detailsView: {
        marginTop: deviceBasedDynamicDimension(81, false, 1),
        marginLeft: deviceBasedDynamicDimension(28, true, 1),
    },
    userName: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        lineHeight: deviceBasedDynamicDimension(25, false, 1),
        color: colors.whiteText,
        opacity: 1,
        fontFamily: "OpenSans-Bold",
        paddingTop: deviceBasedDynamicDimension(20, false, 1)
    }},
    emailText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        color: colors.emailText,
        opacity: 1,
        fontFamily: "OpenSans-Regular",
        paddingBottom: deviceBasedDynamicDimension(22, false, 1),
        paddingTop: deviceBasedDynamicDimension(3, false, 1)
    }},
    smallLogo: {
        height: deviceBasedDynamicDimension(67, false, 1),
        marginLeft: deviceBasedDynamicDimension(26, true, 1),
        marginRight: deviceBasedDynamicDimension(18, true, 1),
        marginBottom: deviceBasedDynamicDimension(48, false, 1),
        marginTop: deviceBasedDynamicDimension(20, false, 1),
    },
    centerImage: {
        marginTop: deviceBasedDynamicDimension(78, false, 1),
        marginHorizontal: deviceBasedDynamicDimension(65, true, 1),
        height: deviceBasedDynamicDimension(246, false, 1),
    },
    poweredText: (props) => {
        return {
            position: 'absolute',
            alignSelf: 'center',
            top: deviceBasedDynamicDimension(-9, false, 1),
            fontSize: deviceBasedDynamicDimension(13, false, 1),
            color: props.textColor,
            opacity: 0.9,
            lineHeight: deviceBasedDynamicDimension(18, false, 1),
            fontFamily: "OpenSans-Regular"

        }
    },
    activeView: {
        width: '100%',
        justifyContent: 'center',
    },
    iconView: (props) => {
        const {isActive,theme} = props
        return {
        height: deviceBasedDynamicDimension(35, false, 1),
        width: deviceBasedDynamicDimension(35, false, 1),
        marginVertical: deviceBasedDynamicDimension(10, false, 1),
        marginHorizontal: deviceBasedDynamicDimension(13, true, 1),
        borderRadius: deviceBasedDynamicDimension(7, false, 1),
        backgroundColor: isActive ? theme.colors.activeicon:theme.colors.inactiveicon,
        overflow: 'hidden',
        justifyContent:'center',
        alignItems:'center'
    }},
    iconImage: (props) => {
        const {isActive,theme} = props
        return {
            height: deviceBasedDynamicDimension(18,false,1),
             width: deviceBasedDynamicDimension(18,false,1),
             tintColor:isActive ? theme.colors.activeimage:theme.colors.activeicon
    }},
    nameText: (props) => {
        const {isActive,theme} = props
        return {
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        color: isActive ? theme.colors.activeicon:theme.colors.inactivetext,
        lineHeight: deviceBasedDynamicDimension(25, false, 1),
        fontFamily: "OpenSans-SemiBold"
    }},
    view:{
        flexDirection: 'row',
         alignItems: 'center', 
         paddingLeft: deviceBasedDynamicDimension(13,true,1) 
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles