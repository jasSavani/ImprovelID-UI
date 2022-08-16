import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        paddingHorizontal:deviceBasedDynamicDimension(18,true,1),
        paddingVertical:deviceBasedDynamicDimension(9,false,1)
    },
    cardView:{
        paddingVertical:deviceBasedDynamicDimension(8,false,1),
    },
    cardDetailsView:{
        flex:1,
        marginVertical:deviceBasedDynamicDimension(9,false,1),
        borderRadius:deviceBasedDynamicDimension(15,false,1),
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: 'white', 
    },
    containerView:{
        flexGrow:1,
        paddingVertical:deviceBasedDynamicDimension(16,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(20,true,1),
    },
    blackTxt:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: "#8D8D8D",
        paddingTop:deviceBasedDynamicDimension(20,false,1),
    },
    boxView:{
        borderWidth:deviceBasedDynamicDimension(1,false,1),
        borderColor:"#B7B7B7",
        borderRadius:deviceBasedDynamicDimension(8,false,1),
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:deviceBasedDynamicDimension(14,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(18,true,1),
        marginVertical:deviceBasedDynamicDimension(7,false,1),
        maxHeight:deviceBasedDynamicDimension(52,false,1)
    },
    inputText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(22, false, 1),
        fontSize: deviceBasedDynamicDimension(16, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding:0
    },
    rowView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:'auto'
    },
    bottomView: {
        marginVertical: deviceBasedDynamicDimension(14, false, 1),
    },
})
const Styles = {
    styles
};
export default Styles