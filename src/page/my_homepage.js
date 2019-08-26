import React, { Component } from 'react';
import { Text, StyleSheet, Image, View, TouchableHighlight, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
import IdeaItem from './components/rumors_list'
const artilce_book_name = '一个人住的第三年';
export default class Gossip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isIdea: true,
            like_arr: [1, 2, 3, 3, 4, , 5, 6, 77,],
            content_data: [1, 2, 3, 3, 4, , 5, 6, 77,]
        }
    }
    content_idea_render() {
        return (
            <View></View>
        )
    }
    content_like_render() {
        const { like_arr } = this.state;
        let artilce_book_name_arr = artilce_book_name.split('');
        return (
            <View style={styles.like_item}>
                <Text></Text>
                <View>
                    {
                        artilce_book_name_arr.map((n_item, n_index) => {
                            return <Text key={n_index} style={{ width: 30 }}>{n_item}</Text>
                        })
                    }
                </View>
            </View>
        )
    }
    render() {
        const { isIdea } = this.state;
        const { content_data } = this.state;
        return (
            <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
                <View style={[styles.title_bar, { height: 40 + STATUS_BAR_HEIGHT, paddingTop: STATUS_BAR_HEIGHT }]} >
                    <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.goBack()}
                            underlayColor='transparent'
                            style={{ flex: 1, alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={{ fontFamily: "iconfont", color: '#222424', fontSize: 20 }}>{'\ue71a'}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => { }}
                            underlayColor='transparent'
                            style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                            <Text style={{ color: '#222424', fontSize: 16 }}>编辑</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 40 + STATUS_BAR_HEIGHT }}>
                    <View style={styles.homePage_top}>
                        <View style={styles.homePage_top_left}>
                            <Text style={{ color: '#000000', fontSize: 22, marginBottom: 50 }}>辣辣的草莓酱</Text>
                            <Text style={{ color: '#8F9498', fontSize: 12 }}>写了 0 字 • 获得 0 喜欢</Text>
                            <Text style={{ color: '#8F9498', fontSize: 12 }}>读了17篇文章 • 累计打卡一天</Text>
                        </View>
                        <View style={styles.homePage_top_right}>
                            <Text style={{ fontFamily: "iconfont", color: '#8F9498', fontSize: 36 }}>{'\ue644'}</Text>
                        </View>
                    </View>
                    <View style={styles.content_container}>
                        <View style={styles.tab_container}>
                            <TouchableHighlight style={styles.tab_item}
                                onPress={() => this.setState({ isIdea: true })}
                                underlayColor='transparent'
                            >
                                <Text style={{ color: isIdea ? '#222425' : '#8F9498' }}>想法 0</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.tab_item}
                                onPress={() => this.setState({ isIdea: false })}
                                underlayColor='transparent'
                            >
                                <Text style={{ color: !isIdea ? '#222425' : '#8F9498' }}>喜欢 6</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.content}>
                            {
                                isIdea ?
                                    content_data.map((item, index) => {
                                        return (
                                            <View style={styles.idea_item} key={index}>
                                                <View style={styles.thought_top}>
                                                    <View style={styles.user_header}>
                                                        {
                                                            <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/images/header.jpg')}></Image>
                                                            //: <Text style={[styles.iconStyle, { fontSize: 24, color: '#9D9D9D' }]}>{'\ue644'}</Text>
                                                        }
                                                    </View>
                                                    <Text style={styles.user_nickname}>辣辣的草莓酱</Text>
                                                </View>
                                                <TouchableHighlight
                                                    underlayColor='#ffffff'
                                                    activeOpacity={1}
                                                    onPress={() => this.props.navigation.push('RumorDetail', { id: 0 })}
                                                >
                                                    <Text style={styles.thought_text}>夏蚊成雷，私拟作群鹤舞于空中，心之所向，则或千或百，果然鹤也；昂首观之，项为之强。又留蚊于素帐中，徐喷以烟，使之冲烟而飞鸣，作青云白鹤观，果如鹤唳云端，为之怡然称快。</Text>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    underlayColor='#ffffff'
                                                    activeOpacity={1}
                                                    onPress={() => this.props.navigation.push('ArticleDetail', { id: 0 })}
                                                    style={styles.article_info}>
                                                    <View style={{ flexDirection: 'row', alignItems: "center", }}>
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
                                                </TouchableHighlight>
                                            </View>
                                        )
                                    })
                                    :
                                    content_data.map((item, index) => {
                                        let artilce_book_name_arr = artilce_book_name.split('');
                                        return (
                                            <View style={styles.like_item} key={index}>
                                                <View style={{ flexWrap: "wrap", flex: 1 }}>
                                                    {
                                                        artilce_book_name_arr.map((n_item, n_index) => {
                                                            return <Text key={n_index} style={{ width: 16, fontSize: 16, marginRight: 5,fontFamily: '杨任东竹石体-Semibold' }}>{n_item}</Text>
                                                        })
                                                    }
                                                </View>
                                                <Text style={{ width: 13, fontSize: 13, color: '#B5B5B5', height: '100%', textAlignVertical: "bottom", fontFamily: '杨任东竹石体-Semibold'}}>周嘉宁</Text>
                                            </View>
                                        )
                                    })
                            }
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
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
        backgroundColor: 'rgba(235,240,247,0.8)',
        left: 0,
        right: 0,
        paddingLeft: 20,
        paddingRight: 20,
        zIndex: 1
    },
    homePage_top: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        padding: 20,
        paddingTop: 0,
        borderBottomColor: '#DAE5EB',
        borderBottomWidth: 1
    },
    homePage_top_left: {
        flex: 1
    },
    homePage_top_right: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#CCD3D9',
        justifyContent: "center",
        alignItems: "center"
    },
    content_container: {
        padding: 20,
    },
    tab_container: {
        flexDirection: 'row',
        alignItems: "center"
    },
    tab_item: {
        marginRight: 15
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingBottom: 50,
        marginTop: 30,
        
    },
    idea_item: {
        backgroundColor: '#fff',
        position: "relative",
        padding: 15,
        width: '100%',
        elevation: 5,
        borderRadius: 10,
        marginBottom:15
    },
    thought_top: {
        flexDirection: 'row',
        alignItems: "center"
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
        flex: 1,
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
        marginTop: 15,
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
    like_item: {
        backgroundColor: "#fff",
        width: '40%',
        height: 155,
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 20,
        padding: 11,
        flexDirection: "row"
    },
    artilce_book_name: {
        writingDirection: "rtl"
    }
})