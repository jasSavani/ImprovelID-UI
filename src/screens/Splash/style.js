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
    },
    topLogoView:{
        marginLeft:deviceBasedDynamicDimension(22,true,1),
        marginRight:deviceBasedDynamicDimension(23,true,1),
        marginTop:deviceBasedDynamicDimension(139,false,1),
        height:deviceBasedDynamicDimension(105,false,1),
    },
    smallLogo:{
        height:deviceBasedDynamicDimension(73,false,1),
        marginLeft:deviceBasedDynamicDimension(69,true,1),
        marginRight:deviceBasedDynamicDimension(76,true,1),
        marginBottom:deviceBasedDynamicDimension(24,false,1),
        marginTop:"auto",
    },
    centerImage:{
        marginTop:deviceBasedDynamicDimension(78,false,1),
        marginHorizontal:deviceBasedDynamicDimension(65,true,1),
        height:deviceBasedDynamicDimension(246,false,1),
    },
    poweredText:(props)=>{
        return{
            position:'absolute',
            alignSelf:'center',
            top:deviceBasedDynamicDimension(-9,false,1),
            fontSize:deviceBasedDynamicDimension(13,true,1),
            color: props.textColor,
            opacity:0.9,
            lineHeight:deviceBasedDynamicDimension(18,false,1),
            fontFamily:"OpenSans-Regular"
            
        }
    },
    animatinBg:{
        position:'absolute',
        top:deviceBasedDynamicDimension(203,false,1),
        width:deviceBasedDynamicDimension(480,true,1),
        bottom:deviceBasedDynamicDimension(129,false,1),
        left:deviceBasedDynamicDimension(-53,true,1),
        resizeMode:'contain',
        zIndex:1
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles