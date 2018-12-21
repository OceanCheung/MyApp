import React, { Component } from "react";
//import { PropTypes } from "prop-types";
import { MapView, MapTypes, Geolocation } from "react-native-baidu-map";

import {
  Button,
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableHighlight
} from "react-native";

import Dimensions from "Dimensions";
import HeaderComponent from "../../components/header";

export default class Map extends Component {
  constructor() {
    super();

    this.state = {
      mayType: MapTypes.NORMAL,
      zoom: 15,
      center: {
        longitude: 113.981718,
        latitude: 22.542449
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markers: [
        {
          longitude: 113.981718,
          latitude: 22.542449,
          title: "世界之窗"
        },
        {
          longitude: 113.995516,
          latitude: 22.537642,
          title: ""
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor="#2789ef"
          barStyle="light-content"
        />
        <HeaderComponent title="地图" />
        <MapView
          trafficEnabled={this.state.trafficEnabled}
          baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
          zoom={this.state.zoom}
          mapType={this.state.mapType}
          center={this.state.center}
          marker={this.state.marker}
          markers={this.state.markers}
          style={styles.map}
          onMarkerClick={e => {
            //console.warn(JSON.stringify(e));
          }}
          onMapClick={e => {}}
        />
        <View style={styles.row}>
          <View style={styles.btn}>
            <Button
              title="常规"
              onPress={() => {
                this.setState({ mapType: MapTypes.NORMAL });
              }}
            />
          </View>

          <View style={styles.btn}>
            <Button
              title="卫星"
              onPress={() => {
                this.setState({ mapType: MapTypes.SATELLITE });
              }}
            />
          </View>

          <View style={styles.btn}>
            <Button
              title="定位"
              onPress={() => {
                //console.warn("center", this.state.center);
                Geolocation.getCurrentPosition()
                  .then(data => {
                    //console.warn(JSON.stringify(data));
                    this.setState({
                      zoom: 18,
                      marker: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        title: "你的位置"
                      },
                      center: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        rand: Math.random()
                      }
                    });
                  })
                  .catch(e => {
                    //console.warn(e, "error");
                  });
              }}
            />
          </View>

          {/* <View style={styles.btn}>
            <Button
              title="放大"
              onPress={() => {
                this.setState({ zoom: this.state.zoom + 1 });
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="缩小"
              onPress={() => {
                if (this.state.zoom > 0) {
                  this.setState({ zoom: this.state.zoom - 1 });
                }
              }}
            />
          </View> */}
          <View style={styles.btn}>
            <Button
              title="交通"
              onPress={() => {
                this.setState({
                  trafficEnabled: !this.state.trafficEnabled
                });
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="热力图"
              onPress={() => {
                this.setState({
                  baiduHeatMapEnabled: !this.state.baiduHeatMapEnabled
                });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    //flexDirection: "row",
    position: "absolute",
    height: 200,
    top: 40,
    right: 10,
    padding: 10
  },
  btn: {
    marginTop: 5
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  header: {
    width: "100%",
    backgroundColor: "#2789ef",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 14
  },
  map: {
    width: "100%",
    height: Dimensions.get("window").height,
    marginBottom: 16
  }
});
