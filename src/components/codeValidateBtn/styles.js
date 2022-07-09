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
    container: (props) => {
        const { colors } = props
        return {
            flexDirection: 'row',
            overflow:"hidden",
        }
    },
    inputText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(15, true, 1),
        color: colors.textColor,
        opacity: 1,
        fontFamily: "OpenSans-Regular",
        fontWeight:'500',
        paddingVertical:deviceBasedDynamicDimension(12,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(17,true,1),
        borderColor:colors.borderColor,
        borderTopLeftRadius: deviceBasedDynamicDimension(7, false, 1),
        borderBottomLeftRadius:deviceBasedDynamicDimension(7, false, 1),
        borderWidth:deviceBasedDynamicDimension(1,false,1),
        borderRightWidth:deviceBasedDynamicDimension(0,false,1)
        }
    },
    validBtnview: (props) => {
        const { colors } = props
        return {
        justifyContent:'center',
        alignItems:'center',
        minWidth:deviceBasedDynamicDimension(88,true,1),
        borderTopRightRadius:deviceBasedDynamicDimension(8,false,1),
        borderBottomRightRadius:deviceBasedDynamicDimension(8,false,1)
    }},
    validText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(15, true, 1),
        color: colors.white,
        opacity: 1,
        fontFamily: "OpenSans-SemiBold",
        fontWeight:'600',
    }},
    hj:{

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
            alignItems: 'center'
        }
    },
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles