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
            alignItems: 'center',
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
    outerView: {
        paddingVertical: deviceBasedDynamicDimension(8, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(32, true, 1)
    },
    gradientBox: {
        // height: deviceBasedDynamicDimension(51, true, 1),
        borderRadius: deviceBasedDynamicDimension(13, true, 1),
        paddingVertical: deviceBasedDynamicDimension(16, false, 1),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconImage: (color) => {
        return {
            height: deviceBasedDynamicDimension(22, true, 1),
            width: deviceBasedDynamicDimension(22, true, 1),
            resizeMode: 'contain',
            tintColor: color
        }
    },
    nameText: (color) => {
        return {
            fontSize: deviceBasedDynamicDimension(18, false, 1),
            color: color,
            opacity: 1,
            fontFamily: "OpenSans-SemiBold",
            paddingHorizontal: deviceBasedDynamicDimension(10, true, 1),
        }
    },
    borderBox: (color) => {
        return {
            // height: deviceBasedDynamicDimension(51, true, 1),
            paddingVertical: deviceBasedDynamicDimension(16, false, 1),
            borderRadius: deviceBasedDynamicDimension(13, true, 1),
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