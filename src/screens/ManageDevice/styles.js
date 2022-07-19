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
        backgroundColor: "transparent"
    },
    titleText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(27,false,1),
        fontSize: deviceBasedDynamicDimension(20,false,1),
        opacity: 1,
        color:'white'
    },
    containerStyle:{
        paddingHorizontal:deviceBasedDynamicDimension(18,true,1),
        paddingVertical:deviceBasedDynamicDimension(16,false,1)
    },
    deviceOuterView:{
        borderRadius:deviceBasedDynamicDimension(10,false,1),
        minHeight:deviceBasedDynamicDimension(81,false,1),
        shadowColor:'rgba(0, 0, 0, 0.6)',
        shadowOffset:{
            height:deviceBasedDynamicDimension(4,false,1),
            width:0
        },
        elevation:deviceBasedDynamicDimension(4,false,1),
        shadowRadius:deviceBasedDynamicDimension(5,false,1),
        flexDirection:'row',
        backgroundColor:'white',
        marginVertical:deviceBasedDynamicDimension(9,false,1)
    },
    outerview:{
        marginTop:deviceBasedDynamicDimension(11,false,1),
        marginLeft:deviceBasedDynamicDimension(11,true,1),
        overflow: 'hidden', 
        padding: deviceBasedDynamicDimension(10,false,1), 
    },
    deviceimageView:{
        height:deviceBasedDynamicDimension(32,false,1),
        width:deviceBasedDynamicDimension(32,false,1),
        marginTop:deviceBasedDynamicDimension(21,false,1),
        marginLeft:deviceBasedDynamicDimension(21,true,1),
        borderRadius:deviceBasedDynamicDimension(7,false,1),
        shadowColor:'rgba(0, 0, 0, 1)',
        shadowOpacity:0.1,
        shadowOffset:{
            height:deviceBasedDynamicDimension(4,false,1),
            width:0
        },
        elevation:deviceBasedDynamicDimension(4,false,1),
        shadowRadius:deviceBasedDynamicDimension(4,false,1),
        justifyContent:'center',
        alignItems:'center'
    },
    centerView:{
        flex:1,
        paddingHorizontal:deviceBasedDynamicDimension(13,true,1),
        paddingTop:deviceBasedDynamicDimension(18,false,1)
    },
    rightArrow:{
        height:deviceBasedDynamicDimension(14,false,1),
        width:deviceBasedDynamicDimension(7,true,1),
        marginRight:deviceBasedDynamicDimension(15,true,1),
        alignSelf:'center',
    },
    nameText: (props) => {
        const { colors } = props
        return {
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(25,false,1),
        fontSize: deviceBasedDynamicDimension(18,false,1),
        opacity: 1,
        color:colors.darkTextColor
    }},
    subnametext: (props) => {
        const { colors } = props
        return {
        fontFamily: "OpenSans-Regular",
        lineHeight: deviceBasedDynamicDimension(20,false,1),
        fontSize: deviceBasedDynamicDimension(15,false,1),
        opacity: 1,
        color:colors.textColor
    }}
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles