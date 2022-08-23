import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        paddingHorizontal:deviceBasedDynamicDimension(9,true,1),
        paddingVertical:deviceBasedDynamicDimension(6,false,1)
    },
    marginRight:{
        paddingHorizontal:deviceBasedDynamicDimension(6,true,1),
        flex:0.5,
    },
    reviewView:{
        paddingTop:deviceBasedDynamicDimension(7,false,1),
        paddingBottom:deviceBasedDynamicDimension(23,false,1)
    }
})
const Styles = {
    styles
};
export default Styles