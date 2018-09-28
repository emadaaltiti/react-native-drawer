import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOpacity: 0.1
  },
  home: {
    fontSize: 17,
    alignSelf: "center",
    color: "#5e6772",
    marginTop: 10
  }
});
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.home}>Home</Text>
      </View>
    );
  }
}

export default Home;
