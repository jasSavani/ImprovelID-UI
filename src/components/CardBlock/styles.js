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
            marginHorizontal: deviceBasedDynamicDimension(25, true, 1),
            borderRadius: deviceBasedDynamicDimension(13, false, 1),
            backgroundColor: colors.white,
            shadowColor: colors.lightShadow,
            shadowOffset: {
                height: 4,
                width: 0
            },
            shadowRadius: deviceBasedDynamicDimension(15, false, 1),
            elevation: deviceBasedDynamicDimension(4, false, 1),
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
        fontSize: deviceBasedDynamicDimension(17, false, 1),
        color: colors.darkTextColor,
        opacity: 1,
        fontFamily: "OpenSans-Bold",
        paddingHorizontal:deviceBasedDynamicDimension(15,true,1),
    }},
    outerView: {
        paddingBottom: deviceBasedDynamicDimension(13, false, 1)
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