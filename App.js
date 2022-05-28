import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BasicButton from './components/BasicButton';
import BasicInput from './components/BasicInput';

export default function App() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'stretch', width: '100%'}}>
        <BasicInput label ='Username' value = {username} onChangeText = {(val) =>{setUsername(val)}}/>
        <BasicInput label ='Password' value = {password} onChangeText = {(val) =>{setPassword(val)}}/>
        <BasicButton title="Login" type="primary" onPress={()=>{ console.log('pressed') }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
