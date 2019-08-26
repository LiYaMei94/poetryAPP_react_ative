import React, { Component } from 'react';
import {
  Text,
View,
TextInput,
TouchableHighlight,
PropTypes,
requireNativeComponent,
NativeModules,
ScrollView,
StyleSheet,
DeviceEventEmitter,
} from 'react-native';
export default class IdeaViewshoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  componentWillMount() { }

  componentDidMount() {
    
  }

  

  render() {
    return (
      <ScrollView style={styles.parent}>

        
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#f0f1f3'
  },

  
});
