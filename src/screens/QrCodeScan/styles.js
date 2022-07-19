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
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA"
    },
    boxView: (props) => {
        const { colors } = props
        return {
            marginHorizontal: deviceBasedDynamicDimension(17, true, 1),
            backgroundColor: colors.white,
            shadowColor: colors.cardShadow,
            shadowOffset: {
                height: deviceBasedDynamicDimension(4, false, 1),
                width: 0
            },
            elevation: deviceBasedDynamicDimension(4, false, 1),
            shadowRadius: deviceBasedDynamicDimension(11, false, 1),
            borderRadius: deviceBasedDynamicDimension(19, false, 1),
            justifyContent: 'center',
        }
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceBasedDynamicDimension(84, false, 1),
    },
    titleText: (props) => {
        return {
            fontSize: deviceBasedDynamicDimension(23, false, 1),
            color: props.textColor,
            opacity: 1,
            fontFamily: "OpenSans-Bold"
        }
    },
    subTitletext: (props) => {
        return {
            fontSize: deviceBasedDynamicDimension(14, true, 1),
            color: props.textColor,
            opacity: 1,
            fontFamily: "OpenSans-SemiBold",
            paddingLeft: deviceBasedDynamicDimension(38, true, 1),
            paddingRight: deviceBasedDynamicDimension(36, true, 1),
            textAlign: 'center',
            paddingVertical: deviceBasedDynamicDimension(16, false, 1)
        }
    },
    firstTextbox: {
        marginLeft: deviceBasedDynamicDimension(44, true, 1),
        marginRight: deviceBasedDynamicDimension(41, true, 1),
        marginTop: deviceBasedDynamicDimension(31, false, 1),
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignText: (props) => {
        return {
            fontSize: deviceBasedDynamicDimension(15, true, 1),
            color: props.colors.textColor,
            opacity: 1,
            fontFamily: "OpenSans-Regular",
            textAlign: 'center',
            textAlignVertical: 'top',
            fontWeight: '500',
        }
    },
    orTextView: {
        paddingVertical: deviceBasedDynamicDimension(15, false, 1),
        justifyContent: 'center',
        alignItems: 'center',
    },
    orText: (props) => {
        return {
            fontSize: deviceBasedDynamicDimension(15, true, 1),
            color: props.colors.textColor,
            opacity: 1,
            fontFamily: "OpenSans-SemiBold",
            textAlign: 'center',
            fontWeight: '600',
        }
    },
    enterCodeView: {
        paddingLeft: deviceBasedDynamicDimension(23, true, 1),
        paddingRight: deviceBasedDynamicDimension(25, true, 1),
        marginBottom: deviceBasedDynamicDimension(28, false, 1)
    },
    bottomView: {
        marginTop: deviceBasedDynamicDimension(40, false, 1),
        marginBottom: 'auto',
        marginHorizontal: deviceBasedDynamicDimension(17, true, 1),
        justifyContent: 'center',
        alignItems: 'center',
    },
    normalText: (props) => {
        return {
        fontSize: deviceBasedDynamicDimension(15, true, 1),
        color: props.colors.textColor,
        opacity: 1,
        fontFamily: "OpenSans-SemiBold",
        textAlign: 'center',
        textAlignVertical: 'top',
        fontWeight: '600',
    }},
    highLightText: (props) => {
        return {
        fontSize: deviceBasedDynamicDimension(15, true, 1),
        color: props.colors.primary,
        textDecorationLine:"underline",
        opacity: 1,
        fontFamily: "OpenSans-SemiBold",
        textAlign: 'center',
        textAlignVertical: 'top',
        fontWeight: '600',
    }},
    qrView:{
        height:deviceBasedDynamicDimension(205,false,1),
        width:deviceBasedDynamicDimension(205,false,1),
        overflow:'hidden',
        alignSelf:'center',
        marginTop:deviceBasedDynamicDimension(34,false,1),
        marginBottom:deviceBasedDynamicDimension(20,false,1)
    },
    roundView:{
        height:deviceBasedDynamicDimension(178,false,1),
        width:deviceBasedDynamicDimension(178,false,1),
        borderRadius:deviceBasedDynamicDimension(178,false,1),
        overflow:'hidden'
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles