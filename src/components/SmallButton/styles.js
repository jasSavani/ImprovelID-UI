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
    outerView: {
        paddingVertical: deviceBasedDynamicDimension(8, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(32, true, 1)
    },
    gradientBox: {
        // height: deviceBasedDynamicDimension(51, true, 1),
        borderRadius: deviceBasedDynamicDimension(8, true, 1),
        paddingVertical: deviceBasedDynamicDimension(16, false, 1),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconImage: (color) => {
        return {
            height: deviceBasedDynamicDimension(13, true, 1),
            width: deviceBasedDynamicDimension(13, true, 1),
            resizeMode: 'contain',
            tintColor: color
        }
    },
    nameText: (color) => {
        return {
            fontSize: deviceBasedDynamicDimension(16, true, 1),
            color: color,
            opacity: 1,
            fontFamily: "OpenSans-SemiBold",
            paddingHorizontal: deviceBasedDynamicDimension(6, true, 1),
        }
    },
    borderBox: (color) => {
        return {
            // height: deviceBasedDynamicDimension(51, true, 1),
            paddingVertical: deviceBasedDynamicDimension(8, false, 1),
            paddingHorizontal:deviceBasedDynamicDimension(21,true,1),
            borderRadius: deviceBasedDynamicDimension(8, true, 1),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: deviceBasedDynamicDimension(1, false, 1),
            borderColor: color,
            flexDirection: 'row'

        }
    }

})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles