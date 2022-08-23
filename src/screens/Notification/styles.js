import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA"
    },
    listView:{
        flex:1,
        paddingHorizontal:deviceBasedDynamicDimension(18,true,1),
        paddingTop:deviceBasedDynamicDimension(3,false,1),
        paddingBottom:deviceBasedDynamicDimension(5,false,1)
    },
})
const Styles = {
    styles
};
export default Styles