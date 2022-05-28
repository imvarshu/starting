import {TextInput, View, Text} from 'react-native';



const BasicInput = (props) => {
    return (
        <View>
            <Text style={{marginBottom: 10, fontSize: 16}}>{props.label}</Text>
<TextInput style={{
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    fontSize: 16,
    width: '100%'
}} onChangeText={props.onChangeText} value={props.value} />
</View>
    )
}
export default BasicInput;