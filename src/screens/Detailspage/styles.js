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
export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA"
    },
    mainView: {
        flex: 1,
        marginHorizontal: deviceBasedDynamicDimension(19, true, 1),
        marginTop: deviceBasedDynamicDimension(19, false, 1),
        marginBottom: deviceBasedDynamicDimension(23, false, 1),
        borderRadius: deviceBasedDynamicDimension(15, false, 1),
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.6,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: colors.white,
        overflow: 'hidden',
        paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
        paddingVertical: deviceBasedDynamicDimension(12, false, 1)
    },
    topview: {
        flexDirection: 'row',
        marginVertical: deviceBasedDynamicDimension(12, false, 1),
    },
    imageView: {
        height: deviceBasedDynamicDimension(111, false, 1),
        width: deviceBasedDynamicDimension(91, true, 1),
        borderRadius: deviceBasedDynamicDimension(9, false, 1),
        marginHorizontal: deviceBasedDynamicDimension(3, true, 1),
    },
    nameText: {
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(25, false, 1),
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingBottom: deviceBasedDynamicDimension(7, false, 1)
    },
    lightText: {
        fontFamily: "OpenSans-Regular",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.textColor,
        paddingBottom: deviceBasedDynamicDimension(7, false, 1)
    },
    activeText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        paddingBottom: deviceBasedDynamicDimension(7, false, 1)
    },
    keyText: {
        fontFamily: "OpenSans-Regular",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.textColor,
        paddingBottom: deviceBasedDynamicDimension(1, false, 1)
    },
    valueText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(22, false, 1),
        fontSize: deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    singlebox: {
        marginVertical: deviceBasedDynamicDimension(8, false, 1)
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles