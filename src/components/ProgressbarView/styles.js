import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    barView:{
        paddingBottom:deviceBasedDynamicDimension(17,false,1)
    },
    rowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:deviceBasedDynamicDimension(2,false,1)
    },
    leftView:{
        width:"88%",
        height:deviceBasedDynamicDimension(5,false,1),
        borderRadius:deviceBasedDynamicDimension(5,false,1),
        backgroundColor:'#EFEFEF',
        overflow:'hidden'
    },
    percentText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding: 0,
    },
    nameText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding: 0,
    },
    colorView : (value) => {
        return {
            width:`${value}%`,
            height:deviceBasedDynamicDimension(5,false,1),
            borderRadius:deviceBasedDynamicDimension(5,false,1),
            backgroundColor:'pink'
        }
    }


})
const Styles = {
    styles
};
export default Styles