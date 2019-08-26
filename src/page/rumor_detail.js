import React, { Component } from 'react';
import {
  Platform, StyleSheet, StatusBar, View, TouchableHighlight, Text, ScrollView, Image, Dimensions, FlatList
} from 'react-native';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
import LinearGradient from 'react-native-linear-gradient';
import Comment_modal from './components/comment_modal'
export default class commentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComment_moda: false
    }
  }

  _setComment_moda(isComment_moda, text) {
    if (text != '') {

    }
    this.setState({
      isComment_moda: isComment_moda,
    })
  }
  render() {
    const { isComment_moda } = this.state;
    return (
      <View style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
        <View style={[styles.title_bar, { height: 40 + STATUS_BAR_HEIGHT, paddingTop: STATUS_BAR_HEIGHT }]} >
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: "relative" }}>
            <TouchableHighlight
              onPress={() => this.props.navigation.goBack()}
              underlayColor='transparent'
              style={{ alignItems: "center", justifyContent: "center", position: "absolute", left: 0 }}>
              <Text style={{ fontFamily: "iconfont", color: '#222424', fontSize: 20 }}>{'\ue71a'}</Text>
            </TouchableHighlight>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: '#222424', fontSize: 13 }}>宜珍惜</Text>
            </View>
            <TouchableHighlight
              onPress={() => this.setState({ isComment_moda: true })}
              underlayColor='transparent'
              style={{ alignItems: "center", justifyContent: "center", position: "absolute", right:0 }}>
              <Text style={{ color: '#222424', fontSize: 30 }}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
        <ScrollView style={[styles.comment_scrollview, { marginTop: STATUS_BAR_HEIGHT + 30 }]}>
          <View style={styles.thought_top}>
            <View style={styles.user_info}>
              <TouchableHighlight style={styles.user_header}
                underlayColor='transparent'
                onPress={()=>this.props.navigation.push('MyHomepage')}
              >
                {
                  <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/images/header.jpg')}></Image>
                  //: <Text style={[styles.iconStyle, { fontSize: 24, color: '#9D9D9D' }]}>{'\ue644'}</Text>
                }
              </TouchableHighlight>
              <View style={{ flex: 1, }}>
                <Text style={styles.user_nickname}>辣辣的草莓酱</Text>
                <Text style={{ color: '#999999', fontSize: 12 }}>一天前</Text>
              </View>
            </View>
          </View>
          <Text style={styles.thought_text}>夏蚊成雷，私拟作群鹤舞于空中，心之所向，则或千或百，果然鹤也；昂首观之，项为之强。又留蚊于素帐中，徐喷以烟，使之冲烟而飞鸣，作青云白鹤观，果如鹤唳云端，为之怡然称快。</Text>
          <View style={styles.article_info}>
            <View style={styles.article_date}>
              <Text style={[styles.article_date_text, { position: "absolute", top: 15, left: 8 }]}>12</Text>
              <View style={[styles.article_date_bar, { transform: [{ skewY: '-45deg' }] }]}></View>
              <Text style={[styles.article_date_text, { position: "absolute", top: 30, left: 28 }]}>31</Text>
            </View>
            <View style={styles.article_title_source}>
              <Text style={styles.article_name}>童趣</Text>
              <Text style={styles.article_source}>世界长大了，我也老了</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.comment_info} >
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableHighlight
              underlayColor='#ffffff'
              activeOpacity={1}
              onPress={() => { }}
            >
              <View style={styles.article_give_like}>
                <Text style={[styles.iconStyle, { fontSize: 24, color: '#262626' }]}>{'\ue61b'}</Text>
                <Text style={{ color: '#262626', marginLeft: 5 }}>0</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor='#ffffff'
              activeOpacity={1}
              onPress={() => this.props.navigation.push('ArticleCommentList', {})}
              style={{ marginLeft: 20 }}
            >
              <View style={styles.article_give_like}>
                <Text style={[styles.iconStyle, { fontSize: 24, color: '#262626' }]}>{'\ue634'}</Text>
                <Text style={{ color: '#262626', marginLeft: 5 }}>12</Text>
              </View>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            underlayColor='#ffffff'
            activeOpacity={1}
            onPress={() => { alert('分享暂未做') }}
            style={{ width: 50, flexDirection: 'row', alignItems: 'center', justifyContent: "flex-end" }}
          >
            <Text style={[styles.iconStyle, { fontSize: 18, color: '#262626' }]}>{'\ue602'}</Text>
          </TouchableHighlight>
        </View>
        {
          isComment_moda ? <Comment_modal _setComment_moda={this._setComment_moda.bind(this)} ></Comment_modal> : null
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  iconStyle: {
    fontFamily: "iconfont",
    fontSize: 30,
  },
  container: {
    flex: 1,
    position: 'relative'
  },
  title_bar: {
    flexDirection: "row",
    alignItems: 'center',
    height: 50,
    position: "absolute",
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.6)',
    left: 0,
    right: 0,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 1
  },
  comment_scrollview: {
    position: "relative",
    paddingBottom: 100,
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingRight: 25,
  },
  thought_top: {
    flexDirection: 'row',
    alignItems: "center"
  },
  user_info: {
    flexDirection: 'row',
    alignItems: "center",
    flex: 1
  },
  user_header: {
    width: 35,
    height: 35,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  user_nickname: {
    fontSize: 14,
    color: '#292929'
  },
  thought_text: {
    fontSize: 15,
    color: '#292929',
    lineHeight: 21,
    marginTop: 20
  },
  article_info: {
    borderColor: '#F4F4F4',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: "center",
    marginTop:30
  },
  article_date: {
    width: 55,
    height: 55,
    padding: 10,
    position: "relative"
  },
  article_date_text: {
    color: '#292929',
    fontSize: 10,
  },
  article_date_bar: {
    height: 1,
    width: 35,
    backgroundColor: '#F4F4F4',
    position: "absolute",
    top: 28,
    left: 9
  },
  article_title_source: {
    flex: 1,
    borderLeftColor: '#F4F4F4',
    borderLeftWidth: 1,
    padding: 10
  },
  article_name: {
    fontSize: 13,
    color: '#292929',
  },
  article_source: {
    color: '#898989',
    fontSize: 11
  },
  //文章评论操作
  comment_info: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'white',
    width: '100%',
    elevation: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  article_give_like: {
    flexDirection: 'row',
    alignItems: 'center'
  }

})