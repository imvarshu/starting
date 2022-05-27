import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BasicButton from './components/BasicButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'space-around'}}>
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
  },
});
