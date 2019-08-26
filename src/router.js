import React, { Component } from 'react';
import { Easing, Animated,Text,StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { STATUS_BAR_HEIGHT } from './utils/deviceInfo';
const height = STATUS_BAR_HEIGHT + 44;
const paddingTop = STATUS_BAR_HEIGHT;


//路由文件

import Gossip from './page/gossip';
import Rumors from './page/rumors';
import Mine from './page/mine';
import ArticleDetail from './page/article_detail';
import RumorDetail from './page/rumor_detail';
import ReadCalendar from './page/read_calendar';
import ArticleCommentList from './page/article_comment_list';
import AuroraMessage from './page/aurora_message';
import MyHomepage from './page/my_homepage';
import Test from './page/test';

//底部tabbar的图标
const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === '流言') {
        iconName = '\ue63e';
    } else if (routeName === '蜚语') {
        iconName = '\ue641';
    }else{
        iconName = '\ue644';
    }
    return <Text style={[styles.iconStyle,{color:tintColor}]}>{iconName}</Text>;
};


//底部tabbar
const TabNavigator = createBottomTabNavigator(
    {
        流言: createStackNavigator(
            {
                Gossip: {
                    screen: Gossip,
                    navigationOptions: {
                        header: null,
                    },
                },
            }
        ),
        蜚语: createStackNavigator(
            {
                Rumors: {
                    screen: Rumors,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
        我的: createStackNavigator(
            {
                Mine: {
                    screen: Mine,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
    },
    {
        defaultNavigationOptions: ({ navigation }) => (
            {
                tabBarIcon: ({ focused, tintColor }) =>
                    getTabBarIcon(navigation, focused, tintColor),
            }
        ),
        tabBarOptions: {
            activeTintColor: '#777',
            inactiveTintColor: '#b2bec6',
            style: {
                backgroundColor: '#CDDFEA',
                borderTopColor: "transparent"
            },
        },
    }
);

//创建全局导航器createStackNavigator
export const router = createStackNavigator(
    {
        bottomTabNavigator: TabNavigator,
        ArticleDetail:ArticleDetail,
        RumorDetail:RumorDetail,
        ReadCalendar:ReadCalendar,
        ArticleCommentList:ArticleCommentList,
        AuroraMessage:AuroraMessage,
        MyHomepage:MyHomepage,
        Test:Test,
    },
    {
        initialRouteName: "bottomTabNavigator",
        mode: 'modal',
        defaultNavigationOptions: {
            header: null,
        },
    }
)

const styles = StyleSheet.create({
    iconStyle:{
        fontFamily: "iconfont",
        fontSize: 25,
    }
})