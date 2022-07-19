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
    topView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingTop:deviceBasedDynamicDimension(16,false,1)
    },
    iconContainer:{
        height:deviceBasedDynamicDimension(49,false,1),
        width:deviceBasedDynamicDimension(49,false,1),
        borderRadius:deviceBasedDynamicDimension(13,false,1),
        backgroundColor:'red',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'

    },
    titleText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(17,false,1),
        fontSize: deviceBasedDynamicDimension(13,false,1),
        opacity: 1,
        color:colors.identitytabtext,
        paddingTop:deviceBasedDynamicDimension(6,false,1),
        textAlign:'center'
    },
    iconView:{
        height:deviceBasedDynamicDimension(22,false,1),
        width:deviceBasedDynamicDimension(22,false,1),
        resizeMode:'contain'
    },

    listView:{
        flexGrow:1,
        paddingHorizontal:deviceBasedDynamicDimension(24,true,1),
        paddingBottom:deviceBasedDynamicDimension(19,false,1)
    }
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles