import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    cardView: {
        paddingVertical: deviceBasedDynamicDimension(15, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(15, true, 1),
        borderRadius: deviceBasedDynamicDimension(15, false, 1),
        marginVertical: deviceBasedDynamicDimension(7, false, 1),
        backgroundColor: colors.white,
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(20, false, 1),
        marginHorizontal:deviceBasedDynamicDimension(6,true,1),
    },
    topView:{
        flexDirection:'row',
        alignItems:'center'
    },
    imageView:{
        height:deviceBasedDynamicDimension(34,false,1),
        width:deviceBasedDynamicDimension(34,false,1),
        borderRadius:deviceBasedDynamicDimension(8,false,1),
        marginHorizontal:deviceBasedDynamicDimension(8,true,1),
        resizeMode:'cover'
    },
    textView:{
        flex:1,
    },
    nameText:{
        paddingHorizontal:deviceBasedDynamicDimension(4,true,1),
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(23,false,1),
        fontSize: deviceBasedDynamicDimension(17,false,1),
        opacity: 1,
        color:colors.darkTextColor,
    },
    roleText:{
        paddingHorizontal:deviceBasedDynamicDimension(4,true,1),
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19,false,1),
        fontSize: deviceBasedDynamicDimension(14,false,1),
        opacity: 1,
        color:colors.textColor,
        paddingTop:deviceBasedDynamicDimension(2,false,1)
    },
    centerView:{
        paddingTop:deviceBasedDynamicDimension(8,false,1),
        paddingLeft:deviceBasedDynamicDimension(10,true,1)
    },
    keyView:{
        width:deviceBasedDynamicDimension(70,true,1),
    },
    keyText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19,false,1),
        fontSize: deviceBasedDynamicDimension(14,false,1),
        opacity: 1,
        color:colors.grayText,
    },
    rowView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:deviceBasedDynamicDimension(7,false,1)
    }

})
const Styles = {
    styles
};
export default Styles