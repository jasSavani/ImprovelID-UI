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
    },
    scrollView:{
        paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
        paddingVertical: deviceBasedDynamicDimension(12, false, 1)
    },
    bottomView: {
        marginBottom: deviceBasedDynamicDimension(27, false, 1),
        marginTop: deviceBasedDynamicDimension(27, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(12, true, 1),
    },
    boxView:{
        borderWidth:deviceBasedDynamicDimension(1,false,1),
        borderColor:"#B7B7B7",
        borderRadius:deviceBasedDynamicDimension(8,false,1),
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:deviceBasedDynamicDimension(14,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(15,true,1),
        marginTop:deviceBasedDynamicDimension(11,false,1),
    },
    imageView:{
        height:deviceBasedDynamicDimension(24,false,1),
        width:deviceBasedDynamicDimension(24,false,1),
        borderRadius:deviceBasedDynamicDimension(24,false,1),
        overflow:'hidden',
        justifyContent:'center',
        alignSelf:'center',
    },
    countryNametext:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.placeholderTextColor,
        paddingHorizontal: deviceBasedDynamicDimension(5, true, 1),
    },
    dropdownImage:{
        height:deviceBasedDynamicDimension(5,false,1),
        width:deviceBasedDynamicDimension(9,true,1),
        marginHorizontal:deviceBasedDynamicDimension(2,true,1)
    },
    blackTxt:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(23, false, 1),
        fontSize: deviceBasedDynamicDimension(17, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingTop:deviceBasedDynamicDimension(20,false,1),
        paddingLeft:deviceBasedDynamicDimension(5,true,1),
        marginBottom:deviceBasedDynamicDimension(-3,false,1)
    },
    lightText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        paddingTop:deviceBasedDynamicDimension(20,false,1),
        opacity: 1,
        color: colors.placeholderTextColor,
        marginBottom:deviceBasedDynamicDimension(-3,false,1)
    },
    codeView:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:deviceBasedDynamicDimension(3,true,1),
        borderRightWidth:deviceBasedDynamicDimension(1,false,1),
        borderRightColor:colors.lightborderColor,
        marginRight:deviceBasedDynamicDimension(14,true,1)
    },
    codeText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: "#464242",
        paddingLeft:deviceBasedDynamicDimension(6,true,1)
    },
    inputText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding:0,
        flex:1,
        maxHeight:deviceBasedDynamicDimension(24,false,1)
    },
    addressText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding:0,
        minHeight:deviceBasedDynamicDimension(49,false,1),
        textAlignVertical:'top',
        flex:1
    },
    monthBox:{
        borderWidth:deviceBasedDynamicDimension(1,false,1),
        borderColor:"#B7B7B7",
        borderRadius:deviceBasedDynamicDimension(8,false,1),
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:deviceBasedDynamicDimension(14,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(15,true,1),
        marginTop:deviceBasedDynamicDimension(11,false,1),
        width:deviceBasedDynamicDimension(110,true,1),
    },
    yearBox:{
        borderWidth:deviceBasedDynamicDimension(1,false,1),
        borderColor:"#B7B7B7",
        borderRadius:deviceBasedDynamicDimension(8,false,1),
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:deviceBasedDynamicDimension(14,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(15,true,1),
        marginTop:deviceBasedDynamicDimension(11,false,1),
        width:deviceBasedDynamicDimension(87,true,1),
    },
    dobView:{
        marginTop:deviceBasedDynamicDimension(12,false,1)
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles