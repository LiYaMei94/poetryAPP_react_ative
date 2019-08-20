import React, { Component } from 'react';
import {
  Platform, StyleSheet, StatusBar, View, TouchableHighlight, Text, ScrollView, Image, Dimensions, NativeModules, UIManager,
  findNodeHandle, KeyboardAvoidingView, DeviceEventEmitter
} from 'react-native';
import ViewPagerAndroid from "@react-native-community/viewpager";
import { Card } from 'react-native-shadow-cards';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
import { getData } from '../fetch';
import Comment_modal from './components/comment_modal';
import Loading from './components/loading';
import Bottom_Picker from './components/bottom_modal'
export default class Rumor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article_id: props.navigation.getParam('id', '0'),//props.navigation.getParam('id', '0')
      article_name_length: 0,
      month: '八月',//当前选择的月份,
      article_arr: [],//当前月份的文章列表
      article_comments_pageY: {},
      isComment_moda: false,//想法的弹窗是否出现
      isLoad: true,//数据获取成功才显示页面
    }
  }
  componentDidMount() {
    this.get_article_data();

  }
  //获取文章数据
  get_article_data() {
    getData('http://localhost:8081/src/utils/data.json').then(res => {
      var article_name_length = this.strLength(res[this.state.month][this.state.article_id].article[0].title);
      res[this.state.month].map((item, index) => {
        item.header_show = false;
      })
      this.setState({
        article_arr: res[this.state.month],
        article_name_length: article_name_length,
        article_id: this.state.article_id,//这里要修改
        isLoad: false
      })
    })
  }
  strLength(text) {
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
  }
  _setComment_moda(isComment_moda, text) {
    const { article_arr, article_id } = this.state;
    if (text != '') {
      article_arr[article_id].article[0].comments.push(
        {
          "nickname": "辣辣的草莓酱",
          "header_img": "http://b-ssl.duitang.com/uploads/item/201503/31/20150331155006_kd5rr.jpeg",
          "comment_text": text
        }
      )
    }
    this.setState({
      isComment_moda: isComment_moda,
      article_arr: article_arr
    })
  }
  //点赞
  _give_like(index) {
    const { article_id, article_arr } = this.state;
    article_arr[article_id].article[0].likes = article_arr[article_id].article[0].liked ? article_arr[0].article[0].likes - 1 : article_arr[article_id].article[0].likes + 1;
    article_arr[article_id].article[0].liked = article_arr[article_id].article[0].liked ? false : true;
    this.setState({
      article_arr: article_arr
    })
  }

  render() {
    const { article_id, article_arr, article_name_length, isComment_moda, isLoad } = this.state;
    if (isLoad) {
      return <Loading></Loading>
    }
    return (
      <View style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
        <ViewPagerAndroid style={styles.container} initialPage={article_id}
          onPageSelected={(e) => {
            DeviceEventEmitter.emit('returnData', e.nativeEvent.position);
            this.setState({
              article_id: e.nativeEvent.position,
              article_name_length: this.strLength(article_arr[e.nativeEvent.position].article[0].title)
            })
          }}
        >
          {
            article_arr.map((item, index) => {
              return (
                <View style={styles.page_item} key={index}>
                  <View style={[styles.header_container, { backgroundColor: item.header_show ? 'rgba(255,255,255,0.9)' : 'transparent' }]}>
                    <TouchableHighlight style={styles.back_button}
                      underlayColor='transparent'
                      activeOpacity={1}
                      onPress={() => this.props.navigation.goBack()}
                    //this.props.navigation.push('bottomTabNavigator', { id: article_id })
                    >
                      <Text style={[styles.iconStyle]}>{'\ue686'}</Text>
                    </TouchableHighlight>
                    {
                      item.header_show ?
                        <View style={styles.header_article}>
                          <Text style={styles.artilce_name}>{item.article[0].title}</Text>
                          <Text style={styles.artilce_date}>{item.gregorian_calendar_text}</Text>
                        </View> : null
                    }
                  </View>
                  <ScrollView showsVerticalScrollIndicator={false} style={styles.artilce_container}
                    onScroll={(event) => {
                      if (event.nativeEvent.contentOffset.y > article_name_length * 24 + (18 + STATUS_BAR_HEIGHT)) {
                        article_arr[article_id].header_show = true;
                      } else {
                        article_arr[article_id].header_show = false;
                      }
                      this.setState({
                        article_arr: article_arr
                      })
                    }}
                  >
                    <View style={styles.artilce_name_date_container} >
                      <Text style={styles.artilce_content_date}>{item.gregorian_calendar_text}</Text>
                      <Text style={styles.artilce_content_name}>{item.article[0].title}</Text>
                    </View>
                    <View style={styles.artilce_content_container}>
                      {
                        item.article[0].content.map((p_item, p_index) => {
                          return <Text key={p_index} style={styles.artilce_content_p}>{p_item}</Text>
                        })
                      }
                    </View>
                    <View style={styles.article_comments}>
                      <Text style={{ fontSize: 17, color: '#000', marginBottom: 25 }}>想法</Text>
                      <View style={styles.publish_comment}>
                        <TouchableHighlight
                          underlayColor='#E0E0E0'
                          activeOpacity={1}
                          onPress={() => { }}
                          style={styles.head_portrait}
                        >
                          <Text style={[styles.iconStyle, { fontSize: 22, color: '#9D9D9D' }]}>{'\ue644'}</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                          underlayColor='#ffffff'
                          activeOpacity={1}
                          onPress={() => this.setState({ isComment_moda: !this.state.isComment_moda })}
                          style={{ justifyContent: 'center', alignItems: 'flex-start', flex: 1, marginLeft: 15 }}
                        >
                          <Text style={{ color: '#B9B9B9', fontSize: 13, }}>写点什么吧...</Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.comments_container}>
                        {
                          item.article[0].comments.map((c_item, c_index) => {
                            return (
                              <View style={styles.comment_item} key={c_index}>
                                <View style={styles.publish_comment}>
                                  <TouchableHighlight
                                    underlayColor='#E0E0E0'
                                    activeOpacity={1}
                                    onPress={() => { }}
                                    style={styles.head_portrait}
                                  >
                                    {
                                      //{uri:c_item.header_img}
                                      c_item.header_img != '' ?
                                        <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/images/header.jpg')}></Image>
                                        : <Text style={[styles.iconStyle, { fontSize: 24, color: '#9D9D9D' }]}>{'\ue644'}</Text>
                                    }
                                  </TouchableHighlight>
                                  <Text style={[styles.add_comment_button, { fontSize: 15, marginLeft: 15 }]}>{c_item.nickname}</Text>
                                </View>
                                <Text style={styles.comment_text}>{c_item.comment_text}</Text>
                              </View>
                            )
                          })
                        }
                      </View>
                      <TouchableHighlight
                        underlayColor='#ffffff'
                        activeOpacity={1}
                        onPress={() => { }}
                      >
                        <Text style={{ color: '#C6A46E', fontSize: 13, marginTop: 25 }}>全部263条想法</Text>
                      </TouchableHighlight>
                    </View>
                  </ScrollView>
                  <Card style={styles.comment_info} cornerRadius={0} opacity={0.5} elevation={15}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <TouchableHighlight
                        underlayColor='#ffffff'
                        activeOpacity={1}
                        onPress={this._give_like.bind(this, index)}
                      >
                        <View style={styles.article_give_like}>
                          <Text style={[styles.iconStyle, { fontSize: 24, color: item.article[0].liked ? '#ED4956' : '#262626' }]}>{item.article[0].liked ? '\ue635' : '\ue61b'}</Text>
                          <Text style={{ color: '#262626', marginLeft: 5 }}>{item.article[0].likes}</Text>
                        </View>
                      </TouchableHighlight>
                      <TouchableHighlight
                        underlayColor='#ffffff'
                        activeOpacity={1}
                        onPress={() => { }}
                        style={{ marginLeft: 20 }}
                      >
                        <View style={styles.article_give_like}>
                          <Text style={[styles.iconStyle, { fontSize: 24, color: '#262626' }]}>{'\ue634'}</Text>
                          <Text style={{ color: '#262626', marginLeft: 5 }}>{item.article[0].comment_num}</Text>
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
                  </Card>
                </View>
              )
            })
          }
        </ViewPagerAndroid>
        {
          isComment_moda ? <Comment_modal _setComment_moda={this._setComment_moda.bind(this)} ></Comment_modal> : null
        }
      </View>
    );
  }
  closeBottomPicker(state){
    this.setState({
      isComment_moda:false
    })
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //每一页
  page_item: {
    flex: 1,
    position: "relative",
    backgroundColor: 'white'
  },
  //标题栏
  header_container: {
    width: '100%',
    height: 50,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1
  },
  back_button: {
    width: 40,
    justifyContent: "center"
  },
  iconStyle: {
    fontFamily: "iconfont",
    fontSize: 30,
  },
  header_article: {
    flex: 1,
    alignItems: 'flex-end'
  },
  artilce_name: {
    fontSize: 18
  },
  artilce_date: {
    fontSize: 12
  },
  //文章内容
  artilce_container: {
    paddingTop: 18,
    position: "relative",
    paddingBottom: 100,
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingRight: 25,
  },
  artilce_name_date_container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  artilce_content_date: {
    width: 16,
    fontSize: 14,
    textAlign: "center",
    marginRight: 5,
  },
  artilce_content_name: {
    width: 26,
    fontSize: 24,
    textAlign: "center"
  },
  artilce_content_container: {
    paddingBottom: 60,
  },
  artilce_content_p: {
    marginTop: 30,
    lineHeight: 25,
    fontSize: 15
  },
  //评论
  article_comments: {
    borderTopColor: '#F6F6F6',
    borderTopWidth: 1,
    paddingBottom: 40,
    paddingTop: 35,
  },
  comment_item: {
    marginTop: 20
  },
  publish_comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  head_portrait: {
    width: 30,
    height: 30,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add_comment_button: {
    color: '#B9B9B9',
    fontSize: 13,
  },
  comment_text: {
    fontSize: 14,
    color: '#272727',
    lineHeight: 24,
    marginTop: 5
  },
  //文章评论操作
  comment_info: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'white',
    width: '100%'
  },
  article_give_like: {
    flexDirection: 'row',
    alignItems: 'center'
  }
  
});
