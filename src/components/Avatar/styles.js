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
    outerView: (props) => {
        const { colors, height } = props
        return {
            height: deviceBasedDynamicDimension(height, false, 1),
            width: deviceBasedDynamicDimension(height, false, 1),
            borderRadius: deviceBasedDynamicDimension(14, false, 1),
            backgroundColor: 'rgba(255,255,255,0.18)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: deviceBasedDynamicDimension(5, false, 1),
            overflow: 'hidden'

        }
    },
    imageView: {
       height:'100%',
       width:'100%',
       borderRadius:deviceBasedDynamicDimension(14,false,1),
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles