/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, StatusBar, View} from 'react-native';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

//redux 
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/store.js';


//引入路由文件
import { router } from './src/router';

//import Loading from './src/page/components/loading'
const store = configureStore();//创建store
const AppContainer = createAppContainer(router);
export default class App extends React.Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <AppContainer  />
    );
  }
}
/*
<Loading></Loading>

*/
const styles = StyleSheet.create({
  
});
