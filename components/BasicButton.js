import { TouchableOpacity,Text, } from 'react-native';

const BasicButton = (props) =>{

    return (
        <TouchableOpacity style={{
            backgroundColor: props.type == 'primary' ? '#D370E3' : '#000',
            paddingVertical: 16,
            paddingHorizontal: 32,
            borderRadius: 8,
        }}
        onPress={props.onPress}>
            <Text style={{color:'#fff',fontSize:16,fontWeight:'500', textAlign: 'center' }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}
export default BasicButton;