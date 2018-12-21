import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  ToastAndroid,
  StatusBar,
  Image
} from "react-native";
import { Item, Input, Icon, Fab, Button } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class ProjectScreen extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  goToSearchPage = () => {
    const { navigate } = this.props.navigation;
    navigate("Search");
  };
  handleBackPress = () => {
    if (this.props.navigation.isFocused()) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        BackHandler.exitApp(); //退出整个应用
        return false;
      }
      this.lastBackPressed = Date.now(); //按第一次的时候，记录时间
      ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT); //显示提示信息
      return true;
    }
  };
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor="#2789ef"
          barStyle="light-content"
        />
        <View style={styles.headerContainer}>
          <View style={styles.headerIconContainer}>
            <Image
              style={styles.imageItem}
              source={require("../../assets/images/user.png")}
            />
          </View>
          <View style={styles.headerInputContainer}>
            <Item
              style={
                {
                  height: 40,
                  borderColor: "#2789ef",
                  backgroundColor: "#ffffff"
                }
                //borderRadius: 15
              }
              rounded
            >
              <Icon style={{ color: "gray" }} active name="search" />
              <Input
                style={{ borderColor: "#2789ef", color: "gray" }}
                placeholder="请输入相关信息..."
                onFocus={this.goToSearchPage}
              />
            </Item>
          </View>
          <View style={styles.headerIconContainer}>
            <Icon style={{ color: "#ffffff" }} name="camera" />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <Icon name="share" />
            <Button style={{ backgroundColor: "#34A34F" }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: "#3B5998" }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: "#DD5144" }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#2789ef",
    height: 60
  },
  headerIconContainer: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  headerInputContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  imageItem: {
    width: 36,
    height: 36
  }
});
