import React from "react";
import {
  createStackNavigator,
  DrawerActions,
  createDrawerNavigator
} from "react-navigation";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import { TouchableOpacity, Image } from "react-native";
import Home from "../Component/Home/Home";
import LoginForm from "../Component/LoginForm/LoginForm";
import Splash from "../Component/Splash/Splash";

import DrawerScreen from "./DrawerScreen";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: DrawerScreen,
    headerMode: "none",
    drawerWidth: 300
  }
);

const MenuImage = ({ navigation }) => {
  // if (!navigation.state.isDrawerOpen) {
  //   return <Image source={require("../Assets/img/menu-button.png")} />;
  // }
  return (
    <Image
      style={{ marginLeft: 5 }}
      source={require("../Assets/img/menu-button.png")}
    />
  );
};

const RightHeader = () => {
  return (
    <Icon
      name="shopping-cart"
      style={{ marginRight: 10 }}
      size={35}
      color="#999"
    />
  );
};
const StackNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: ({ navigation }) => ({
        title: "",
        headerLeft: null,
        headerRight: null
      })
    },
    Login: {
      screen: LoginForm,
      headerMode: "none",
      header: null,
      headerTintColor: "#000000",
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Dashboard: {
      screen: DrawerNavigator
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title:
        typeof navigation.state.params === "undefined" ||
        typeof navigation.state.params.title === "undefined"
          ? "Home"
          : navigation.state.params.title,
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <MenuImage navigation={navigation} />
        </TouchableOpacity>
      ),
      // headerRight: (
      //   <TouchableOpacity>
      //     <RightHeader navigation={navigation} />
      //   </TouchableOpacity>
      // ),
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    })
  }
);
StackNavigator.propTypes = {
  navigation: PropTypes.object
};
export default StackNavigator;
