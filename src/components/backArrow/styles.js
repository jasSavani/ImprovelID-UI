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
    backArrowView:{
        marginTop:deviceBasedDynamicDimension(53,false,1),
        marginLeft:deviceBasedDynamicDimension(25,true,1),
        paddingHorizontal:deviceBasedDynamicDimension(5,true,1),
        paddingVertical:deviceBasedDynamicDimension(10,false,1),
        alignSelf:'flex-start'
    },
    backArrowImage:{
        height:deviceBasedDynamicDimension(17,false,1),
        width:deviceBasedDynamicDimension(23,true,1),
        resizeMode:'contain'
    },
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles