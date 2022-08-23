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
        backgroundColor: "#F8F9FA",
        paddingBottom:deviceBasedDynamicDimension(10,false,1)
    },
    oyerMainview: {
        flex: 1,
        justifyContent: 'center'
    },
    mainView: {
        // flex: 1,
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
        paddingVertical: deviceBasedDynamicDimension(12, false, 1),
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
    },
    centerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: deviceBasedDynamicDimension(25, true, 1),
        // borderBottomColor: colors.borderColor,
        // borderBottomWidth: 1,
        paddingBottom: deviceBasedDynamicDimension(10, false, 1)
    },
    iconContainer: {
        height: deviceBasedDynamicDimension(49, false, 1),
        width: deviceBasedDynamicDimension(49, false, 1),
        borderRadius: deviceBasedDynamicDimension(13, false, 1),
        backgroundColor: 'red',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: deviceBasedDynamicDimension(7, true, 1)

    },
    titleText: {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(17, false, 1),
        fontSize: deviceBasedDynamicDimension(13, false, 1),
        opacity: 1,
        color: colors.identitytabtext,
        paddingTop: deviceBasedDynamicDimension(6, false, 1),
        textAlign: 'center'
    },
    iconView: {
        height: deviceBasedDynamicDimension(22, false, 1),
        width: deviceBasedDynamicDimension(22, false, 1),
        resizeMode: 'contain'
    },
    bottomView:{
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:deviceBasedDynamicDimension(12,false,1),
        alignItems:'center',
    },
    bottomText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(22, false, 1),
        fontSize: deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingHorizontal:deviceBasedDynamicDimension(7,true,1)
    },
    imgeTopView:(ratio)=>{return{
        width:'100%',
        resizeMode:'contain',
        height:"auto",
        aspectRatio:ratio,
        alignSelf:'center'
    }},
    visualText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingHorizontal:deviceBasedDynamicDimension(25,true,1),
        paddingTop:deviceBasedDynamicDimension(15,false,1)
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles