import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import TestButton from './src/components/TestButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Don't press the button!</Text>

      <View style={styles.testButton}>
        <TestButton label="I am a button" />
      </View>
      
      <StatusBar style="auto" />
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
  testButton: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
