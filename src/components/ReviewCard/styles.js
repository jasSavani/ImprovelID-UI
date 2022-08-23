import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    cardView: {
        paddingVertical: deviceBasedDynamicDimension(25, false, 1),
        paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
        borderRadius: deviceBasedDynamicDimension(15, false, 1),
        marginVertical: deviceBasedDynamicDimension(6, false, 1),
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
        paddingHorizontal:deviceBasedDynamicDimension(2,true,1),
        flexDirection:'row',
        alignItems:'center',
        marginBottom:deviceBasedDynamicDimension(10,false,1)
    },
    leftView:{
        height:deviceBasedDynamicDimension(15,false,1),
        width:deviceBasedDynamicDimension(4,true,1),
        backgroundColor:colors.primary
    },
    reviewText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding: 0,
    },
    styleTextView:{
        flex:1,
        paddingHorizontal:deviceBasedDynamicDimension(10,true,1),
    },
    centerView:{
        paddingTop:deviceBasedDynamicDimension(17,false,1)
    },
    normalText:{
        fontFamily: "OpenSans-Regular",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingBottom:deviceBasedDynamicDimension(23,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(6,true,1)
    },
    boldText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding: 0,
    },
    btnView:{
        borderRadius:deviceBasedDynamicDimension(11,false,1)
    }
    

})
const Styles = {
    styles
};
export default Styles