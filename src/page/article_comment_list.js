import React, { Component } from 'react';
import {
    Platform, StyleSheet, StatusBar, View, TouchableHighlight, Text, ScrollView, Image, Dimensions, FlatList
} from 'react-native';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
import LinearGradient from 'react-native-linear-gradient';
import Comment_modal from './components/comment_modal'
const arr = [1, 2, 3, 4, 5, 6, 6]
export default class article_comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComment_moda:false
        }
    }
    listRender({ item }) {
        return (
            <TouchableHighlight 
                underlayColor='transparent'
                onPress={()=>this.props.navigation.push('RumorDetail')}
            >
               <View style={styles.comment_list}>
                <View style={{ alignItems: "center", flexDirection: 'row', marginBottom: 15 }}>
                        <Image style={{ width: 30, height: 30, borderRadius: 50, marginRight: 15 }} source={require('../assets/images/header.jpg')}></Image>
                        <Text style={{ color: '#222424', fontSize: 12 }}>想不明白</Text>
                    </View>
                    <Text style={{ fontSize: 13, marginBottom: 15 }}>
                        父母，就是终其一生无法说出个是非对错的吧。
                    </Text>
                    <View style={{ alignItems: "center", flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontSize: 12, color: '#888' }}>2天前</Text>
                        <TouchableHighlight
                            underlayColor='transparent'
                            onPress={() => { alert('点赞操作') }}
                        >
                            <Text style={[styles.iconStyle, { fontSize: 18, color: '#888' }]}>{'\ue61b'}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor='transparent'
                            onPress={() => { alert('评论操作') }}
                            style={{ marginLeft: 20 }}
                        >
                            <Text style={[styles.iconStyle, { fontSize: 18, color: '#888' }]}>{'\ue634'}</Text>
                        </TouchableHighlight>
                    </View>
               </View>
            </TouchableHighlight>
        )
    }
    _setComment_moda(isComment_moda, text) {
        if (text != '') {
          
        }
        this.setState({
          isComment_moda: isComment_moda,
        })
      }
    render() {
        const {isComment_moda}=this.state;
        return (
            <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
                <View style={[styles.title_bar, { height: 40 + STATUS_BAR_HEIGHT, paddingTop: STATUS_BAR_HEIGHT }]} >
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: "relative" }}>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.goBack()}
                            underlayColor='transparent'
                            style={{ alignItems: "center", justifyContent: "center", position: "absolute", left: 0 }}>
                            <Text style={{ fontFamily: "iconfont", color: '#222424', fontSize: 24 }}>{'\ue71a'}</Text>
                        </TouchableHighlight>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: '#222424', fontSize: 13 }}>宜珍惜</Text>
                            <Text style={{ color: '#999', fontSize: 12 }}>128个想法</Text>
                        </View>
                        <TouchableHighlight
                            onPress={() =>this.setState({isComment_moda:true})}
                            underlayColor='transparent'
                            style={{ alignItems: "center", justifyContent: "center", position: "absolute", right: 15 }}>
                            <Text style={{ color: '#222424', fontSize: 30 }}>+</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={[styles.comment_container, { marginTop: 50}]}>
                    <FlatList showsVerticalScrollIndicator={false} data={arr} keyExtractor={(item, index) => index + ''} renderItem={this.listRender.bind(this)}></FlatList>
                </View>
                {
                    isComment_moda ? <Comment_modal _setComment_moda={this._setComment_moda.bind(this)} ></Comment_modal> : null
                }
            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'relative'
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
        zIndex: 1,
        
    },
    comment_container: {
        padding: 20,
        paddingTop: 0,
        paddingBottom: 0,
    },
    comment_list: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20
    },
    iconStyle: {
        fontFamily: "iconfont",
        fontSize: 30,
    },
    
})