import React from 'react';
import {
StyleSheet
} from 'react-native';

var comment_common_css= StyleSheet.create({
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

module.exports = comment_common_css;