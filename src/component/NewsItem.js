import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, ImageBackground} from 'react-native';
import * as globalStyle from '../style/globalStyle.js';

class NewsItem extends Component {
  render() {
    const {item, onPress} = this.props;
    return (
      <TouchableOpacity 
        onPress={()=>{
          onPress && onPress(item)
        }}
        style={{
          marginVertical: 20*globalStyle.WIDTH
        }}
      >
        {item.urlToImage && <ImageBackground
          style={{
            flex:1,
            height: 160*globalStyle.WIDTH,
            marginBottom: 8*globalStyle.WIDTH,
            justifyContent: 'flex-end',
            alignItems:'flex-end'
          }}
          source={{uri: item.urlToImage}}
        >
          <Text style={{
            paddingBottom: 6*globalStyle.WIDTH,
            paddingHorizontal: 10*globalStyle.WIDTH,
            color: 'white'
          }}>{item.source.name}</Text>
        </ImageBackground>}
        {item.title !== 0&&<Text 
          numberOfLines={2}
          style={{
            fontWeight: 'bold',
            fontSize:20,
            marginBottom: 4*globalStyle.WIDTH
          }}
        >{item.title}</Text>}
        {item.description !== 0&&<Text 
          numberOfLines={4}
          style={{
            fontSize: 12
          }}
        >{item.description}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50*globalStyle.WIDTH,
    width: globalStyle.windowWidth-40*globalStyle.WIDTH,
    backgroundColor:'white',
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default NewsItem
