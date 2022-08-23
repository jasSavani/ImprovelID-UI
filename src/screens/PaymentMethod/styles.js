import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        paddingHorizontal:deviceBasedDynamicDimension(18,true,1),
        paddingVertical:deviceBasedDynamicDimension(9,false,1)
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
        marginVertical:deviceBasedDynamicDimension(9,false,1)
    },
    btnView:{
        alignSelf:'center',
    },
    smallBtn:{
        paddingVertical:deviceBasedDynamicDimension(8,false,1)
    },
    titleView:{
        paddingTop:deviceBasedDynamicDimension(18,false,1),
        paddingBottom:deviceBasedDynamicDimension(9,false,1)
    },
    titleText:{
        fontFamily: "OpenSans-SemiBold",
        lineHeight: deviceBasedDynamicDimension(20,false,1),
        fontSize: deviceBasedDynamicDimension(15,false,1),
        opacity: 1,
        color:colors.textColor,
        padding:0,
    },
})
const Styles = {
    styles
};
export default Styles