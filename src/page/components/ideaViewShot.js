import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import ViewShot from 'react-native-view-shot';

import LinearGradient from 'react-native-linear-gradient';
export default class IdeaViewshoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          screen_height:Dimensions.get('window').height,
        }
    }
    componentDidMount() {
        /*this.refs.viewShot.capture().then(uri => {
            //console.warn("do something with ", uri);
        });*/
    }
    onCapture = uri => {
        console.log("do something with ", uri);
    }
    render() {
      const {screen_height}=this.state;
        return (
            <ViewShot ref="viewShot" onCapture={this.onCapture} captureMode="mount" options={{ format: "jpg", quality: 0.9}} style={styles.container}>
                <LinearGradient colors={['#EBF0F7', '#E1ECF6', '#D7E9F4']} style={{flex:1}}>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        style={{flex:1}}>
                        <View style={styles.share_user_info}>
                          <View style={{flex:1}}>
                            <Text style={{color:'#202124',fontSize:20}}>辣辣的草莓酱</Text>
                            <Text style={{color:'#A1A4AB',fontSize:13,marginTop:5}}>向您推荐</Text>
                          </View>
                          {
                            <Image style={styles.user_header} source={require('../../assets/images/header.jpg')}></Image>
                          }
                        </View>
                        <View style={[styles.content,{minHeight:(screen_height-180)}]} >
                            <Text style={styles.article_text_item}>
                                可怜今夕月，向何处，去悠悠？是别有人间，那边才见，光影东头？是天外。空汗漫，但长风浩浩送中秋？飞镜无根谁系？姮娥不嫁谁留？
                            </Text>
                            <Text style={styles.article_text_item}>可怜今夕月</Text>
                            <Text style={styles.article_text_item}>世界长大了，我也老了</Text>
                        </View>
                        <Text style={{color:'#A1A4AB',fontSize:13,width:'100%',textAlign:"center"}}>每天五分钟，读点好文章</Text>

                    
                    </ScrollView>
                </LinearGradient>
            </ViewShot>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content:{
        padding:20,
        backgroundColor:'#fff',
        borderRadius:15,
        width:'90%',
        marginLeft:'5%',
        marginTop:20,
        elevation:5,
        marginBottom:30
    },
    article_text_item:{
      marginBottom:20,
      lineHeight:20,
      fontSize:15
    },
    share_user_info:{
      flexDirection:"row",
      alignItems:"center",
      padding:30,
      paddingBottom:0
    },
    user_header:{
      width:55,
      height:55,
      borderRadius:50
    }
});

/*import React, { useCallback, useState, useRef,CameraRoll } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import ViewShot from 'react-native-view-shot';

const Viewshoot = () => {
  const full = useRef();
  const [preview, setPreview] = useState(null);
  const [itemsCount, setItemsCount] = useState(10);
  const [refreshing, setRefreshing] = useState(false);

  const onCapture = useCallback(() => {
    full.current.capture().then(uri => {
      setPreview({ uri })
      console.warn(uri)

      //CameraRoll.saveToCameraRoll(uri, 'photo');
    });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.root}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
              setItemsCount(itemsCount + 10);
              setRefreshing(false);
            }, 5000);
          }}
        />
      }
    >
      <SafeAreaView>
        <ViewShot ref={full} style={styles.container}>
          <TouchableHighlight
            onPress={onCapture}
          >
            <Text>Shoot Me</Text>
          </TouchableHighlight>
          <Image
            fadeDuration={0}
            resizeMode="contain"
            style={styles.previewImage}
            source={preview}
          />

          {Array(itemsCount)
            .fill(null)
            .map((_, index) => ({
              key: index,
              text: `${index + 1}`,
              color: `hsl(${(index * 13) % 360}, 50%, 80%)`,
            }))
            .map(({ key, text, color }) => {
              return (
                <View style={[styles.item, { backgroundColor: color }]} key={key}>
                  <Text style={styles.itemText}>{text}</Text>
                </View>
              );
            })}
        </ViewShot>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  root: {
    paddingVertical: 20,
  },
  content: {
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 22,
    color: '#666',
  },
  previewImage: {
    height: 200,
    //backgroundColor: 'black',
  },
});

Viewshoot.navigationProps = {
  title: 'Viewshoot',
};

export default Viewshoot;*/