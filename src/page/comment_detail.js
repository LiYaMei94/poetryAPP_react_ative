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
            <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
                <View style={[styles.title_bar, { height: 40 + STATUS_BAR_HEIGHT, paddingTop: STATUS_BAR_HEIGHT }]} >
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: "relative" }}>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.goBack()}
                            underlayColor='transparent'
                            style={{ alignItems: "center", justifyContent: "center", position: "absolute", left: 15 }}>
                            <Text style={{ fontFamily: "iconfont", color: '#222424', fontSize: 20 }}>{'\ue71a'}</Text>
                        </TouchableHighlight>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: '#222424', fontSize: 13 }}>宜珍惜</Text>
                        </View>
                        <TouchableHighlight
                            onPress={() => this.setState({ isComment_moda: true })}
                            underlayColor='transparent'
                            style={{ alignItems: "center", justifyContent: "center", position: "absolute", right: 15 }}>
                            <Text style={{ color: '#222424', fontSize: 30 }}>+</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.comment_info} >
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
                            onPress={() => this.props.navigation.push('ArticleCommentList', {})}
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
                </View>
                {
                    isComment_moda ? <Comment_modal _setComment_moda={this._setComment_moda.bind(this)} ></Comment_modal> : null
                }
            </LinearGradient>
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
        backgroundColor: 'rgba(235,240,247,0.6)',
        left: 0,
        right: 0,
        paddingLeft: 20,
        paddingRight: 20,
        zIndex: 1
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

})