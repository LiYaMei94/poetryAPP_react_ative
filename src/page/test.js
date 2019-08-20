import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View,ScrollView,NativeModules, UIManager, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';

export default class Rumor extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  
  render() {
    return (
      <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={[styles.container]}>
          
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});