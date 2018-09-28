import React, { Component } from "react";
import { NavigationActions, DrawerActions } from "react-navigation";
import PropTypes from "prop-types";
import {
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Text,
  View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RNRestart from "react-native-restart";
import { connect } from "react-redux";
import styles from "./SideMenu.style";

class DrawerScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        this.setState({
          user: JSON.parse(user)
        });
      }
    });
  }
  navigateToScreen = (route, title) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    this.props.navigation.setParams({ title: title });
  };

  _logout() {
    AsyncStorage.removeItem("app_token");
    this.props.navigation.navigate("Login");
    RNRestart.Restart();
  }
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.storyCounters}>
              <View style={styles.imgstoryCounters}>
                <Icon name="user" style={styles.iconCounter} />
                <Text style={styles.iconCounterText}>Username</Text>
              </View>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Home", "Home")}
              >
                Home
              </Text>
            </View>
          </View>
          <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={() => this._logout()}>
              Logout
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};
const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user
  };
};
export default connect(mapStateToProps)(DrawerScreen);
