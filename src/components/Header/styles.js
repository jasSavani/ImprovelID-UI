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
            borderRadius: deviceBasedDynamicDimension(14, false, 1),
            backgroundColor: colors.white,
            paddingVertical: deviceBasedDynamicDimension(27, false, 1),
            borderWidth: deviceBasedDynamicDimension(1, false, 1),
            borderColor: colors.lightborderColor
        }
    },
    headerView: {
        flexDirection: 'row',
        height: deviceBasedDynamicDimension(103, false, 1),
        paddingLeft: deviceBasedDynamicDimension(18, true, 1),
        paddingRight: deviceBasedDynamicDimension(20, true, 1)
    },
    titleText: (props) => {
        const { colors } = props
        return {
            fontFamily: "OpenSans-SemiBold",
            lineHeight: deviceBasedDynamicDimension(27, false, 1),
            fontSize: deviceBasedDynamicDimension(20, false, 1),
            opacity: 1,
            color: colors.whiteText
        }
    },
    leftBtn: {
        height: deviceBasedDynamicDimension(20, false, 1),
        width: deviceBasedDynamicDimension(20, false, 1),
        marginTop: deviceBasedDynamicDimension(62, false, 1),
    },
    textView: {
        flex: 1,
        paddingTop: deviceBasedDynamicDimension(57, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(16, false, 1),
    },
    rightBtn: {
        height: deviceBasedDynamicDimension(29, false, 1),
        width: deviceBasedDynamicDimension(29, false, 1),
        marginTop: deviceBasedDynamicDimension(56, false, 1),
        justifyContent: 'flex-end',
        marginHorizontal:deviceBasedDynamicDimension(10,true,1)
    },
    notiView: (props) => {
        const { colors } = props
        return {
            height: deviceBasedDynamicDimension(21, false, 1),
            width: deviceBasedDynamicDimension(21, false, 1),
            backgroundColor: colors.notificationbg,
            borderRadius: deviceBasedDynamicDimension(21, false, 1),
            position: 'absolute',
            right: 0,
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
            overflow:'hidden'

        }
    },
    notiOuterView: (props) => {
        const { colors } = props
        return {
            backgroundColor: colors.notification,
            height: deviceBasedDynamicDimension(19, false, 1),
            width: deviceBasedDynamicDimension(19, false, 1),
            borderRadius: deviceBasedDynamicDimension(19, false, 1),
            justifyContent:'center',
            alignItems:'center',
        }
    },
    notificationtext: (props) => {
        const { colors } = props
        return {
            fontSize: deviceBasedDynamicDimension(13, false, 1),
            lineHeight: deviceBasedDynamicDimension(18, false, 1),
            fontFamily: "OpenSans-SemiBold",
            textAlign: 'center',
            color: colors.whiteText,
        }
    },
    bellImage: {
        height: deviceBasedDynamicDimension(24, false, 1),
        width: deviceBasedDynamicDimension(20, false, 1),
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles