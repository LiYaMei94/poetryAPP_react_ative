import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeaderImg: true,
      mine_content_wrap_bottom: new Animated.Value(30)
    }
  }
  componentDidMount() {


  }
  componentWillMount() {
    Animated.timing(
      this.state.mine_content_wrap_bottom,
      {
        toValue: 50,
        duration: 600,
      }
    ).start();
  }

  render() {
    const { isHeaderImg, mine_content_wrap_bottom } = this.state;
    return (
      <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
        <View style={styles.mine_top}>
          <View style={styles.mine_top_left}>
            <Text style={styles.mine_nickname}>辣辣的草莓酱</Text>
            <Text style={styles.mine_like}>获得 0 喜欢 • 已加入 8 天</Text>
          </View>
          <TouchableHighlight style={styles.mine_top_right}
            underlayColor='transparent'
            onPress={()=>this.props.navigation.push('MyHomepage')}
          >
            {
              isHeaderImg ?
                <Image style={styles.user_header_img} source={require('../assets/images/header.jpg')}></Image>
                : <Text style={[styles.iconStyle]}>{'\ue644'}</Text>
            }
          </TouchableHighlight>
        </View>
        <Animated.View style={[styles.mine_content_wrap, { bottom: mine_content_wrap_bottom }]}>
          <TouchableHighlight style={styles.mine_content_line} onPress={()=>this.props.navigation.push('MyHomepage')} underlayColor='white'>
            <View style={styles.mine_content_line_wrap}>
              <Text style={[styles.iconStyle,styles.mine_content_line_icon]}>{'\ue644'}</Text>
              <Text style={styles.mine_content_line_text}>我的主页</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.mine_content_line} onPress={this._onPressButton} underlayColor='white'>
            <View style={styles.mine_content_line_wrap}>
              <Text style={[styles.iconStyle,styles.mine_content_line_icon]}>{'\ue643'}</Text>
              <Text style={styles.mine_content_line_text}>喜欢的想法</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.mine_content_line} onPress={()=>this.props.navigation.push('ReadCalendar')} underlayColor='white'>
            <View style={styles.mine_content_line_wrap}>
              <Text style={[styles.iconStyle,styles.mine_content_line_icon]}>{'\ue685'}</Text>
              <Text style={styles.mine_content_line_text}>阅读日历</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.mine_content_line} onPress={()=>this.props.navigation.push('AuroraMessage')} underlayColor='white'>
            <View style={styles.mine_content_line_wrap}>
              <Text style={[styles.iconStyle,styles.mine_content_line_icon]}>{'\ue634'}</Text>
              <Text style={styles.mine_content_line_text}>消息通知</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.mine_content_line} onPress={this._onPressButton} underlayColor='white'>
            <View style={styles.mine_content_line_wrap}>
              <Text style={[styles.iconStyle,styles.mine_content_line_icon]}>{'\ue65a'}</Text>
              <Text style={styles.mine_content_line_text}>设置</Text>
            </View>
          </TouchableHighlight>
        </Animated.View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    position: "relative"
  },
  mine_top: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  mine_top_left: {
    flex: 1
  },
  mine_nickname: {
    color: '#090909',
    fontSize: 26,
  },
  mine_like: {
    color: '#ACB1B7',
    marginTop: 5,
  },
  mine_top_right: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#CCD2D9',
    justifyContent: "center",
    alignItems: 'center',
  },
  iconStyle: {
    fontFamily: "iconfont",
    fontSize: 45,
    color: '#8E9398'
  },
  user_header_img: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  mine_content_wrap: {
    width: '100%',
    height: 350,
    backgroundColor: 'white',
    borderRadius: 12,
    position: 'absolute',
    bottom: 50,
    right: 25,
    left: 25,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  mine_content_line:{
    width:"100%",
    height:50
  },
  mine_content_line_wrap:{
    width:"100%",
    height:'100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mine_content_line_icon:{
    width:35,
    justifyContent: "center",
    color:'#D5D5D5',
    fontSize:22
  },
  mine_content_line_text:{
    flex:1,
    marginLeft:5,
    color:'#000',
    fontSize:18
  }
});
