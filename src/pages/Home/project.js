import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HeaderComponent from "../../components/header";

export default class ProjectScreen extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> 我是项目页面 </Text>
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
