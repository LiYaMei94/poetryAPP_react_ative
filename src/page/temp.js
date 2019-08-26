import React, { Component } from 'react';
import { PanResponder, StyleSheet, View, Text, TouchableHighlight, Dimensions, Animated } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
const screen_width = Dimensions.get('window').width;
export default class ExploreScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                七月: [
                    {
                        gregorian_calendar: '7.09',
                        gregorian_calendar_text: '七月九日',
                        lunar_calendar: '六月初七',
                        week: '周三',
                        article: {
                            title: '童趣',
                            author: '沈复',
                            content: [
                                '余忆童稚时，能张目对日，明察秋毫，见藐小之物必细察其纹理，故时有物外之趣。',
                                '夏蚊成雷，私拟作群鹤舞于空中，心之所向，则或千或百，果然鹤也；昂首观之，项为之强。又留蚊于素帐中，徐喷以烟，使之冲烟而飞鸣，作青云白鹤观，果如鹤唳云端，为之怡然称快。',
                                '余常于土墙凹凸处，花台小草丛杂处，蹲其身，使与台齐；定神细视，以丛草为林，以虫蚁为兽，以土砾凸者为丘，凹者为壑，神游其中，怡然自得。',
                                '一日，见二虫斗草间，观之，兴正浓，忽有庞然大物，拔山倒树而来，盖一癞蛤蟆，舌一吐而二虫尽为所吞。余年幼，方出神，不觉呀然一惊。神定，捉虾蟆，鞭数十，驱之别院。'
                            ]
                        }
                    },
                    {
                        gregorian_calendar: '7.10',
                        gregorian_calendar_text: '七月十日',
                        lunar_calendar: '六月初八',
                        week: '周三',
                        article: {
                            title: '童趣•译文童趣•译文',
                            author: '沈复',
                            content: [
                                '我回忆儿童时，可以张开眼睛看着太阳，能看清最细微的东西。我看见细小的东西，一定会去仔细地观察它的纹理，因此常有超出事物本身的乐趣。',
                                '夏天蚊子发出雷鸣般的声响，我暗自把它们比作群鹤在空中飞舞，心里这么想，那成千成百的蚊子果然都变成仙鹤了；我抬着头看它们，脖颈都为此僵硬了。我又将几只蚊子留在素帐中，用烟慢慢地喷它们，让它们冲着烟雾边飞边叫，我把它当做一幅青云白鹤的景观，果然像仙鹤在青云中鸣叫，我为这景象高兴地拍手叫好。',
                                '我常在土墙高低不平的地方，在花台杂草丛生的地方，蹲下身子，使自己和花台相平，聚精会神地观察，把草丛当做树林，把虫子、蚂蚁当做野兽，把土块凸出部分当做山丘，凹陷的部分当做山谷，我在其中游玩，觉得非常安闲舒适。',
                                '有一天，我看见两只小虫在草间相斗，蹲下来观察它们，兴趣正浓厚，忽然有个极大的家伙，掀翻山压倒树而来了，原来是一只癞蛤蟆，舌头一吐，两只虫子全被它吃掉了。我那时年纪很小，正看得出神，不禁‘呀’的一声惊叫起来。待到神情安定下来，捉住癞蛤蟆，鞭打了几十下，把它驱赶到别的院子里去了。'
                            ]
                        }
                    },
                    {
                        gregorian_calendar: '7.11',
                        gregorian_calendar_text: '七月十一日',
                        lunar_calendar: '六月初九',
                        week: '周四',
                        article: {
                            title: '译文',
                            author: '沈复',
                            content: [
                                '我回忆儿童时，可以张开眼睛看着太阳，能看清最细微的东西。我看见细小的东西，一定会去仔细地观察它的纹理，因此常有超出事物本身的乐趣。',
                                '夏天蚊子发出雷鸣般的声响，我暗自把它们比作群鹤在空中飞舞，心里这么想，那成千成百的蚊子果然都变成仙鹤了；我抬着头看它们，脖颈都为此僵硬了。我又将几只蚊子留在素帐中，用烟慢慢地喷它们，让它们冲着烟雾边飞边叫，我把它当做一幅青云白鹤的景观，果然像仙鹤在青云中鸣叫，我为这景象高兴地拍手叫好。',
                                '我常在土墙高低不平的地方，在花台杂草丛生的地方，蹲下身子，使自己和花台相平，聚精会神地观察，把草丛当做树林，把虫子、蚂蚁当做野兽，把土块凸出部分当做山丘，凹陷的部分当做山谷，我在其中游玩，觉得非常安闲舒适。',
                                '有一天，我看见两只小虫在草间相斗，蹲下来观察它们，兴趣正浓厚，忽然有个极大的家伙，掀翻山压倒树而来了，原来是一只癞蛤蟆，舌头一吐，两只虫子全被它吃掉了。我那时年纪很小，正看得出神，不禁‘呀’的一声惊叫起来。待到神情安定下来，捉住癞蛤蟆，鞭打了几十下，把它驱赶到别的院子里去了。'
                            ]
                        }
                    },
                    {
                        gregorian_calendar: '7.12',
                        gregorian_calendar_text: '七月十二日',
                        lunar_calendar: '六月初九',
                        week: '周四',
                        article: {
                            title: '译文译文译文译文译文',
                            author: '沈复',
                            content: [
                                '我回忆儿童时，可以张开眼睛看着太阳，能看清最细微的东西。我看见细小的东西，一定会去仔细地观察它的纹理，因此常有超出事物本身的乐趣。',
                                '夏天蚊子发出雷鸣般的声响，我暗自把它们比作群鹤在空中飞舞，心里这么想，那成千成百的蚊子果然都变成仙鹤了；我抬着头看它们，脖颈都为此僵硬了。我又将几只蚊子留在素帐中，用烟慢慢地喷它们，让它们冲着烟雾边飞边叫，我把它当做一幅青云白鹤的景观，果然像仙鹤在青云中鸣叫，我为这景象高兴地拍手叫好。',
                                '我常在土墙高低不平的地方，在花台杂草丛生的地方，蹲下身子，使自己和花台相平，聚精会神地观察，把草丛当做树林，把虫子、蚂蚁当做野兽，把土块凸出部分当做山丘，凹陷的部分当做山谷，我在其中游玩，觉得非常安闲舒适。',
                                '有一天，我看见两只小虫在草间相斗，蹲下来观察它们，兴趣正浓厚，忽然有个极大的家伙，掀翻山压倒树而来了，原来是一只癞蛤蟆，舌头一吐，两只虫子全被它吃掉了。我那时年纪很小，正看得出神，不禁‘呀’的一声惊叫起来。待到神情安定下来，捉住癞蛤蟆，鞭打了几十下，把它驱赶到别的院子里去了。'
                            ]
                        }
                    }
                ],
            },
            month: '七月',
            article_index: 0,
            isLeft: false,//左移还是右移
            isShowLogo: false,//是否显示已阅和喜欢
            screen_width: screen_width,
            skewYDeg: 0,//倾斜的角度
            horizontalscrollDistance: 0,//水平移动的距离
            VerticalscrollDistance: 0,//垂直移动的距离
            hiddenData: [],//已阅和喜欢的文章
        }
        this.hidden_click = this.hidden_click.bind(this);
    }
    componentDidMount() {
        this.initViewStyle();
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                //console.log('onPanResponderGrant')
                //console.log(gestureState)
                // gestureState.{x,y} 现在会被设置为0
            },
            onPanResponderStart: (evt, gestureState) => {
            },
            onPanResponderMove: (evt, gestureState) => {
                // 最近一次的移动距离为gestureState.move{X,Y}
                //console.warn(gestureState.dx)
                if (Math.abs(gestureState.dx) > 10 && this.state.skewYDeg < 5) {
                    this.state.skewYDeg = Math.abs(gestureState.dx) / 10;
                } else if (this.state.skewYDeg > 5) {
                    this.state.skewYDeg = 5
                }

                if (gestureState.dx > 0) {//右移
                    this.setState({
                        skewYDeg: this.state.skewYDeg,
                        isLeft: false,
                    })
                } else {
                    this.setState({
                        skewYDeg: this.state.skewYDeg * (-1),
                        isLeft: true,
                    })
                }
                this.setState({
                    horizontalscrollDistance: gestureState.dx,
                    VerticalscrollDistance: gestureState.dy,
                })
                this.Animated_hidden(false, false,true);
                // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,

            onPanResponderRelease: (evt, gestureState) => {
                //console.warn(gestureState.dx)
                if (Math.abs(gestureState.dx) > 30) {
                    if (gestureState.dx > 0) {
                        Animated.timing(
                            this.state.data[this.state.month][0].left,
                            {
                                toValue: 630,
                                duration: 700,
                            }
                        ).start();
                    } else {
                        Animated.timing(
                            this.state.data[this.state.month][0].left,
                            {
                                toValue: -330,
                                duration: 700,
                            }
                        ).start();
                    }
                    this.timer = setTimeout(() => {
                        this.setState({
                            isLeft: false,
                            horizontalscrollDistance: 0,
                            VerticalscrollDistance: 0,
                            isShowLogo: false,
                        })
                        this.updateData();
                    }, 700);
                } else {
                    this.setState({
                        skewYDeg: 0,
                        isLeft: false,
                        isShowLogo: false,
                        horizontalscrollDistance: 0,
                        VerticalscrollDistance: 0,
                    })
                    this.Animated_hidden(false, true);
                }
                //console.warn(this.state.data)

                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
                this.setState({
                    skewYDeg: 0,
                    isLeft: false,
                    horizontalscrollDistance: 0,
                    VerticalscrollDistance: 0
                })
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                // 默认返回true。目前暂时只支持android。
                return true;
            },
        });
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        this.timer1 && clearTimeout(this.timer1);
        this.timer2 && clearTimeout(this.timer2);
    }

    //已阅或者喜欢都会删除第一个
    updateData() {
        const { isLeft, data, month, hiddenData } = this.state;
        let temp = [];
        let data_new = {};
        hiddenData.push(data[month][0]);
        for (var i = 0; i < data[month].length; i++) {
            if (i != 0) {
                temp.push(data[month][i]);
            }
        }
        data_new[month] = temp;

        this.setState(Object.assign({}, this.state, {
            skewYDeg: 0,
            data: data_new,
            hiddenData: hiddenData
        }));
    }
    initViewStyle() {
        const { data, month } = this.state;
        data[month].forEach((item, index) => {
            if (index == 0) {
                item.left = new Animated.Value((screen_width - 300) / 2);
                item.width = new Animated.Value(300);
                item.height = new Animated.Value(370);
                item.backgroundColor = '#ffffff';
                item.opacity=1
                //item.opacity=new Animated.Value(1)
            } else if (index == 1) {
                item.left = new Animated.Value((screen_width - 275) / 2);
                item.width = new Animated.Value(275);
                item.height = new Animated.Value(380);
                item.backgroundColor = 'rgba(248,251,249,0.5)';
                //item.opacity=new Animated.Value(0.5)
                item.opacity=0.5
            } else {
                item.left = new Animated.Value((screen_width - 255) / 2);
                item.width = new Animated.Value(255);
                item.height = new Animated.Value(390);
                item.backgroundColor = 'rgba(236,245,239,0.5)';
                //item.opacity=new Animated.Value(0.3)
                item.opacity=0.3
            }
        });
        this.setState({
            data: data
        })
    }
    //滑动或者点击已阅喜欢时最上面的改变left，接下来的三个改变width和left
    Animated_hidden(isLeft,isRefresh,isMove) {
        //isLeft表示有页面向右或者向左隐藏
        //isRefresh是点击刷新页面回来，或者滑动了但是滑动的距离小页面不隐藏
        //isMove是手机还在滑动，触摸没结束
        
        let value=[
            {
                width:isRefresh?275:300,
                height:isRefresh?380:370,
                left:isRefresh?((screen_width - 275) / 2):((screen_width - 300) / 2),
                opacity:isRefresh?0.5:1
            },
            {
                width:isRefresh?255:275,
                height:isRefresh?390:380,
                left:isRefresh?((screen_width - 255) / 2):((screen_width - 275) / 2),
                opacity:isRefresh?0.3:0.5
            },
            {
                width:255,
                height:390,
                left:(screen_width - 255) / 2,
                opacity:0.3
            },
        ];
        let leftValue=isLeft?-330:isRefresh?(screen_width - 300) / 2:630;
        let createAnimationArr=[];
        //true,false和true,true返回-330
        //false,true返回(screen_width - 300)
        //false,false返回630
        
        if(this.state.data[this.state.month].length!=0){
            let length=this.state.data[this.state.month].length>=4?3:this.state.data[this.state.month].length>=3?2:this.state.data[this.state.month].length>=2?
            1:0;
            let createAnimation1 =Animated.timing(
                this.state.data[this.state.month][0].left,
                {
                    toValue: leftValue,
                    duration: 700,
                }
            );
            if(isMove==undefined){
                createAnimationArr.push(createAnimation1);
            }
            for(var i=0;i<length;i++){
                createAnimationArr.push(Animated.timing(
                    this.state.data[this.state.month][i+1].left,
                    {
                        toValue: value[i].left,
                    }
                ))
                createAnimationArr.push(Animated.timing(
                    this.state.data[this.state.month][i+1].width,
                    {
                        toValue: value[i].width,
                    }
                ))
                createAnimationArr.push(Animated.timing(
                    this.state.data[this.state.month][i+1].height,
                    {
                        toValue: value[i].height,
                    }
                ))
                this.state.data[this.state.month][i+1].opacity=value[i].opacity
                
            }
            Animated.parallel(createAnimationArr).start();
            this.setState({
                data:this.state.data
            })
        }
    }
    
    //文章已阅或者喜欢
    hidden_click(isLeft, leftValue, duration) {
        if (this.state.data[this.state.month].length != 0) {
            if (this.state.data[this.state.month].length > 1) {
                this.setState({
                    isLeft: isLeft,
                    isShowLogo: true
                })
            }
            this.Animated_hidden(isLeft,false);
            this.timer2 = setTimeout(() => {
                this.setState({
                    isLeft: false,
                    isShowLogo: false
                })
                this.updateData();
            }, 700);
        }
    }
    //显示已阅和喜欢标签
    showLogo(index) {
        const { skewYDeg, isShowLogo, isLeft } = this.state;
        if (skewYDeg != 0) {
            if (index == 0) {
                if (isLeft) {
                    return <Text style={styles.have_read_logo}>已阅</Text>
                } else {
                    return <Text style={styles.like_logo}>喜欢</Text>
                }
            } else {
                return null
            }
        } else {
            if (isShowLogo) {
                if (index == 0) {
                    if (isLeft) {
                        return <Text style={styles.have_read_logo}>已阅</Text>
                    } else {
                        return <Text style={styles.like_logo}>喜欢</Text>
                    }
                } else {
                    return null
                }
            } else {
                return null
            }
        }
    }
    //刷新
    refresh_click() {
        const { hiddenData, data, month } = this.state;
        let temp = [];
        if (hiddenData.length != 0) {
            data[month].unshift(hiddenData[hiddenData.length - 1]);
            this.setState({data:data}, ()=> {
                this.Animated_hidden(false,true);
            });
            this.timer1 = setTimeout(() => {
                for (var i = 0; i < hiddenData.length; i++) {
                    if (i != hiddenData.length - 1) {
                        temp.push(hiddenData[i]);
                    }
                }
                this.setState({
                    hiddenData: temp,
                })
            }, 500);
        }
    }
    list_render() {
        let {
            data,
            month,
            skewYDeg,
            horizontalscrollDistance,
            VerticalscrollDistance
        } = this.state;
        return (
            <View style={styles.list_wrap}>
                {
                    data[month].map((item, index) => {
                        return (
                            <Animated.View key={index}
                                style={[styles.list_item,
                                {
                                    backgroundColor: 'rgba(255,255,255,'+item.opacity+')',
                                    height: item.height,
                                    width: item.width,
                                    zIndex: index == 0 ? 4 : index == 1 ? 3 :index==2?2:1,
                                    transform: index == 0 ? [
                                        { skewY: skewYDeg + 'deg' },
                                        { translateX: horizontalscrollDistance },
                                        { translateY: VerticalscrollDistance }]
                                        : [{ skewY: '0deg' }, { translateX: 0 }, { translateY: 0 }],
                                    left: item.left,
                                }
                                ]}
                                shadowColor='#666'
                                shadowOffset={{ width: 100, height: 3 }}
                                shadowOpacity={0.5}
                                shadowRadius={5}
                            >
                                <View style={{ width:275, backgroundColor: '#fff', paddingTop: 20, borderRadius: 10,paddingLeft:12.5,paddingRight:12.5}} {...this._panResponder.panHandlers}>
                                    {
                                        this.showLogo(index)
                                    }
                                    <Text style={styles.article_title}>{item.article.title}</Text>
                                    <Text style={styles.article_author}>{item.article.author}</Text>
                                    <Text style={styles.article_content}>
                                        {
                                            item.article.content.map((item, index) => {
                                                return (
                                                    <Text key={index} style={styles.article_p}>{item}</Text>
                                                )
                                            })
                                        }
                                    </Text>
                                    <View style={[styles.article_bottom]}>
                                        <LinearGradient locations={[0.15, 0.75, 1]} colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.95)']}
                                            style={{ height: 130 }}></LinearGradient>
                                        <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: 0, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ flex: 1, color: '#888' }}>208喜欢•143想法</Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.props.navigation.push('ArticleDetail', { id: index })
                                    }}
                                    underlayColor='#C39F67'
                                    style={{
                                        width: 50, height: 25, borderRadius: 15, backgroundColor: '#C39F67',
                                        alignItems: 'center', justifyContent: "center", position: "absolute", right: 20,
                                        bottom: index == 0 ? 25 : index == 1 ? 25 : 30
                                    }}
                                >
                                    <Text style={{ color: 'white' }}>阅读</Text>
                                </TouchableHighlight>
                            </Animated.View>
                        )
                    })
                }
            </View>
        )
    }

    render() {
        return (
            <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
                {this.list_render()}
                <View style={styles.handle_conatiner}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: 'center', }}>
                        <TouchableHighlight
                            underlayColor='rgba(0,0,0,0.5)'
                            onPress={this.refresh_click.bind(this)}
                            style={styles.handle_item}>
                            <MaterialIcons name='refresh' size={25} color='#DBEDE2'></MaterialIcons>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: 'center', }}>
                        <TouchableHighlight
                            underlayColor='rgba(0,0,0,0.5)'
                            onPress={() => this.hidden_click(true, -330, 500)}
                            style={[styles.handle_item, { width: 50, height: 50 }]}>
                            <MaterialIcons name='close' size={35} color='#DBEDE2'></MaterialIcons>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: 'center', }}>
                        <TouchableHighlight
                            underlayColor='rgba(0,0,0,0.5)'
                            onPress={() => this.hidden_click(false, 630, 1000)}
                            style={styles.handle_item}>
                            <AntDesign name='hearto' size={20} color='#DBEDE2'></AntDesign>
                        </TouchableHighlight>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CFE7EB',
    },
    list_wrap: {
        marginTop: 80,
        flexDirection: 'row',
        //justifyContent: "center",
        position: "relative"
    },
    list_item: {
        borderRadius: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: "center",
        position: "absolute",
        
    },
    article_title: {
        textAlign: "center",
        width: '100%',
        color: '#262626',
        fontSize: 24,
        marginBottom: 5,
    },
    article_author: {
        textAlign: "center",
        width: '100%',
        color: "#A6A6A6",
        fontSize: 14
    },
    article_content: {
        paddingTop: 10,
        height: 260,
    },
    article_p: {
        marginBottom: 20,
        fontSize: 16,
        lineHeight: 26,
        textAlign: "center"
    },
    article_bottom: {
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 0,
        height: 170,
        flexDirection: 'column',
        flex: 1
    },
    have_read_logo: {
        borderColor: '#D7BF9B',
        borderWidth: 1,
        width: 70,
        height: 40,
        lineHeight: 40,
        textAlign: "center",
        position: "absolute",
        fontSize: 18,
        top: 20,
        right: 20,
        color: '#D7BF9B',
        transform: [{ skewY: '15deg' }]
    },
    like_logo: {
        borderColor: '#EC4855',
        borderWidth: 1,
        width: 70,
        height: 40,
        lineHeight: 40,
        textAlign: "center",
        position: "absolute",
        fontSize: 18,
        top: 20,
        left: 20,
        color: '#EC4855',
        transform: [{ skewY: '-15deg' }]
    },
    handle_conatiner: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        position: "absolute",
        bottom: 30,
        width: '80%',
        marginLeft: '10%',
    },
    handle_item: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 4,
        borderColor: '#CDDFEA',
        borderRadius: 50,
        width: 45,
        height: 45
    }
})