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
    titleText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(25, false, 1),
        fontSize: deviceBasedDynamicDimension(18, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        textAlign:'center',
        paddingVertical:deviceBasedDynamicDimension(25,false,1)
    },
    subtitleText:{
        fontFamily: "OpenSans-Regular",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.textColor,
        textAlign:'center',
    },
    stepView:{
        marginVertical:deviceBasedDynamicDimension(28,false,1)
    },
    singleStep:{
        flexDirection:'row'
    },
    leftView:{
        alignItems:'center',
        marginRight:deviceBasedDynamicDimension(12,true,1),

    },
    roundView:{
        justifyContent:'center',
        alignItems:'center',
        height:deviceBasedDynamicDimension(30,false,1),
        width:deviceBasedDynamicDimension(30,false,1),
        backgroundColor:colors.primary,
        borderRadius:deviceBasedDynamicDimension(30,false,1)
    },
    lineView:{
        width:deviceBasedDynamicDimension(2,true,1),
        height:deviceBasedDynamicDimension(70,false,1),
        backgroundColor:colors.borderColor,
        marginVertical:deviceBasedDynamicDimension(1,false,1)
    },
    numberText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.white,
        textAlign:'center',
    },
    descText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20, false, 1),
        fontSize: deviceBasedDynamicDimension(15, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingHorizontal:deviceBasedDynamicDimension(6,true,1)
    },
    bottomView: {
        marginBottom: deviceBasedDynamicDimension(27, false, 1),
        marginTop:'auto',
    },
   
})
const Styles = {
    styles
};
export default Styles