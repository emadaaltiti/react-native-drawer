import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(42, 55, 68)"
  },
  loadingText: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 10
  }
});

class Splash extends Component {
  componentDidMount() {
    AsyncStorage.getItem("app_token").then(token => {
      if (token) {
        this._navigate("Dashboard");
      } else {
        this._navigate("Login");
      }
    });
  }

  _navigate(screen) {
    setTimeout(() => {
      this.props.navigation.navigate(screen);
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"small"} />
        <Text style={styles.loadingText}>Loading ... </Text>
      </View>
    );
  }
}

export default Splash;
