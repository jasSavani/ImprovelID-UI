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
    titleView: {
        marginTop: deviceBasedDynamicDimension(20, false, 1)
    },
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
    smallText: (props) => {
        const { colors } = props
        return {
            fontSize: deviceBasedDynamicDimension(15, false, 1),
            paddingHorizontal: deviceBasedDynamicDimension(48, true, 1),
            textAlign: 'center',
            fontFamily: "OpenSans-SemiBold",
            color: colors.textColor
        }
    },
    bottomView: {
        marginBottom: deviceBasedDynamicDimension(37, false, 1),
        marginTop: 'auto'
    },
    boxView: (props) => {
        const { colors } = props
        return {
            marginHorizontal: deviceBasedDynamicDimension(17, true, 1),
            backgroundColor: colors.card,
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
    signaturView: {
        marginHorizontal: deviceBasedDynamicDimension(22, true, 1),
        borderRadius: deviceBasedDynamicDimension(12, false, 1),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(7, false, 1),
        backgroundColor: 'white',
        marginBottom: deviceBasedDynamicDimension(15, false, 1),
        alignItems: 'center',
        overflow:'hidden'
    },
    seperatorView: {
        height: deviceBasedDynamicDimension(1, false, 1),
        width: "93%",
        backgroundColor: "#DADADA"
    },
    bottombtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '87%',
        paddingTop: deviceBasedDynamicDimension(17, false, 1),
        paddingBottom: deviceBasedDynamicDimension(19, false, 1)
    },
    signture:{
        width:deviceBasedDynamicDimension(332,true,1),
        height:deviceBasedDynamicDimension(136,false,1)

    },
    signatureText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(13, false, 1),
        color: colors.lightText,
        opacity: 1,
        fontFamily: "OpenSans-SemiBold",
        textAlign: 'center',
    }},
    clearText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        color: colors.primaryText,
        opacity: 1,
        fontFamily: "OpenSans-SemiBold",
        textAlign: 'center',
    }},
    pleaseSignText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(17, false, 1),
        color: colors.darkTextColor,
        opacity: 1,
        fontFamily: "OpenSans-SemiBold",
        paddingHorizontal: deviceBasedDynamicDimension(26, true, 1),
        paddingVertical:deviceBasedDynamicDimension(6,false,1)
    }},
    radioView:{
        flexDirection:'row',
        paddingHorizontal:deviceBasedDynamicDimension(25,true,1),
        marginTop:deviceBasedDynamicDimension(29,false,1)
    },
    radioBtn:{
        marginRight:deviceBasedDynamicDimension(10,true,1),
    },
    instructionText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        color: colors.darkTextColor,
        opacity: 1,
        fontFamily: "OpenSans-Regular",
        textAlignVertical:'top'

    }}
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles