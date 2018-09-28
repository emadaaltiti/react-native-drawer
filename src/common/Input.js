import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 40
  },
  label: {
    fontSize: 14,
    paddingLeft: 20,
    flex: 1
  },
  input: {
    fontSize: 16,
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    paddingBottom: 10
  }
});

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{props.label}</Text>

      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={props.onChangeText}
        style={styles.input}
        autoCorrect={false}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export { Input };
