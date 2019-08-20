/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry,Text,StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//属性设置开始
import _ from 'lodash';
//0.56(包括)版本之后
Text.render = _.wrap(Text.render, function (func, ...args) {
    let originText = func.apply(this, args)
    return React.cloneElement(originText, {allowFontScaling: false,style:[//allowFontScaling是text的字体大小不随系统字体大小的改变而改变
        originText.props.style,
        styles.defaultFontFamily
    ]})
})
var styles = StyleSheet.create({
    defaultFontFamily:{//其他属性
        //color:'#3E3E3E'
    }
})
AppRegistry.registerComponent(appName, () => App);
