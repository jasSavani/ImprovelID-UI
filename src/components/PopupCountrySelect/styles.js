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
    boxView: (props) => {
        const { colors } = props
        return {
            backgroundColor: colors.white,
            borderRadius: deviceBasedDynamicDimension(26, false, 1),
            flex: 1
        }
    },
    containerView: {
        flex: 1,
        backgroundColor: "white"
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: deviceBasedDynamicDimension(15, true, 1),
        marginTop: deviceBasedDynamicDimension(15, false, 1)

    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    imageView: {
        height: deviceBasedDynamicDimension(87, false, 1),
        width: deviceBasedDynamicDimension(87, false, 1),
        marginTop: deviceBasedDynamicDimension(2, false, 1),
        alignSelf: 'center'
    },
    crossView: {
        height: deviceBasedDynamicDimension(20, false, 1),
        width: deviceBasedDynamicDimension(20, false, 1),
        alignSelf: 'flex-end',
        marginTop: deviceBasedDynamicDimension(32, false, 1),
        marginHorizontal: deviceBasedDynamicDimension(30, true, 1)
    },
    titleText: (props) => {
        const { colors } = props
        return {
            fontSize: deviceBasedDynamicDimension(20, false, 1),
            color: colors.darkTextColor,
            opacity: 1,
            fontFamily: "OpenSans-Bold",
            textAlign: 'center',
            paddingTop: deviceBasedDynamicDimension(10, false, 1)
        }
    },
    selectedtitleText: (props) => {
        const { colors } = props
        return {
            fontSize: deviceBasedDynamicDimension(16, false, 1),
            color: colors.white,
            opacity: 1,
            fontFamily: "OpenSans-SemiBold",
            textAlign: 'center',
            paddingVertical: deviceBasedDynamicDimension(8, false, 1),
            paddingHorizontal: deviceBasedDynamicDimension(35, true, 1),
            lineHeight: deviceBasedDynamicDimension(22, false, 1)
        }
    },
    messageText: (props) => {
        const { colors } = props
        return {
            fontSize: deviceBasedDynamicDimension(16, false, 1),
            color: colors.textColor,
            opacity: 1,
            fontFamily: "OpenSans-SemiBold",
            textAlign: 'center',
            paddingVertical: deviceBasedDynamicDimension(8, false, 1),
            paddingHorizontal: deviceBasedDynamicDimension(35, true, 1),
            lineHeight: deviceBasedDynamicDimension(22, false, 1)
        }
    },
    logoVIew: {
        height: deviceBasedDynamicDimension(35, false, 1),
        width: deviceBasedDynamicDimension(140, true, 1),
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: deviceBasedDynamicDimension(10, false, 1)
    },
    singleView: (props) => {
        const { colors } = props
        return {
            borderRadius: deviceBasedDynamicDimension(10, false, 1),
            borderWidth: 1,
            borderColor: colors.borderColor,
            marginHorizontal: deviceBasedDynamicDimension(5, true, 1),
            marginVertical: deviceBasedDynamicDimension(5, false, 1),
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50
        }
    },
    singleViewSelected: (props) => {
        const { colors } = props
        return {
            borderRadius: deviceBasedDynamicDimension(10, false, 1),
            borderWidth: 1,
            borderColor: colors.primary,
            marginHorizontal: deviceBasedDynamicDimension(5, true, 1),
            marginVertical: deviceBasedDynamicDimension(5, false, 1),
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50
        }
    }

})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles