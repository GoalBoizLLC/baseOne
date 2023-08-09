import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import ButtonComponent from './src/components/TestButton';

interface TestButtonProps {
  label: string;
}

 const App: React.FC<TestButtonProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text>Don't press the button!</Text>

      <View style={styles.testButton}>
        <ButtonComponent label="I am a button" />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

export default App

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
