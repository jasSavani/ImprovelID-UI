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
    cardView:{
        borderRadius:deviceBasedDynamicDimension(15,false,1),
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor:colors.white,
        marginVertical:deviceBasedDynamicDimension(9,false,1)
        // width:deviceBasedDynamicDimension(325,true,1)

    },
    imageView:{
        marginTop:deviceBasedDynamicDimension(14,false,1),
        width:'95%',
        height:'auto',
        // height:deviceBasedDynamicDimension(188,false,1),
        alignSelf:'center',
    },
    bottomView:{
        paddingVertical:deviceBasedDynamicDimension(19,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(17,true,1),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    viewBtn:{
        paddingVertical:deviceBasedDynamicDimension(5,false,1),
        paddingLeft:deviceBasedDynamicDimension(14,true,1),
        paddingRight:deviceBasedDynamicDimension(14,true,1),
        borderRadius:deviceBasedDynamicDimension(4,false,1),
        flexDirection:'row',
        alignItems:'center'
    },
    activeBtnView:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    activeIcon:{
        height:deviceBasedDynamicDimension(20,false,1),
        width:deviceBasedDynamicDimension(20,false,1),
        marginRight:deviceBasedDynamicDimension(5,true,1),
        resizeMode:'contain'

    },
    activeText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20,false,1),
        fontSize: deviceBasedDynamicDimension(15,false,1),
        opacity: 1,
        color:colors.identitytabtext,
        // textAlign:'center',
    },
    viewText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(18,false,1),
        fontSize: deviceBasedDynamicDimension(13,false,1),
        opacity: 1,
        color:colors.whiteText,
        textAlign:'center',
        paddingHorizontal:deviceBasedDynamicDimension(5,true,1)
    },
    eyeIcon:{
        height:deviceBasedDynamicDimension(11,false,1),
        width:deviceBasedDynamicDimension(16,true,1),
        resizeMode:'contain'
    },
    dlImage: (ratio) =>{
        return{
        height:'auto',
        width:"100%",
        resizeMode:'contain',
        aspectRatio:ratio,
    }}
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles