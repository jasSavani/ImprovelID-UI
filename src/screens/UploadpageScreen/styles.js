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
        marginTop: deviceBasedDynamicDimension(50, false, 1)
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
    imageView: {
        height: deviceBasedDynamicDimension(247, false, 1),
        width: deviceBasedDynamicDimension(208, true, 1),
    },
    otherImage:{
        height: deviceBasedDynamicDimension(161, false, 1),
        width: deviceBasedDynamicDimension(240, true, 1),
    },
    smallText: (props) => {
        const { colors } = props
        return {
        paddingBottom: deviceBasedDynamicDimension(59, false, 1),
        paddingTop: deviceBasedDynamicDimension(25, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(48, true, 1),
        textAlign: 'center',
        fontFamily: "OpenSans-Bold",
        color:colors.textColor
    }},
    bottomView: {
        marginBottom: deviceBasedDynamicDimension(37, false, 1),
        marginTop:'auto'
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
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles