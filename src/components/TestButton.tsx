import React from "react";
import { StyleSheet, View, Pressable, Text, Button, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface ButtonProps {
  label: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ label }) => {
  const simpleAlert = () =>
    Alert.alert(
      "Welcome",
      "This alert works!!",
      [{ text: "OK", onPress: () => console.log("please work!") }],
      {
        cancelable: true,
      }
    );

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={simpleAlert}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  button: {
    borderRadius: 80,
    borderColor: "#fff",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#c5ede8",
  },
  buttonLabel: {
    color: "#000000",
    fontSize: 13,
  },
});
