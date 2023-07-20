import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme }) {
    
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  button: {
    borderRadius: 80,
    borderColor: '#fff',
    borderWidth: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#c5ede8',
  },
  buttonLabel: {
    color: '#000000',
    fontSize: 13,
  },
});
