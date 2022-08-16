import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    cardView:{
        paddingVertical:deviceBasedDynamicDimension(20,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(21,true,1),
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:colors.cardborderColor,
        borderRadius:deviceBasedDynamicDimension(15,false,1),
        marginVertical:deviceBasedDynamicDimension(5,false,1),
        backgroundColor:colors.white
    },
    selectedcardView:{
        paddingVertical:deviceBasedDynamicDimension(20,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(21,true,1),
        flexDirection:'row',
        alignItems:'center',
        borderWidth:2,
        borderColor:colors.selectedCardView,
        borderRadius:deviceBasedDynamicDimension(15,false,1),
        marginVertical:deviceBasedDynamicDimension(5,false,1),
        backgroundColor:colors.white
    },
    imageView:{
        width:deviceBasedDynamicDimension(48,true,1),
        alignItems:'center',
        justifyContent:'center',
        height:deviceBasedDynamicDimension(32,false,1)
    },
    centerView:{
        flex:1,
        paddingHorizontal:deviceBasedDynamicDimension(13,true,1)
    },
    rightView:{
        height:deviceBasedDynamicDimension(16,false,1),
        width:deviceBasedDynamicDimension(6,true,1),
        justifyContent:'center',
        alignItems:'center',
    },
    iconView:{
        height:'100%',
        width:'100%',
        resizeMode:'center'
    },
    cardText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(25,false,1),
        fontSize: deviceBasedDynamicDimension(18,false,1),
        opacity: 1,
        color:colors.textColor,
        padding:0,
    }
})
const Styles = {
    styles
};
export default Styles