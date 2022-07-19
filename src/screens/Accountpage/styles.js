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
        paddingVertical:deviceBasedDynamicDimension(13,false,1)
    },
    firstboxView:{
        backgroundColor:colors.white,
        flexDirection:'row',
        paddingVertical:deviceBasedDynamicDimension(14,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(17,true,1),
        borderRadius:deviceBasedDynamicDimension(10,false,1),
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        marginVertical:deviceBasedDynamicDimension(6,false,1),
        marginHorizontal:deviceBasedDynamicDimension(18,true,1)
    },
    profileImage:{
        height:deviceBasedDynamicDimension(65,false,1),
        width:deviceBasedDynamicDimension(65,false,1),
        resizeMode:'contain',
        borderRadius:deviceBasedDynamicDimension(14,false,1),
        marginRight:deviceBasedDynamicDimension(8,true,1)
    },
    textView:{
        flex:1,
        marginHorizontal:deviceBasedDynamicDimension(10,true,1),
        justifyContent:'center'
    },
    nameText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(24, false, 1),
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    emailText:{
        fontFamily: "OpenSans-Regular",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.textColor,
        marginVertical:deviceBasedDynamicDimension(3,false,1)
    },
    secondboxView:{
        paddingTop:deviceBasedDynamicDimension(12,false,1),
        paddingBottom:deviceBasedDynamicDimension(8,false,1),
        borderRadius:deviceBasedDynamicDimension(10,false,1),
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor:colors.white,
        marginHorizontal:deviceBasedDynamicDimension(18,true,1),
        marginVertical:deviceBasedDynamicDimension(6,false,1),
    },
    subfirstView:{
        flexDirection:'row',
        marginHorizontal:deviceBasedDynamicDimension(16,true,1),
        alignItems:'center',
        marginVertical:deviceBasedDynamicDimension(12,false,1)
    },
    subImageView:{
        height:deviceBasedDynamicDimension(35,false,1),
        width:deviceBasedDynamicDimension(35,false,1),
        borderRadius:deviceBasedDynamicDimension(8,false,1),
        marginRight:deviceBasedDynamicDimension(5,true,1),
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center'
    },
    subTextView:{
        flex:1,
        marginHorizontal:deviceBasedDynamicDimension(6,true,1),
        justifyContent:'space-between'
    },
    subText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    subLightText:{
        fontFamily: "OpenSans-Regular",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.textColor,
    },
        subSecondView:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:deviceBasedDynamicDimension(12,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(22,true,1)
    },
    darkText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(21, false, 1),
        fontSize: deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    righarrowView:{
        height:deviceBasedDynamicDimension(14,false,1),
        width:deviceBasedDynamicDimension(8,true,1),
        justifyContent:'center',
        alignItems:'center'
    },
    switchView:{
        marginRight:deviceBasedDynamicDimension(-10,true,1)
    },
    dropdownImage:{
        width:deviceBasedDynamicDimension(14,false,1),
        height:deviceBasedDynamicDimension(8,true,1),
        justifyContent:'center',
        alignItems:'center',
        marginRight:deviceBasedDynamicDimension(-5,true,1),
        tintColor:colors.darkTextColor
    },
    dropDownbtn:{
        backgroundColor: 'transparent', 
        height: '100%', 
        minWidth: '40%', 
    },
    dropdowntextView:{
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:deviceBasedDynamicDimension(12,true,1)
    },
    selectText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.dropdownText,
    },
    normalText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.textColor,
    },
    rowStyle:{
        maxHeight:deviceBasedDynamicDimension(50,false,1)
    }
    
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles