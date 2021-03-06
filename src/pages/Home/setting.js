import React, { Component } from "react";
import { Text, View, Button, StyleSheet, StatusBar } from "react-native";
import HeaderComponent from "../../components/header";

export default class SettingScreen extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }
  //方法
  startLogin() {}
  //渲染Dom
  static navigationOptions = {
    header: null //隐藏顶部导航栏
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor="#2789ef"
          barStyle="light-content"
        />
        <HeaderComponent title="设置" />
        <Text> 我是设置 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  }
});
