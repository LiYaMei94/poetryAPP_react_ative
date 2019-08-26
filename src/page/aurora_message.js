import React, { Component } from 'react';
import { Text, StyleSheet, FlatList, View, TouchableHighlight, Dimensions, Animated, DeviceEventEmitter, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {STATUS_BAR_HEIGHT} from '../utils/deviceInfo';
const message_arr=[1,2,3,4]
export default class Gossip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    message_item_render({item}){
        return(
            <View style={styles.message_item}>
                <View style={styles.message_item_top}>
                    <Text style={{flex:1,color:'#0C1621',fontSize:15}}>消息通知</Text>
                    <Text style={{color:'#A3A5A4',fontSize:12,width:90,textAlign:'right'}}>2019年8月21</Text>
                </View>
                <Text>
                    消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
                </Text>
            </View>
        )
    }
    render() {
        return (
            <View  style={[styles.container]}>
                <View style={[styles.title_bar, { height: 40 + STATUS_BAR_HEIGHT, paddingTop: STATUS_BAR_HEIGHT }]} >
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: "relative" }}>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.goBack()}
                            underlayColor='transparent'
                            style={{ alignItems: "center", justifyContent: "center", position: "absolute", left: 15 }}>
                            <Text style={{ fontFamily: "iconfont", color: '#222424', fontSize: 20 }}>{'\ue71a'}</Text>
                        </TouchableHighlight>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", }}>
                            <Text style={{ color: '#222424' }}>消息通知</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.message_container,{marginTop:40 + STATUS_BAR_HEIGHT}]}>
                    <FlatList
                        data={message_arr}
                        keyExtractor={(item,index)=>index+''}
                        renderItem={this.message_item_render.bind(this)}
                    >

                    </FlatList>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
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
    message_container:{
        padding:20,
        marginTop:40
    },
    message_item:{
        width:'100%',
        marginBottom:20,
        borderRadius:10,
        backgroundColor:'#fff',
        padding:8
    },
    message_item_top:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:5
    }
})