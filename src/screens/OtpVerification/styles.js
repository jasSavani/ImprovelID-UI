import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        paddingHorizontal:deviceBasedDynamicDimension(18,true,1),
        paddingVertical:deviceBasedDynamicDimension(9,false,1)
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
    imageouterView:{
        marginVertical:deviceBasedDynamicDimension(16,false,1),
        height:deviceBasedDynamicDimension(100,false,1),
        justifyContent:'center',
        alignItems:'center',
    },
    imageView:{
        resizeMode:'center',
        height:'100%',
        width:'100%',
    },
    titleText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(26, false, 1),
        fontSize: deviceBasedDynamicDimension(19, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        padding:0,
        textAlign:'center'
    },
    instructionView:{
        paddingHorizontal:deviceBasedDynamicDimension(4,true,1),
        marginTop:deviceBasedDynamicDimension(20,false,1),
    },
    instructionText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.textColor,
        padding:0,
        textAlign:'center'
    },
    textContainer:{
        width:deviceBasedDynamicDimension(40,true,1),
        height:deviceBasedDynamicDimension(40,true,1),
        borderRadius: 10,
        borderWidth:2,
        borderColor:colors.borderColor,
        justifyContent:'center',
        alignItems:'center',
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.textColor,
    },
    highlighttextContainer:{
        width:deviceBasedDynamicDimension(40,true,1),
        height:deviceBasedDynamicDimension(40,true,1),
        borderRadius: 10,
        borderWidth:2,
        borderColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.primary,
    },
    rowView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    inputBox:{
        width:'100%',
        height:deviceBasedDynamicDimension(50,false,1),
        marginVertical:deviceBasedDynamicDimension(25,false,1)
    },
    bottomView:{
        marginTop:deviceBasedDynamicDimension(22,false,1),
        marginBottom:deviceBasedDynamicDimension(16,false,1)
    },
    haventText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        textAlign:'center'
    },
    resendText:{
        color:colors.primary,
        textDecorationLine:"underline"
    },
    noteView:{
        marginVertical:deviceBasedDynamicDimension(30,false,1),
    },
    topnotchView:{
        paddingHorizontal:deviceBasedDynamicDimension(8,true,1),
        marginLeft:deviceBasedDynamicDimension(5,true,1),
        paddingVertical:deviceBasedDynamicDimension(2,false,1),
        marginBottom:deviceBasedDynamicDimension(-1,false,1),
        backgroundColor:colors.primary,
        alignSelf:'flex-start',
        borderTopRightRadius:deviceBasedDynamicDimension(8,false,1),
        borderTopLeftRadius:deviceBasedDynamicDimension(8,false,1)
    },
    stickyView:{
        borderWidth:1,
        borderColor:colors.primary,
        borderRadius:deviceBasedDynamicDimension(13,false,1),
        borderStyle:"dashed",
        padding:deviceBasedDynamicDimension(20,true,1),
    },
    noteTextView:{
        flexDirection:'row',
        alignItems:'flex-start',
        marginVertical:deviceBasedDynamicDimension(5,false,1)
    },
    noteText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    notetitletext:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.white,
    }
})
const Styles = {
    styles
};
export default Styles