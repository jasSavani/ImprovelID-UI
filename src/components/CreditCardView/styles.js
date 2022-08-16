import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    cardView:{
        borderRadius:deviceBasedDynamicDimension(17,false,1),
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: 'white', 
        paddingVertical:deviceBasedDynamicDimension(20,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(22,true,1)
    },
    imageView:{
        width:deviceBasedDynamicDimension(45,true,1),
        alignItems:'center',
        justifyContent:'center',
        height:deviceBasedDynamicDimension(28,false,1),
        marginVertical:deviceBasedDynamicDimension(9,false,1)
    },
    iconView:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    },
    bodyView:{
        paddingLeft:deviceBasedDynamicDimension(2,true,1)
    },
    cardNumbertext:{
        paddingVertical:deviceBasedDynamicDimension(10,false,1),
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(31,false,1),
        fontSize: deviceBasedDynamicDimension(23,false,1),
        letterSpacing:deviceBasedDynamicDimension(4,true,1),
        opacity: 1,
        color:colors.white,
        textAlign:'justify'
    },
    secondView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:deviceBasedDynamicDimension(14,false,1)
    },
    flexView:{
        flex:1,
        marginHorizontal:deviceBasedDynamicDimension(1,true,1),
    },
    keyText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(18,false,1),
        fontSize: deviceBasedDynamicDimension(13,false,1),
        opacity: 1,
        color:colors.cardKeyText,
        textTransform:"uppercase"
    },
    valueText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(23,false,1),
        fontSize: deviceBasedDynamicDimension(17,false,1),
        opacity: 1,
        color:colors.white,
    }
})
const Styles = {
    styles
};
export default Styles