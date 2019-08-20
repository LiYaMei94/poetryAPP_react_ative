import React, { Component } from 'react';
import { Text, StyleSheet, Image, View, TouchableHighlight,NativeModules } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class RumorList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.thought_conatiner}>
                <View style={styles.thought_top}>
                    <View style={styles.user_info}>
                        <View style={styles.user_header}>
                            {
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../../assets/images/header.jpg')}></Image>
                                //: <Text style={[styles.iconStyle, { fontSize: 24, color: '#9D9D9D' }]}>{'\ue644'}</Text>
                            }
                        </View>
                        <Text style={styles.user_nickname}>辣辣的草莓酱</Text>
                    </View>
                    <Text style={[styles.iconStyle, styles.share_button]}>{'\ue602'}</Text>
                </View>
                <TouchableHighlight
                    underlayColor='#ffffff'
                    activeOpacity={1}
                    onPress={() => navigation.push('RumorDetail', { id: 0 })}
                >
                    <Text style={styles.thought_text}>夏蚊成雷，私拟作群鹤舞于空中，心之所向，则或千或百，果然鹤也；昂首观之，项为之强。又留蚊于素帐中，徐喷以烟，使之冲烟而飞鸣，作青云白鹤观，果如鹤唳云端，为之怡然称快。</Text>
                </TouchableHighlight>
                
                <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%' }}>
                    <TouchableHighlight
                        underlayColor='#ffffff'
                        activeOpacity={1}
                        onPress={() => navigation.push('ArticleDetail', { id: 0 })}
                        style={styles.article_info}>
                        <View style={{flexDirection: 'row', alignItems: "center",}}>
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
                    <View style={styles.thought_bottom_operation}>
                        <Text style={styles.thought_date}>5月前</Text>
                        <View style={styles.thought_operation}>
                            <TouchableHighlight
                                underlayColor='#ffffff'
                                activeOpacity={1}
                                onPress={() => { }}
                                style={{ marginRight: 20 }}
                            >
                                <View style={styles.article_give_like}>
                                    <Text style={[styles.iconStyle, { fontSize: 18, color: '#898989' }]}>{'\ue634'}</Text>
                                    <Text style={{ color: '#898989', marginLeft: 5, fontSize: 11 }}>{22}</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='#ffffff'
                                activeOpacity={1}
                            //onPress={this._give_like.bind(this, index)}
                            >
                                <View style={styles.article_give_like}>
                                    {
                                        //<Text style={[styles.iconStyle, { fontSize: 24, color: item.article[0].liked ? '#ED4956' : '#D4D4D4' }]}>{item.article[0].liked ? '\ue635' : '\ue61b'}</Text>
                                    }
                                    <Text style={[styles.iconStyle, { fontSize: 18, color: '#898989' }]}>{'\ue61b'}</Text>
                                    <Text style={{ color: '#898989', marginLeft: 5, fontSize: 11 }}>{22}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thought_conatiner: {
        position: "relative",
        width: '100%',
        height: '100%',
    },
    thought_top: {
        flexDirection: 'row',
        alignItems: "center"
    },
    user_info: {
        flexDirection: 'row',
        alignItems: "center",
        flex: 1
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
    share_button: {
        fontSize: 18,
    },
    iconStyle: {
        fontFamily: "iconfont",
        fontSize: 30,
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
    thought_bottom_operation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    thought_date: {
        width: 100,
        color: '#898989',
        fontSize: 11
    },
    thought_operation: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    article_give_like: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});
