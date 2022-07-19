
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
    boxView:{
        height:deviceBasedDynamicDimension(110,false,1),
        width:deviceBasedDynamicDimension(108,true,1),
        marginHorizontal:deviceBasedDynamicDimension(5,true,1),
        backgroundColor:"white",
        marginBottom:deviceBasedDynamicDimension(13,false,1),
        shadowColor:'rgba(0, 0, 0, 0.6)',
        shadowOffset:{
            height:deviceBasedDynamicDimension(4,false,1),
            width:0
        },
        elevation:deviceBasedDynamicDimension(4,false,1),
        shadowRadius:deviceBasedDynamicDimension(5,false,1),
        borderRadius:deviceBasedDynamicDimension(10,false,1),
        paddingBottom:deviceBasedDynamicDimension(18,false,1),
        paddingTop:deviceBasedDynamicDimension(12,false,1),
        alignItems:'center'
    },
    menuView:{
        alignSelf:'flex-end',
        marginRight:deviceBasedDynamicDimension(12,true,1),
        // height:deviceBasedDynamicDimension(11,false,1),
        // width:deviceBasedDynamicDimension(3,true,1),
    },
    imageView:{
        flex:1,
        paddingVertical:deviceBasedDynamicDimension(3,false,1),
        justifyContent:'center',
        alignItems:'center',
        width:'88%'
    },
    nameText:{
        fontSize:deviceBasedDynamicDimension(14,false,1),
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        opacity: 1,
        color:'black',
        paddingHorizontal:deviceBasedDynamicDimension(12,true,1)
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles