import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA"
    },
    toptextView:{
        paddingTop:deviceBasedDynamicDimension(35,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(64,true,1),
        paddingBottom:deviceBasedDynamicDimension(12,false,1)
    },
    titleText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20,false,1),
        fontSize: deviceBasedDynamicDimension(15,false,1),
        opacity: 1,
        color:colors.textColor,
        padding:0,
        textAlign:'center'
    },
    bottomView: {
        marginBottom: deviceBasedDynamicDimension(37, false, 1),
        marginTop:'auto',
    },
    flatlistView:{
        paddingHorizontal:deviceBasedDynamicDimension(17,true,1),
        flexGrow:1
    },
    boxView:{
        borderRadius: deviceBasedDynamicDimension(13, false, 1),
        marginVertical: deviceBasedDynamicDimension(5, false, 1),
        shadowColor: colors.cardShadow,
        shadowOffset: {
            height: deviceBasedDynamicDimension(4, false, 1),
            width: 0
        },
        elevation: deviceBasedDynamicDimension(4, false, 1),
        shadowRadius: deviceBasedDynamicDimension(9, false, 1),
        backgroundColor: 'white',
        paddingVertical:deviceBasedDynamicDimension(17,false,1),
        flexDirection:'row',
        paddingHorizontal:deviceBasedDynamicDimension(11,true,1),
    },
    imageOuterview:{
        paddingHorizontal:deviceBasedDynamicDimension(12,true,1)
    },
    bodyView:{
        flex:1,
    },
    keyText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(20,false,1),
        fontSize: deviceBasedDynamicDimension(15,false,1),
        opacity: 1,
        color:colors.darkTextColor,
        padding:0,
    },
    valueText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19,false,1),
        fontSize: deviceBasedDynamicDimension(14,false,1),
        opacity: 1,
        color:colors.fido2valueText,
        paddingTop:deviceBasedDynamicDimension(2,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(1,true,1)
    }
})
const Styles = {
    styles
};
export default Styles