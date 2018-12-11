import React, {
  Component
} from "react";
import LoginScreen from "../pages/login";
import HomeScreen from "../navigator/home";
import WelcomeScreen from '../pages/welcome';
import SearchScreen from '../pages/search';
//import Chart from "../pages/Home/chart";
import {
  createStackNavigator
} from "react-navigation";

export default createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
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
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      header: null
    }
  }
});