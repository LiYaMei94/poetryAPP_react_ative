import React, { Component } from 'react';
import { Animated, StyleSheet, Keyboard, View, Dimensions, Image, Text, TouchableHighlight, TextInput, NativeModules } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../../utils/deviceInfo';
export default class comment_modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyBoardHeight: 0,
            comment_modal_height: 0,
            textInput_height: new Animated.Value(0),
            idea_text:'',
            screen_height:Dimensions.get('window').height
        }
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow(e) {
        this.setState({
            keyBoardHeight: e.endCoordinates.height
        });
    }
    _keyboardDidHide() {
        this.setState({
            keyBoardHeight: 0,
        });
    }
    render() {
        const { keyBoardHeight, screen_height, comment_modal_height } = this.state;
        return (
            <View style={[styles.comment_modal,{paddingTop:STATUS_BAR_HEIGHT,height:screen_height}]}>

                <View style={styles.modal_top}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.head_portrait}>
                            {
                                //{uri:c_item.header_img}
                                //c_item.header_img != '' ?
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../../assets/images/header.jpg')}></Image>
                                //: <Text style={[styles.iconStyle, { fontSize: 24, color: '#9D9D9D' }]}>{'\ue644'}</Text>
                            }
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: '#1C1C1C', fontSize: 18 }}>辣辣的草莓酱</Text>
                            <Text style={{ color: '#717171', fontSize: 12, marginTop: 3 }}>2019年8月15日</Text>
                        </View>
                    </View>
                    <TouchableHighlight
                        underlayColor='#9B9B9B'
                        activeOpacity={1}
                        onPress={() =>this.props._setComment_moda(false,'')}
                        style={{ width: 70, flexDirection: 'row', alignItems: 'center', justifyContent: "flex-end"}}
                    >
                        <Text style={[styles.iconStyle, { fontSize: 30, color: '#020202' }]}>{'\ue682'}</Text>
                    </TouchableHighlight>
                </View>
                <Animated.View style={[styles.textarea_container, {height:  keyBoardHeight==0?520:270 }]}>
                    <TextInput
                        style={{ height: '100%', width: '100%', textAlignVertical: 'top' }}
                        placeholder='输入你的想法吧~'
                        onChangeText={(text) => this.setState({idea_text:text})}
                        autoFocus={true}
                        onFocus={() => {
                            //console.warn('comment_modal_height=='+comment_modal_height)
                            //console.warn('keyBoardHeight=='+keyBoardHeight)
                            Animated.timing(
                                this.state.textInput_height,
                                {
                                    toValue: comment_modal_height - keyBoardHeight,
                                    duration: 700,
                                },
                            ).start()
                        }}
                        multiline={true}
                    />
                    <TouchableHighlight
                        underlayColor='#9B9B9B'
                        activeOpacity={1}
                        onPress={() =>this.props._setComment_moda(false,this.state.idea_text)}
                        style={styles.send_button}
                    >
                        <Text style={{color:'white',fontSize:15}}>发送</Text>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        fontFamily: "iconfont",
        fontSize: 30,
    },
    head_portrait: {
        width: 40,
        height: 40,
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    //评论modal
    comment_modal: {
        backgroundColor: '#9B9B9B',
        position: "absolute",
        top: 0,
        elevation: 20,//card的是15
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%'
    },
    modal_top: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
        position:"relative"
    },
    textarea_container: {
        backgroundColor: "white",
        borderRadius: 12,
        width: '100%',
        height: '80%',
        padding: 20
    },
    send_button:{
        width: 50,
        height: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "center",
        position:'absolute',
        right:20,
        bottom:20,
        zIndex:20,
        backgroundColor:'#C39F67'
    }
});
