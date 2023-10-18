import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Bnt } from './Components/Bnt';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Animations</Text>
      
      <Bnt title={"Press me"} />
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
