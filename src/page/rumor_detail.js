import React, {Component} from 'react';
import {Platform, StyleSheet, StatusBar, View,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
export default class Rumor extends React.Component {
  render() {
    return (
      <View style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
         <Text>sdasdf</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});
