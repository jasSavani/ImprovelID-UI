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
        paddingVertical:deviceBasedDynamicDimension(8,false,1),
        paddingHorizontal:deviceBasedDynamicDimension(16,true,1),
    },
    titleText:{
        fontFamily: "OpenSans-Bold",
        lineHeight: deviceBasedDynamicDimension(23, false, 1),
        fontSize: deviceBasedDynamicDimension(17, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
    },
    singleView:{
        flexDirection:'row',
        marginVertical:deviceBasedDynamicDimension(13,false,1)
    },
    leftView:{
        width:deviceBasedDynamicDimension(4,true,1),
        height:deviceBasedDynamicDimension(15,false,1),
        backgroundColor:colors.primary,
        marginTop:deviceBasedDynamicDimension(5,false,1)
    },
    rightView:{
        paddingHorizontal:deviceBasedDynamicDimension(9,true,1),
    },
    subText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(19, false, 1),
        fontSize: deviceBasedDynamicDimension(14, false, 1),
        opacity: 1,
        color: colors.darkTextColor,
        paddingTop:deviceBasedDynamicDimension(4,false,1)
    },
    logoView:{
        height:deviceBasedDynamicDimension(131,false,1),
        borderRadius:deviceBasedDynamicDimension(12,false,1),
        backgroundColor:colors.primary,
        marginVertical:deviceBasedDynamicDimension(8,false,1),
        justifyContent:'center',
        alignItems:'center'
    },
    imagView:{
        height:'70%',
        width:'90%',
        resizeMode:'center'
    },
    flatlistView:{
        marginTop:deviceBasedDynamicDimension(13,false,1)
    }
})
const Styles = {
    styles
};
export default Styles