import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 0,
    paddingLeft: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  field: {
    flex: 1,
    fontSize: 18,
    marginLeft: 5
  }
});

const Search = props => {
  return (
    <View style={styles.search}>
      <Icon size={25} name="md-search" />
      <TextInput
        {...props}
        style={styles.field}
        returnKeyType="search"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export { Search };
