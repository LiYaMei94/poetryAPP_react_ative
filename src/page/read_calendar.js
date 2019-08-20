import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View, ScrollView, NativeModules, Picker } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
import { Card } from 'react-native-shadow-cards';
import BottomPicker from './components/bottom_modal';
import Test from './test'
const arr = [
    {
        month: '八月',
        days: [1, 2,3, 30]
    },
    {
        month: '七月',
        days: [1, 2,30]
    },
    {
        month: '六月',
        days: [5,6, 23, 30]
    },
    {
        month: '五月',
        days: [1,6, 23, 30]
    }
];
const temp_arr = [2, 5, 8, 11, 14, 17, 20, 23, 26, , 29, 32];
export default class Rumor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month_days_conatiner: [],
            current_month: '八月',
            current_year:'2019',
            year_arr:['2019','2018','2017'],
            isBottomPickerVisible:false,
            isAnchor_point_click:false
        }
    }
    //点击滑动到指定内容
    _anchor_point_jump(key, index) {
        const { month_days_conatiner } = this.state;
        let moveY = month_days_conatiner[index][key] - STATUS_BAR_HEIGHT;//减去状态栏的位置
        this.setState({
            current_month: key,
            isAnchor_point_click:true
        })
        this.refs.anchor_content_container.scrollTo({ x: 0, y: moveY, animated: true }, 500);
        //console.warn()
    }
    //选择年份
    setValueChange(state,index,text){
        this.setState({
            current_year:text,
            isBottomPickerVisible:state
        })
    }
    closeBottomPicker(state){
        this.setState({
            isBottomPickerVisible:state
        })
    }
    render() {
        const { month_days_conatiner, current_month,current_year,year_arr,isBottomPickerVisible,isAnchor_point_click } = this.state;
        return (
            <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
                <Card style={[styles.title_bar,{height:STATUS_BAR_HEIGHT+35,paddingTop:STATUS_BAR_HEIGHT}]} 
                    cornerRadius={0} opacity={0.5} elevation={10}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",position:"relative" }}>
                        <TouchableHighlight 
                            onPress={()=>this.props.navigation.goBack()}
                            underlayColor='transparent'
                            style={{alignItems: "center", justifyContent: "center",position:"absolute",left:15 }}>
                            <Text style={{ fontFamily: "iconfont", color: '#222424', fontSize: 24 }}>{'\ue682'}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=> this.setState({isBottomPickerVisible:!this.state.isBottomPickerVisible})}
                            underlayColor='transparent'>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", }}>
                                <Text style={{ color: '#222424' }}>{current_year}</Text>
                                <Text style={{ fontFamily: "iconfont", color: '#222424', fontSize: 16 }}>{'\ue651'}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </Card>
                <View style={{ flexDirection: "row", padding: 20,marginTop: STATUS_BAR_HEIGHT,paddingBottom:0}}>
                    <View style={styles.anchor_point_container}>
                        {
                            arr.map((item, index) => {
                                return (
                                    <TouchableHighlight
                                        key={index}
                                        onPress={this._anchor_point_jump.bind(this, item.month, index)}
                                        style={styles.anchor_point_item}
                                        underlayColor='transparent'
                                    >
                                        <Text style={{ color: current_month == item.month ? '#222424' : '#BAC3C0', fontSize: 18 }}>{item.month}</Text>
                                    </TouchableHighlight>
                                )
                            })
                        }
                    </View>
                    <ScrollView style={styles.anchor_content_container}
                        showsVerticalScrollIndicator={false}
                        ref='anchor_content_container'
                        onScrollBeginDrag={()=>{
                            this.setState({
                                isAnchor_point_click:false
                            })
                        }}
                        onScroll={(event) => {
                            if(!isAnchor_point_click){
                                month_days_conatiner.map((item, index) => {
                                    let key = Object.keys(item)[0];
                                    if (event.nativeEvent.contentOffset.y > item[key] - STATUS_BAR_HEIGHT*3-35) {
                                        this.setState({
                                            current_month: key
                                        })
                                    }
                                })
                            }
                            
                        }}
                    >
                        <View style={styles.read_calendar_top}>
                            <Text style={{ color: '#222424', fontSize: 18, marginTop: 13, marginBottom: 3 }}>我的阅历</Text>
                            <Text style={{ color: '#BAC3C0', fontSize: 10, marginBottom: 20 }}>2019 年 8 月 19 日来到流言</Text>
                            <Text style={{ color: '#BAC3C0', fontSize: 11, marginBottom: 3 }}>读了 17 篇文章</Text>
                            <Text style={{ color: '#BAC3C0', fontSize: 11, marginBottom: 3 }}>写了 0 字想法</Text>
                            <Text style={{ color: '#BAC3C0', fontSize: 11, marginBottom: 20 }}>打卡 1 天</Text>
                            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Text style={{ width: 5, height: 5, borderRadius: 50, backgroundColor: '#C4A068' }}></Text>
                                    <Text style={{ fontSize: 11, color: '#BAC3C0', marginLeft: 5 }}>已打卡</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: 15 }}>
                                    <Text style={{ width: 5, height: 5, borderRadius: 50, backgroundColor: '#000000' }}></Text>
                                    <Text style={{ fontSize: 11, color: '#BAC3C0', marginLeft: 5 }}>已阅</Text>
                                </View>
                            </View>
                        </View>
                        {
                            arr.map((item, index) => {
                                return (
                                    <View style={styles.month_days_conatiner} key={index}
                                        onLayout={(e) => {
                                            NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
                                                let obj = {};
                                                obj[item.month] = pageY
                                                month_days_conatiner.push(obj)
                                                this.setState({
                                                    month_days_conatiner: month_days_conatiner
                                                },()=>{
                                                   // console.warn(month_days_conatiner)
                                                })
                                            })
                                        }}
                                    >
                                        <Text style={{ color: '#222424', fontSize: 18, marginBottom: 15 }}>{item.month}</Text>
                                        <View style={styles.month_days}>
                                            {
                                                item.days.map((d_item, d_index) => {
                                                    return (
                                                        <TouchableHighlight
                                                            key={d_index}
                                                            underlayColor='transparent'
                                                            onPress={() => this.props.navigation.push('ArticleDetail',{ id: d_index })}
                                                            style={[styles.day_item, { marginRight: temp_arr.indexOf(d_index) == -1 ? '8%' : 0 }]}
                                                        >
                                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                                <Text style={{ fontSize: 27 }}>{d_item}</Text>
                                                                <Text style={{ fontSize: 12 }}>宜珍惜</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )
                                                })
                                            }
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <BottomPicker 
                    closeBottomPicker={this.closeBottomPicker.bind(this)}
                    setValueChange={this.setValueChange.bind(this)}
                    picker_item_text={year_arr} 
                    isVisible={isBottomPickerVisible}
                ></BottomPicker>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    title_bar: {
        flexDirection: "row",
        alignItems: 'center',
        height: 50,
        position: "absolute",
        top: 0,
        width: '100%',
        backgroundColor: '#D7E9F4',
        left: 0,
        right: 0,
        zIndex: 1
    },
    anchor_point_container: {
        width: 70,
        alignItems: 'center'
    },
    anchor_content_container: {
        flex: 1,
    },
    //顶部的说明信息
    read_calendar_top: {

    },
    month_days: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    anchor_point_item: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    day_item: {
        width: '28%',
        height: 85,
        backgroundColor: 'white',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    anchor_active: {
        color: '#222424'
    },
    picker:{
        position:"absolute",
        top:0,
        width:'100%',
        backgroundColor:'red'
    }
});
