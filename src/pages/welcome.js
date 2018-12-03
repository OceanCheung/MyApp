import React, { Component } from "react";
import { View, Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window"); //获取手机的宽和高

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flex: 1 //必写
  },
  image: {
    width, //等于width:width
    height
  }
});

export default class WelcomeScreen extends Component {
  //加载计时器
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate("Login"); //7秒后进入登录页
    }, 5000);
  }
  //卸载计时器
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer); //同时为真的才执行卸载
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          paginationStyle={{
            //小圆点位置 //为false时不显示控制按钮
            bottom: 70
          }}
          loop={false}
          autoplay={
            true //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
          }
          autoplayTimeout={2}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/welcome/1.jpg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/images/welcome/2.png")}
          />
        </Swiper>
      </View>
    );
  }
}
