import React, {
  Component
} from "react";
import LoginScreen from "../pages/login";
import HomeScreen from "../navigator/home";
//import Chart from "../pages/Home/chart";
import {
  createStackNavigator
} from "react-navigation";

export default createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
});