import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableHighlight, Dimensions, Animated,DeviceEventEmitter } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
import { getData } from '../fetch';//获取数据
import Loading from './components/loading';//加载组件
import Article_list from './components/article_list';//文章列表组件
export default class Gossip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article_contentOffset_before: 0,//移动前的位置
      article_isLeft: false,//是否左移
      date_isUpward: false,//是否上移
      month: '八月',//当前选择的月份,
      article_index: 0,//当前月份的第几天文章
      article_arr: [],//当前月份的文章列表
      screen_width: Dimensions.get('window').width,
      isLoad: true,//数据获取成功才显示页面
    }
  }
  componentWillMount() {
    
  }
  componentDidMount() {
    getData('http://localhost:8081/src/utils/data.json').then(res => {
      this.setState({
        article_arr: res[this.state.month],
        isLoad:false
      })
    })
    DeviceEventEmitter.addListener("returnData", (params) => {
      this.scrollView_move('',false,params);
    })
  }
  //顶部时间渲染
  article_Time_render() {
    const { month, article_index, article_arr } = this.state;
    if (article_arr.length != 0) {
      return (
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
            {
              article_index==0?
              <TouchableHighlight
                onPress={()=>this.props.navigation.push('ReadCalendar',{})}
                underlayColor='transparent'
                style={{marginLeft:5}}
              >
                <View style={{flexDirection:"row",alignItems:'center'}}>
                  <Text style={{width:8,height:8,backgroundColor:'#C39F67',borderRadius:50,}}></Text>
                  <Text style={{width:35,height:1,backgroundColor:'#C39F67',marginRight:5}}></Text>
                  <Text style={{color:'#C39F67',fontSize:12}}>点击阅读更多</Text>
                </View>
              </TouchableHighlight>
              :null
            }
          </View>
        </View>
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
        snapToAlignment='center'
        snapToInterval={1}
        onScroll={(event) => {
          this.setState({
            article_isLeft: this.state.article_contentOffset_before > event.nativeEvent.contentOffset.x ? true : false,
            date_isUpward: false,//文章左移，就是现实前一天的，那么日期上移
          })
        }}
        onScrollBeginDrag={(e) => {
          this.setState({
            article_contentOffset_before: e.nativeEvent.contentOffset.x
          })
        }}
        onScrollEndDrag={this.articleScrollEndDrag.bind(this)}
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

  //文章列表滑动结束
  articleScrollEndDrag(e) {
    this.scrollView_move(e,true,0);
  }
  scrollView_move(e,isDrag,article_index){
    var that = this;
    const { article_arr, article_isLeft } = that.state;
    var article_temp = 0;
    var article_move = 0;
    var article_index =article_index;
    if(isDrag){//在当前页面拖拽
      article_temp = article_isLeft ? -303 : 303;
      article_move = e.nativeEvent.contentOffset.x > 20 ? (that.state.article_contentOffset_before + article_temp) : that.state.article_contentOffset_before;
      article_index = (Math.floor(article_move / 300) + 1) <= article_arr.length ? Math.floor(article_move / 300) : that.state.article_index;
    }else{//在详情页左右翻动执行的
      article_temp = article_index>this.state.article_index ? -303 : 303;
      article_move=that.state.article_contentOffset_before + article_temp;
    }
    article_index = article_index >= 0 ? article_index : 0;
    var date_temp = that.state.date_isUpward ? -article_index * 100 : article_index * 100;
    var current_day = article_arr[article_index].gregorian_calendar ? article_arr[article_index].gregorian_calendar.split('.')[1] : '';//当前展示的日期
    var other_day = '';//前一天或者后一天的日期
    article_move = article_index * 303;
    if (article_isLeft) {
      other_day = article_index < article_arr.length - 2 ? article_arr[article_index + 1].gregorian_calendar.split('.')[1] : article_arr[article_arr.length - 1].gregorian_calendar.split('.')[1];
    } else {
      other_day = article_index > 0 ? article_arr[article_index - 1].gregorian_calendar.split('.')[1] : article_arr[0].gregorian_calendar.split('.')[1];
    }
    setTimeout(() => {
      that.refs.article_scrollView.scrollTo({ x: article_move, y: 0, animated: true }, 1);
      if (other_day.substr(0, 1) != current_day.substr(0, 1)) {
        that.refs.decade_scrollView.scrollTo({ x: 0, y: date_temp, animated: true }, 1)
      }
      that.refs.bit_scrollView.scrollTo({ x: 0, y: date_temp, animated: true }, 1);
    })
    that.setState({
      article_index: article_index
    })
  }
  render() {
    const {isLoad}=this.state;
    if(isLoad){
      return <Loading></Loading>
    }
    return (
      <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
        {this.article_Time_render() }
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
    position:"relative"
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
    flexDirection:'row',
    alignItems:"center"
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
