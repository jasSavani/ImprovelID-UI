
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
    
    searchBox:{
        paddingHorizontal:deviceBasedDynamicDimension(17,true,1),
        borderRadius:deviceBasedDynamicDimension(7,false,1),
        backgroundColor:'white',
        shadowColor:'rgba(0, 0, 0, 0.6)',
        shadowOffset:{
            height:deviceBasedDynamicDimension(2,false,1),
            width:0
        },
        elevation:deviceBasedDynamicDimension(2,false,1),
        shadowRadius:deviceBasedDynamicDimension(7,false,1),
        flexDirection:'row',
        alignItems:'center'
    },
    inputText:{
        paddingVertical:deviceBasedDynamicDimension(0,false,1),
        fontSize:deviceBasedDynamicDimension(15,false,1),
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        opacity: 1,
    },
    searchImage:{
        height:deviceBasedDynamicDimension(17,false,1),
        width:deviceBasedDynamicDimension(17,false,1),
        marginTop:deviceBasedDynamicDimension(17,false,1),
        marginBottom:deviceBasedDynamicDimension(12,false,1),
        resizeMode:'contain',
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles