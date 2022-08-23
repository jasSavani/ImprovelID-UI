import { StyleSheet } from 'react-native';
import { deviceBasedDynamicDimension } from '../../utils';

export const styles = ({ colors } = props) => StyleSheet.create({
    smallView: {
       height:deviceBasedDynamicDimension(34,false,1),
       width:deviceBasedDynamicDimension(34,false,1),
       justifyContent:'center',
       alignItems:'center',
       borderRadius:deviceBasedDynamicDimension(8,false,1)
    },
    imageView : (propssmall) => {
        return {
        height: propssmall.height ?? '50%',
        width:propssmall.width ?? '70%',
        alignSelf:'center'
    }}
})
const Styles = {
    styles
};
export default Styles