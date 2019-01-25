import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import * as globalStyle from '../style/globalStyle.js';

class NewsItem extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    const {item, onPress} = this.props;
    return (
      <TouchableOpacity 
        onPress={()=>{
          onPress && onPress(item)
        }}
        style={{

        }}
      >
        <Image
          style={{
            flex:1,
            height: 160*globalStyle.WIDTH
          }}
          source={{uri: item.urlToImage}}
        />
        <Text numberOfLines={2}>{item.title}</Text>
        <Text numberOfLines={4}>{item.description}</Text>
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
