import React, { Component } from "react";
import { View, StyleSheet, WebView, Platform } from "react-native";
import HeaderComponent from "../../components/header";
import Dimensions from "Dimensions";
export default class ChartScreen extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      loadingShow: true
    };
  }
  //渲染Dom
  static navigationOptions = {
    header: null //隐藏顶部导航栏
  };
  render() {
    const source =
      Platform.OS == "ios"
        ? require("../../webview/chart/index.html")
        : { uri: "file:///android_asset/webview/chart/index.html" };
    return (
      <View style={styles.container}>
        <HeaderComponent title="报表" />
        <WebView
          originWhitelist={["*"]}
          contentInset={{ top: 0, left: 0 }}
          automaticallyAdjustContentInsets={true}
          startInLoadingState={false}
          source={source}
          scalesPageToFit={Platform.OS == "ios" ? true : false}
          style={{ width: Dimensions.get("window").width }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: "100%",
    alignItems: "center"
  }
});
