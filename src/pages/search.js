import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
  Text
} from "react-native";

const { width, height } = Dimensions.get("window"); //获取手机的宽和高

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor="#2789ef"
          barStyle="light-content"
        />
        <Text>我是搜索页面</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //必写
    width: "100%",
    height: "100%",
    alignItems: "center"
  }
});
