import React, { Component } from 'react';
import {
  Text,
View,
TextInput,
TouchableHighlight,
PropTypes,
NativeModules,
ScrollView,
StyleSheet,
DeviceEventEmitter,
} from 'react-native';
import { STATUS_BAR_HEIGHT } from '../utils/deviceInfo';
import ShareUtil from '../../libs/ShareUtil';
export default class IdeaViewshoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{}
    };

  }

  componentWillMount() { }

  componentDidMount() {
    
  }
  //用户名密码登录
  _login(){

  }
  //第三方登录
  other_login(platfrom){
    var list = [0,1,2,3,4,7,8];//0:qq,1:新浪, 2:微信, 3:微信朋友圈,4:qq空间, 7:Facebook, 8:Twitter 
    ShareUtil.auth(platfrom,(code,result,message) =>{
        console.warn(result)
        if (code == 200){
           this.setState({userInfo:result});
           this.props.navigation.goBack();
        }
    });
  }
  render() {
    return (
      <View style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
        <View style={[styles.title_bar, { height: 40 + STATUS_BAR_HEIGHT, paddingTop: STATUS_BAR_HEIGHT }]} >
            <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
                <TouchableHighlight
                    onPress={() => this.props.navigation.goBack()}
                    underlayColor='transparent'
                    style={{ flex: 1, alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={{ fontFamily: "iconfont", color: '#222424', fontSize: 20 }}>{'\ue71a'}</Text>
                </TouchableHighlight>
            </View>
        </View>
        <View style={[styles.account_password_login,{paddingTop: 40 + STATUS_BAR_HEIGHT}]}>
            <TextInput style={styles.inputStyle} placeholder='用户名'></TextInput>
            <TextInput style={styles.inputStyle} placeholder='密码'></TextInput>
            <TouchableHighlight
                onPress={this._login.bind(this)}
                underlayColor='transparent'
                style={styles.loginBtn}>
                <Text style={{ fontFamily: "iconfont", color: '#C5837E', fontSize: 16 }}>登录</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.others_login}>
            <Text style={{color:'#B7B7B7',fontSize:12}}>第三方登录</Text>
            <View style={styles.others_platfrom}>
                <TouchableHighlight
                    onPress={this.other_login.bind(this,2)}
                    underlayColor='transparent'
                    style={[styles.platfrom_bg,{backgroundColor:'#8DC81B'}]}>
                    <Text style={{ color: '#ffffff', fontSize: 22,fontFamily: "iconfont", }}>{'\ue607'}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.other_login.bind(this,0)}
                    underlayColor='transparent'
                    style={[styles.platfrom_bg,{backgroundColor:'#68A5E1'}]}>
                    <Text style={{ color: '#ffffff', fontSize: 22,fontFamily: "iconfont", }}>{'\ue752'}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.other_login.bind(this,1)}
                    underlayColor='transparent'
                    style={[styles.platfrom_bg,{backgroundColor:'#FB9315'}]}>
                    <Text style={{ color: '#ffffff', fontSize: 22,fontFamily: "iconfont", }}>{'\ue63d'}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.other_login.bind(this,7)}
                    underlayColor='transparent'
                    style={[styles.platfrom_bg,{backgroundColor:'#3B5997'}]}>
                    <Text style={{ color: '#ffffff', fontSize: 22,fontFamily: "iconfont", }}>{'\ue63a'}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.other_login.bind(this,8)}
                    underlayColor='transparent'
                    style={[styles.platfrom_bg,{backgroundColor:'#28AAE1',marginRight:0}]}>
                    <Text style={{ color: '#ffffff', fontSize: 22,fontFamily: "iconfont", }}>{'\uec9c'}</Text>
                </TouchableHighlight>
            </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    position:"relative"
  },
  title_bar: {
    flexDirection: "row",
    alignItems: 'center',
    height: 50,
    position: "absolute",
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    left: 0,
    right: 0,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 1,
    borderBottomColor:'#E8E8E8',
    borderBottomWidth:1
  },
  account_password_login:{
    padding:35
  },
  inputStyle:{
    width:'100%',
    height:50,
    borderBottomColor:'#F0F0F0',
    borderBottomWidth:1,
    fontSize:16
  },
  loginBtn:{
    width:'100%',
    height:50,
    borderColor:'#C5837E',
    borderWidth:1,
    borderRadius:5,
    justifyContent: "center",
    alignItems:"center",
    marginTop:30
  },
  others_login:{
    alignItems:"center",
    padding:35,
    position:"absolute",
    bottom:0
  },
  others_platfrom:{
    flexDirection:'row',
    marginTop:20,
    flexWrap:"wrap",
    justifyContent:"center"
  },
  platfrom_bg:{
    width:45,
    height:45,
    borderRadius:50,
    justifyContent: "center",
    alignItems:"center",
    marginRight:15,
    marginBottom:15
  }
  
});
