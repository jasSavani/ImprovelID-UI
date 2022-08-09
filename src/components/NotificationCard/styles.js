import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    boxView:{
        borderRadius: deviceBasedDynamicDimension(13, false, 1),
        marginVertical: deviceBasedDynamicDimension(12, false, 1),
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: 'white',
        paddingVertical:deviceBasedDynamicDimension(8,false,1)
    },
    titleView:{
        paddingHorizontal:deviceBasedDynamicDimension(17,true,1),
        paddingVertical:deviceBasedDynamicDimension(8,false,1),
        flex:1
    },
    titleText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.textColor,
    },
    flatlistView:{
        paddingLeft:deviceBasedDynamicDimension(14,true,1),
        paddingRight:deviceBasedDynamicDimension(7,true,1)
    },
    seperatorLine:{
        backgroundColor:colors.seperatorLineColor,
        height:deviceBasedDynamicDimension(1,false,1),
        width:'100%'
    },
    singleView:{
        paddingLeft:deviceBasedDynamicDimension(7,true,1),
        paddingRight:deviceBasedDynamicDimension(10,true,1),
        flexDirection:'row',
        paddingVertical:deviceBasedDynamicDimension(16,false,1),
    },
    bodyView:{
        paddingLeft:deviceBasedDynamicDimension(12,true,1),
        flex:1
    },
    listtitleView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:deviceBasedDynamicDimension(4,false,1)
    },
    listtitletext:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    timetext:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(18, false, 1),
        fontSize: deviceBasedDynamicDimension(13, false, 1),
        opacity: 1,
        color: colors.placeholderTextColor,
    },
    bodytext:{
        fontFamily: "OpenSans-Regular",
        lineHeight: deviceBasedDynamicDimension(18, false, 1),
        fontSize: deviceBasedDynamicDimension(13, false, 1),
        opacity: 1,
        color: colors.textColor,
    }
})
const Styles = {
    styles
};
export default Styles