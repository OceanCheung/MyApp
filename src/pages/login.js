import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  Image
} from "react-native";

export default class LoginScreen extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }
  //渲染Dom
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor="#2789ef"
          barStyle="light-content"
        />
        <View style={styles.inputItemContainer}>
          <TextInput
            underlineColorAndroid="#7cb4ef"
            placeholderTextColor="#7cb4ef"
            style={styles.inputItem}
            placeholder="用户名/邮箱/电话号码"
          />
        </View>
        <View style={styles.inputItemContainer}>
          <TextInput
            underlineColorAndroid="#5ca6f3"
            password={true}
            placeholderTextColor="#5ca6f3"
            style={styles.inputItem}
            placeholder="密码"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigate("Home", {
                name: "Jane"
              })
            }
          >
            <Text style={styles.buttonItem}>登录</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgetPassContainer}>
          <Text style={styles.forgetPassItem}>忘记密码?</Text>
        </View>
        <View style={styles.imagesContainer}>
          <Image
            style={styles.imageItem}
            source={require("../assets/images/weixin.png")}
          />
          <Image
            style={styles.imageItem}
            source={require("../assets/images/qq.png")}
          />
          <Image
            style={styles.imageItem}
            source={require("../assets/images/weibo.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#2789ef"
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36
  },
  titleTxt: {
    color: "#88baef",
    fontSize: 18
  },
  inputItemContainer: {
    justifyContent: "center",
    width: "72%",
    marginTop: 30
  },
  inputItem: {
    fontSize: 15,
    textAlign: "center",
    color: "#88baef"
  },
  buttonContainer: {
    justifyContent: "center",
    width: "48%",
    height: 36,
    marginTop: 30,
    backgroundColor: "#2284e1",
    borderRadius: 15,
    borderColor: "#95c2f1",
    borderWidth: 1
  },
  buttonItem: {
    color: "#95c2f1",
    textAlign: "center"
  },
  forgetPassContainer: {
    justifyContent: "center",
    marginTop: 20
  },
  forgetPassItem: {
    color: "#95c2f1",
    textAlign: "center"
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  },
  imageItem: {
    width: 28,
    height: 28,
    marginLeft: 20,
    marginRight: 20
  }
});
