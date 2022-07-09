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
    cardView: (props) => {
        const { colors } = props
        return {
            flexDirection: 'row',
            alignItems:'center',
            borderRadius: deviceBasedDynamicDimension(14, false, 1),
            backgroundColor: colors.white,
            paddingVertical:deviceBasedDynamicDimension(27,false,1),
            borderWidth:deviceBasedDynamicDimension(1,false,1),
            borderColor:colors.lightborderColor
        }
    },
    gradientBox: {
        height: deviceBasedDynamicDimension(51, true, 1),
        width: deviceBasedDynamicDimension(51, true, 1),
        borderRadius: deviceBasedDynamicDimension(13, true, 1),
        justifyContent:'center',
        alignItems:'center',
        marginBottom:deviceBasedDynamicDimension(14,false,1),
        marginTop:deviceBasedDynamicDimension(15,false,1),
        marginLeft:deviceBasedDynamicDimension(20,false,1)
    },
    docText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        color: colors.darkTextColor,
        opacity: 1,
        fontFamily: "OpenSans-SemiBold",
        paddingHorizontal:deviceBasedDynamicDimension(15,true,1),
    }},
    outerView: {
        marginVertical: deviceBasedDynamicDimension(6, false, 1),
        paddingLeft:deviceBasedDynamicDimension(24,true,1),
        paddingRight:deviceBasedDynamicDimension(22,true,1)
    },
    leftImage: (props) => {
        const { colors } = props
        return {
        height:deviceBasedDynamicDimension(26,false,1),
        width:deviceBasedDynamicDimension(28,true,1),
        marginLeft:deviceBasedDynamicDimension(28,true,1),
        tintColor:colors.primaryradio,
        resizeMode:'contain'
    }},
    rightImage:{
        height:deviceBasedDynamicDimension(24,true,1),
        width:deviceBasedDynamicDimension(24,true,1),
        marginRight:deviceBasedDynamicDimension(19,true,1),
        resizeMode:'contain'
    },
    rightArrow:{
        height:deviceBasedDynamicDimension(16,false,1),
        width:deviceBasedDynamicDimension(9,true,1),
        marginRight:deviceBasedDynamicDimension(23,true,1),
        resizeMode:'contain'
    }

})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles