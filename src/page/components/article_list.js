import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class ArticleList extends React.Component {
    static defaultProps = {

    }
    //page_item_touchableHighlight最后一个的marginRight是70
    render() {
        const { item, index, dataLength,navigation } = this.props;
        return (
            <TouchableHighlight style={[styles.page_item_touchableHighlight, { marginRight: index == dataLength - 1 ? 70 : 20 }]}
                underlayColor='white'
                activeOpacity={1}
                onPress={() => navigation.push('ArticleDetail', { id: index })}
            >
                <View style={[styles.page_item]}>
                    <View style={styles.article_top}>
                        <Text style={{ flex: 1 }}></Text>
                        <Text style={styles.article_title} ellipsizeMode='middle' numberOfLines={5}>{item.article[0].title}</Text>
                    </View>
                    <View style={styles.article_content}>
                        {
                            item.article[0].content.map((item, index) => {
                                return (
                                    <Text key={index} style={styles.article_p}>{item}</Text>
                                )
                            })
                        }
                    </View>
                    <View style={[styles.article_bottom]}>
                        <LinearGradient locations={[0.15, 0.75, 1]} colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.95)']} style={{ height: 90 }}></LinearGradient>
                        <View style={{ backgroundColor: '#ffffff', flex: 1, paddingTop: 0, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ flex: 1, color: '#888' }}>{item.article[0].likes}喜欢•{item.article[0].comment_num}想法</Text>
                            <TouchableHighlight
                                underlayColor={item.article[0].isRead ? '#F5F5F5' : '#C39F67'}
                                activeOpacity={1}
                                onPress={() => navigation.push('ArticleDetail', { id: index })}
                                style={[styles.read_button, { backgroundColor: item.article[0].isRead ? '#F5F5F5' : '#C39F67' }]}
                            >
                                <Text style={{ color: item.article[0].isRead ? '#A0A0A0' : 'white' }}>阅读</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    page_item_touchableHighlight: {
        width: 285,
        height: 420,
        borderRadius: 10,
        backgroundColor: '#FEFEFE',
        marginRight: 20,
    },
    page_item: {
        width: 285,
        height: 420,
        padding: 20,
        paddingBottom: 80,
        position: "relative",
    },
    article_top: {
        minHeight: 150,
        flexDirection: 'row',
        alignItems: "flex-start",
        paddingBottom: 15
    },
    article_title: {
        fontSize: 30,
        width: 35,
        textAlign: 'center'
    },
    article_author: {
        fontSize: 20,
        width: 25,
        textAlign: 'center'
    },
    article_content: {
        height: 192,
    },
    article_p: {
        marginBottom: 20,
        fontSize: 16,
        lineHeight: 26
    },
    article_bottom: {
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 0,
        width: 285,
        height: 160,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
    },
    //阅读按钮
    read_button: {
        width: 50,
        height: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "center"
    },
});
