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
    cardView: (props) => {
        const { colors } = props
        return {
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: deviceBasedDynamicDimension(25, true, 1),
            borderRadius: deviceBasedDynamicDimension(13, false, 1),
            backgroundColor: colors.white,
            shadowColor: colors.lightShadow,
            shadowOffset: {
                height: 4,
                width: 0
            },
            shadowRadius: deviceBasedDynamicDimension(15, false, 1),
            elevation: deviceBasedDynamicDimension(4, false, 1),
        }
    },
    containerView: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    frameView: (props) => {
        const { colors } = props
        return {
        height:deviceBasedDynamicDimension(236, false, 1),
        width:deviceBasedDynamicDimension(336, true, 1),
        borderWidth:deviceBasedDynamicDimension(1,false,1),
        borderStyle:'dashed',
        borderColor:colors.white,
        borderRadius:deviceBasedDynamicDimension(10,false,1),
        overflow:'hidden',
        alignItems:'center',
        alignSelf:'center'
    }},
    smallCamera:{
        height:deviceBasedDynamicDimension(220, false, 1),
        width:deviceBasedDynamicDimension(320, true, 1),
        borderRadius:deviceBasedDynamicDimension(10,false,1),
        overflow:'hidden',
        alignItems:'center',
        alignSelf:'center'
    }, 
    headerView:{
        paddingTop:deviceBasedDynamicDimension(40,false,1),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    crossView:{
        height:deviceBasedDynamicDimension(18,false,1),
        width:deviceBasedDynamicDimension(18,false,1),
        marginHorizontal:deviceBasedDynamicDimension(40,true,1),
        justifyContent:'center',
        alignItems:'center'
    },
    titleText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        color: colors.whiteText,
        opacity: 1,
        fontFamily: "OpenSans-Bold",
        textAlign:'center'
    }},
    btnView:{
        height:deviceBasedDynamicDimension(73,false,1),
        width:deviceBasedDynamicDimension(73,false,1),
        marginVertical:deviceBasedDynamicDimension(48,false,1),
        justifyContent:'center',
        alignItems:'center'
    },
    btnImage:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    },
    subtitleText: (props) => {
        const { colors } = props
        return {
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        color: colors.borderColor,
        opacity: 1,
        fontFamily: "OpenSans-SemiBold",
        textAlign:'center',
        marginHorizontal:deviceBasedDynamicDimension(71,true,1),
        paddingTop:deviceBasedDynamicDimension(10,false,1)
    }}
})
const Styles = {
    ButtonContainer,
    styles
};
export default Styles