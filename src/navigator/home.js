import { createBottomTabNavigator } from "react-navigation";
import React, { Component } from "react";
import { Image } from "react-native";
import Project from "../pages/Home/project";
import Map from "../pages/Home/map";
import Chart from "../pages/Home/chart";
import Setting from "../pages/Home/setting";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const HomePage = createBottomTabNavigator(
  {
    Project: {
      screen: Project,
      navigationOptions: {
        tabBarLabel: "项目",
        tabBarIcon: ({ tintColor, focused }) => {
          const _color = focused ? "#2789ef" : "gray";
          return (
            <FontAwesome
              style={{
                color: _color
              }}
              name="home"
              size={24}
            />
          );
        }
      }
    },
    chart: {
      screen: Chart,
      navigationOptions: {
        tabBarLabel: "报表",
        tabBarIcon: ({ tintColor, focused }) => {
          const _color = focused ? "#2789ef" : "gray";
          return (
            <FontAwesome
              style={{
                color: _color
              }}
              name="bar-chart"
              size={24}
            />
          );
        }
      }
    },
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarLabel: "地图",
        tabBarIcon: ({ tintColor, focused }) => {
          const _color = focused ? "#2789ef" : "gray";
          return (
            <FontAwesome
              style={{
                color: _color
              }}
              name="map"
              size={24}
            />
          );
        }
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarLabel: "设置",
        tabBarIcon: ({ tintColor, focused }) => {
          const _color = focused ? "#2789ef" : "gray";
          return (
            <FontAwesome
              style={{
                color: _color
              }}
              name="cog"
              size={24}
            />
          );
        }
      }
    }
  },
  {
    initialRouteName: "Project", // 设置默认的页面
    backBehavior: null, // 点击返回退到上级界面
    tabBarOptions: {
      style: {
        // 整体TabBar的样式
        height: 56,
        padding: 5
      },
      tabStyle: {
        // TabBar内单独tab的样式
        height: 48
      },
      labelStyle: {
        // TabBar内单独tab的文字样式
        fontSize: 12
      }
    },
    labelStyle: {
      color: "#2789ef"
    },
    swipeEnabled: true,
    animationEnabled: true,
    activeTintColor: "#2789ef",
    inactiveTintColor: "gray"
  }
);

export default HomePage;
