import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import Dimensions from "Dimensions";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width,
    backgroundColor: "#2789ef",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 14
  }
});
