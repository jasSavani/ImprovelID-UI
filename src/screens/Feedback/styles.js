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
    bottomView: {
        // marginBottom: deviceBasedDynamicDimension(37, false, 1),
        marginTop: 'auto',
        position:'absolute',
        bottom:deviceBasedDynamicDimension(37, false, 1),
        left:0,
        right:0,
    },
    inputView: {
        marginHorizontal: deviceBasedDynamicDimension(26, true, 1),
        marginTop: deviceBasedDynamicDimension(19, false, 1),
        marginBottom: deviceBasedDynamicDimension(67, false, 1),
    },
    feedbackBox: {
        backgroundColor: 'white',
        borderWidth: deviceBasedDynamicDimension(1, false, 1),
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: deviceBasedDynamicDimension(12, false, 1),
        height: deviceBasedDynamicDimension(197, false, 1),
        marginBottom: deviceBasedDynamicDimension(120, false, 1),
        paddingVertical: deviceBasedDynamicDimension(28, false, 1),
    },
    inputText:{
        paddingHorizontal: deviceBasedDynamicDimension(32, true, 1),
        paddingVertical:deviceBasedDynamicDimension(0,false,1),
        textAlignVertical: 'top',
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    text1: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(25, false, 1),
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingHorizontal: deviceBasedDynamicDimension(36, true, 1),
        textAlign: 'center',
        paddingTop: deviceBasedDynamicDimension(73, false, 1)

    },
    text2:{
            fontFamily: "OpenSans-Regular",
            lineHeight: deviceBasedDynamicDimension(19, false, 1),
            fontSize: deviceBasedDynamicDimension(14, false, 1),
            opacity: 1,
            color: colors.textColor,
            paddingHorizontal: deviceBasedDynamicDimension(53, true, 1),
            textAlign: 'center',
            paddingTop: deviceBasedDynamicDimension(12, false, 1)
    },
    text3:{
            fontFamily: "OpenSans-SemiBold",
            lineHeight: deviceBasedDynamicDimension(19, false, 1),
            fontSize: deviceBasedDynamicDimension(14, false, 1),
            opacity: 1,
            color: colors.darkTextColor,
            paddingHorizontal: deviceBasedDynamicDimension(26, true, 1),
            textAlign: 'center',
            paddingTop: deviceBasedDynamicDimension(32, false, 1)
    },
    ratingView: {
        marginVertical: deviceBasedDynamicDimension(33, false, 1),
        alignSelf: 'center',
        flexDirection: 'row'
    },
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles