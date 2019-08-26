import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableHighlight, Dimensions, Animated, DeviceEventEmitter, PanResponder } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
import { getData } from '../fetch';//获取数据
import Loading from './components/loading';//加载组件
import Article_list from './components/article_list';//文章列表组件
import {dataObj} from '../utils/data'
import JPushModule from 'jpush-react-native';//极光推送
export default class Gossip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article_contentOffset_before: 0,//文章移动前的位置
      data_contentOffset_before: 0,//日期移动前的位置
      article_isLeft: false,//是否左移
      date_isUpward: false,//是否上移
      month: '八月',//当前选择的月份,
      article_index: 0,//当前月份的第几天文章
      article_arr: [],//当前月份的文章列表
      screen_width: Dimensions.get('window').width,
      isLoad: true,//数据获取成功才显示页面
    }
  }

  componentDidMount() {
    this.setState({
      article_arr: dataObj[this.state.month],
      isLoad: false
    })
    DeviceEventEmitter.addListener("returnData", (params) => {
      this.scrollView_move('', false, params);
    })
    
    //极光推送
    JPushModule.initPush();// 初始化 JPush
    // 新版本必需写回调函数
    // JPushModule.notifyJSDidLoad();
    JPushModule.notifyJSDidLoad((resultCode) => {
      if (resultCode === 0) {
        //console.log(resultCode);
      }
    });
    // 接收自定义消息
    JPushModule.addReceiveCustomMsgListener((message) => {
      //console.log("接收自定义消息: " + message);
      //this.setState({ pushMsg: message });
    });
    // 接收推送通知
    JPushModule.addReceiveNotificationListener((message) => {
      //console.log("接收推送通知: " + message);
    });
    // 打开通知
    JPushModule.addReceiveOpenNotificationListener((map) => {
      //console.log("Opening notification!");
      //console.log("map.extra: " + map.extras);
      // 可执行跳转操作，也可跳转原生页面
      this.props.navigation.navigate("AuroraMessage");
    });
  }
  componentWillUnmount() {
    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
    JPushModule.removeReceiveOpenNotificationListener();
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        //解决PanResponder中的onPress无作用
        //当大于5时才进入移动事件，前提是onStartShouldSetPanResponder和onStartShouldSetPanResponderCapture都是false
        if (Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5) {
          return true;
        } else if (Math.abs(gestureState.dx) == 0 || Math.abs(gestureState.dy) == 0) {
          return false;
        }
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {},
      onPanResponderGrant: (evt, gestureState) => {},
      onPanResponderStart: (evt, gestureState) => {},
      onPanResponderMove: (evt, gestureState) => {
        //console.warn(gestureState.dx)
        let article_isLeft=false;
        let date_isUpward=false;
        let article_touch_move=this.state.article_contentOffset_before;
        let flag=true;
        if (gestureState.dx > 0) {//右移
          article_isLeft=false;
          date_isUpward=false;
          article_touch_move=article_touch_move-parseInt(gestureState.dx);
        } else {
          article_isLeft=true;
          date_isUpward=true;
          article_touch_move=article_touch_move+parseInt(Math.abs(gestureState.dx));
        }
        flag=this.isMove(this.state.article_index,article_isLeft);;
        if(flag){
          this.refs.article_scrollView.scrollTo({ x:article_touch_move, y: 0, animated: true }, 1);
        }
        this.setState({
          article_isLeft:article_isLeft,
          date_isUpward:date_isUpward,
        })
        
        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderRelease: (evt, gestureState) => {
        let flag=this.isMove(this.state.article_index,this.state.article_isLeft);
        if(flag){
          this.scrollView_move(gestureState, true, 0);
        }
        //this.scrollView_move(gestureState, true, 0);
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。

      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    });
  }
  //文章的ScrollView是否移动
  isMove(article_index,article_isLeft){
    let flag=true;
    //第一篇文章可以左滑，不可以右滑
    if(article_index==0&&article_isLeft){//是第一篇文章则可以向左滑
      flag=true;
    }else if(article_index==0&&!article_isLeft){//是第一篇文章则不可以右滑
      flag=false;
    }
    if(article_index==this.state.article_arr.length-1&&article_isLeft){//是最后篇文章则不能向左滑
      flag=false;
    }else if(article_index==this.state.article_arr.length-1&&!article_isLeft){//是第一篇文章则可以右滑
      flag=true;
    }
    return flag;
  }
  //顶部时间渲染
  article_Time_render() {
    const { month, article_index, article_arr } = this.state;
    if (article_arr.length != 0) {
      return (
        <TouchableHighlight
          onPress={() => this.props.navigation.push('ReadCalendar', {})}
          underlayColor='transparent'
        >
          <View style={styles.date_container}>
            <View style={styles.gregorian_calendar}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                ref='decade_scrollView'
                style={styles.date_ScrollView}
              >
                {
                  article_arr.map((item, index) => {
                    return (
                      <Text key={index} style={styles.gregorian_calendar_text}>{item.gregorian_calendar.split('.')[1].substr(0, 1)}</Text>
                    )
                  })
                }
              </ScrollView>
              <ScrollView
                showsVerticalScrollIndicator={false}
                ref='bit_scrollView'
                style={styles.date_ScrollView}
              >
                {
                  article_arr.map((item, index) => {
                    return (
                      <Text key={index} style={styles.gregorian_calendar_text}>{item.gregorian_calendar.split('.')[1].substr(1, 2)}</Text>
                    )
                  })
                }
              </ScrollView>
            </View>
            <View style={styles.date_left_container}>
              <View>
                <Text style={styles.week_text}>{article_arr[article_index].week ? article_arr[article_index].week : ''}</Text>
                <Text style={styles.lunar_calendar}>{article_arr[article_index].lunar_calendar ? article_arr[article_index].lunar_calendar : ''}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: 5 }}>
                <Text style={{ width: 8, height: 8, backgroundColor: '#C39F67', borderRadius: 50, }}></Text>
                <Text style={{ width: 35, height: 1, backgroundColor: '#C39F67', marginRight: 5 }}></Text>
                <Text style={{ color: '#C39F67', fontSize: 12 }}>点击阅读更多</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      )
    }
  }
  //文章列表渲染
  //<Text style={styles.article_author} ellipsizeMode='middle' numberOfLines={5}>{item.article[0].author}</Text>
  article_list_render() {
    const { article_arr } = this.state;
    return (
      <ScrollView
        horizontal={true}//子元素水平排列
        showsHorizontalScrollIndicator={false}//不显示水平滚动条
        style={[styles.page_container]}
        {...this._panResponder.panHandlers}
        scrollEnabled={false}
        ref='article_scrollView'
      >
        {
          article_arr.map((item, index) => {
            return (
              <Article_list key={index} item={item} index={index} dataLength={article_arr.length} navigation={this.props.navigation}></Article_list>
            )
          })
        }
      </ScrollView>
    )
  }

  
  scrollView_move(gestureState, isDrag, article_index) {
    var that = this;
    const { article_arr, article_isLeft,article_contentOffset_before,data_contentOffset_before } = that.state;
    var article_temp = 0;
    var article_move = 0;
    var article_index = article_index;
    var date_temp = 0;
    var current_day = '';//当前展示的日期
    var other_day = '';//前一天或者后一天的日期
    var data_move=0;
    if(isDrag){//在当前页面拖拽
      article_temp = article_isLeft ? (303) : (-303);
      article_move = Math.abs(gestureState.dx) > 20 ? (article_contentOffset_before+ article_temp) : article_contentOffset_before;
      article_index=Math.floor(article_move / 300);

      date_temp = that.state.date_isUpward ? 100 : -100;
      data_move=Math.abs(gestureState.dx) > 20 ?(data_contentOffset_before+date_temp):data_contentOffset_before;
    }else {//在详情页左右翻动执行的
      article_temp = article_index > this.state.article_index ? 303 : -303;
      article_move = article_contentOffset_before + article_temp;

      date_temp = article_index > this.state.article_index ? 100 : -100;
      data_move=data_contentOffset_before+date_temp;
    }

    current_day = article_arr[article_index].gregorian_calendar ? article_arr[article_index].gregorian_calendar.split('.')[1] : '';//当前展示的日期
    if (article_isLeft||article_index > this.state.article_index) {
      other_day = article_index > 0 ? article_arr[article_index - 1].gregorian_calendar.split('.')[1] : article_arr[0].gregorian_calendar.split('.')[1];
    } else if(!article_isLeft||article_index <this.state.article_index){
      other_day = article_index < article_arr.length - 2 ? article_arr[article_index + 1].gregorian_calendar.split('.')[1] : article_arr[article_arr.length - 1].gregorian_calendar.split('.')[1];
    }

    that.refs.article_scrollView.scrollTo({ x: article_move, y: 0, animated: true }, 1);
    if (other_day.substr(0, 1) != current_day.substr(0, 1)) {
      that.refs.decade_scrollView.scrollTo({ x: 0, y: data_move, animated: true }, 1)
    }
    that.refs.bit_scrollView.scrollTo({ x: 0, y: data_move, animated: true }, 1);

    
    this.setState({
      article_contentOffset_before:article_move,
      article_index:article_index,
      data_contentOffset_before:data_move
    })
  }
  render() {
    const { isLoad } = this.state;
    if (isLoad) {
      return <Loading></Loading>
    }
    return (
      <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
        {this.article_Time_render()}
        {this.article_list_render()}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: "relative"
  },
  //顶部日期
  date_container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    paddingLeft: 40,
    position: "relative"
  },
  gregorian_calendar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 50
  },
  date_ScrollView: {
    flex: 1,
    height: 100,
  },
  gregorian_calendar_text: {
    color: '#999999',
    fontSize: 41,
    fontWeight: 'normal',
    height: 100,
    lineHeight: 100,
    width: '100%',
    textAlign: "center"
  },

  date_left_container: {
    marginLeft: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: "center"
  },
  week_text: {
    color: '#999999',
    fontSize: 14
  },
  lunar_calendar: {
    color: '#999999',
    fontSize: 14
  },
  //滑动区域
  page_container: {
    paddingLeft: 35,
    paddingRight: 35,
    height: 420,
  },

});
