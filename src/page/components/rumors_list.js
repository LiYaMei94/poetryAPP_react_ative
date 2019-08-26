import React, { Component } from 'react';
import { Text, StyleSheet, Image, View, TouchableHighlight,NativeModules } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IdeaViewShot from './ideaViewShot'
import comment_common_css from '../../assets/css/comment_common_css';
export default class RumorList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={comment_common_css.thought_conatiner}>
                <View style={comment_common_css.thought_top}>
                    <View style={comment_common_css.user_info}>
                        <TouchableHighlight style={comment_common_css.user_header}
                            underlayColor='transparent'
                            onPress={()=>this.props.navigation.push('MyHomepage')}
                        >
                            {
                            <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../../assets/images/header.jpg')}></Image>
                            //: <Text style={[styles.iconStyle, { fontSize: 24, color: '#9D9D9D' }]}>{'\ue644'}</Text>
                            }
                        </TouchableHighlight>
                        <Text style={comment_common_css.user_nickname}>辣辣的草莓酱</Text>
                    </View>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={()=>{
                            //this.ideaViewShot.onCapture()
                        }}
                    >
                        <Text style={[comment_common_css.iconStyle, comment_common_css.share_button]} >{'\ue602'}</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    underlayColor='#ffffff'
                    activeOpacity={1}
                    onPress={() => navigation.push('RumorDetail', { id: 0 })}
                >
                    <Text style={comment_common_css.thought_text}>夏蚊成雷，私拟作群鹤舞于空中，心之所向，则或千或百，果然鹤也；昂首观之，项为之强。又留蚊于素帐中，徐喷以烟，使之冲烟而飞鸣，作青云白鹤观，果如鹤唳云端，为之怡然称快。</Text>
                </TouchableHighlight>
                
                <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%' }}>
                    <TouchableHighlight
                        underlayColor='#ffffff'
                        activeOpacity={1}
                        onPress={() => navigation.push('ArticleDetail', { id: 0 })}
                        style={comment_common_css.article_info}>
                        <View style={{flexDirection: 'row', alignItems: "center",}}>
                            <View style={comment_common_css.article_date}>
                                <Text style={[comment_common_css.article_date_text, { position: "absolute", top: 15, left: 8 }]}>12</Text>
                                <View style={[comment_common_css.article_date_bar, { transform: [{ skewY: '-45deg' }] }]}></View>
                                <Text style={[comment_common_css.article_date_text, { position: "absolute", top: 30, left: 28 }]}>31</Text>
                            </View>
                            <View style={comment_common_css.article_title_source}>
                                <Text style={comment_common_css.article_name}>童趣</Text>
                                <Text style={comment_common_css.article_source}>世界长大了，我也老了</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={comment_common_css.thought_bottom_operation}>
                        <Text style={comment_common_css.thought_date}>5月前</Text>
                        <View style={comment_common_css.thought_operation}>
                            <TouchableHighlight
                                underlayColor='#ffffff'
                                activeOpacity={1}
                                onPress={() => { }}
                                style={{ marginRight: 20 }}
                            >
                                <View style={comment_common_css.article_give_like}>
                                    <Text style={[comment_common_css.iconStyle, { fontSize: 18, color: '#898989' }]}>{'\ue634'}</Text>
                                    <Text style={{ color: '#898989', marginLeft: 5, fontSize: 11 }}>{22}</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='#ffffff'
                                activeOpacity={1}
                            //onPress={this._give_like.bind(this, index)}
                            >
                                <View style={comment_common_css.article_give_like}>
                                    {
                                        //<Text style={[comment_common_css.iconStyle, { fontSize: 24, color: item.article[0].liked ? '#ED4956' : '#D4D4D4' }]}>{item.article[0].liked ? '\ue635' : '\ue61b'}</Text>
                                    }
                                    <Text style={[comment_common_css.iconStyle, { fontSize: 18, color: '#898989' }]}>{'\ue61b'}</Text>
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
    
});
