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
    backArrowView:{
        marginTop:deviceBasedDynamicDimension(53,false,1),
        marginLeft:deviceBasedDynamicDimension(25,true,1),
        paddingHorizontal:deviceBasedDynamicDimension(5,true,1),
        paddingVertical:deviceBasedDynamicDimension(10,false,1),
        alignSelf:'flex-start'
    },
    backArrowImage:{
        height:deviceBasedDynamicDimension(17,false,1),
        width:deviceBasedDynamicDimension(23,true,1),
        resizeMode:'contain'
    },
    firstView:{
        paddingTop:deviceBasedDynamicDimension(171,false,1),
        paddingBottom:deviceBasedDynamicDimension(49,false,1)

    },
    passportimage:{
        height:deviceBasedDynamicDimension(27,false,1),
        width:deviceBasedDynamicDimension(21,true,1),
        resizeMode:'contain'
    },
    docImage:{
        height:deviceBasedDynamicDimension(20,false,1),
        width:deviceBasedDynamicDimension(29,true,1),
        resizeMode:'contain'
    },
    certificateimage:{
        height:deviceBasedDynamicDimension(26,false,1),
        width:deviceBasedDynamicDimension(21,true,1),
        resizeMode:'contain'
    },
    bottomView:{
        marginTop:deviceBasedDynamicDimension(26,false,1),
        marginBottom:deviceBasedDynamicDimension(26,false,1),
    },
    bigImage:{
        position:'absolute',
        top:0,
        alignSelf:'center',
        height:deviceBasedDynamicDimension(210,false,1),
        width:deviceBasedDynamicDimension(210,true,1),
        resizeMode:'contain'
    },
    Text:{

    },
    identityText:(props)=>{
        const { colors } = props
        return{
            fontSize: deviceBasedDynamicDimension(20, true, 1),
            color: colors.darkTextColor,
            opacity: 1,
            fontFamily: "OpenSans-Bold",
            textAlign: 'center',
            paddingVertical: deviceBasedDynamicDimension(10, false, 1)
        }
    },
    selectionText:(props)=>{
        const { colors } = props
        return{
            fontSize: deviceBasedDynamicDimension(15, true, 1),
            color: colors.textColor,
            opacity: 1,
            fontFamily: "OpenSans-SemiBold",
            textAlign: 'center',
            paddingLeft:deviceBasedDynamicDimension(39,true,1),
            paddingRight:deviceBasedDynamicDimension(44,true,1)
        }
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