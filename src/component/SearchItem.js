import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import * as globalStyle from '../style/globalStyle.js';

class SearchItem extends Component {
  render() {
    const {item, onPress} = this.props;
    return (
      <TouchableOpacity 
        onPress={()=>{
          onPress && onPress(item)
        }}
        style={{
            width: globalStyle.windowWidth-40*globalStyle.WIDTH,
            paddingVertical: 20*globalStyle.WIDTH,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor:'silver',
            borderBottomWidth: 1,
        }}
      >
        {item.urlToImage && <Image
          style={{
            borderRadius: 30*globalStyle.WIDTH,  
            height: 60*globalStyle.WIDTH,
            width: 60*globalStyle.WIDTH,
            marginRight: 16*globalStyle.WIDTH,
          }}
          source={{uri: item.urlToImage}}
        />}
        {item.title !== 0&& 
        <View
            style={{
                flex: 1,
            }}
        >
            <Text 
            numberOfLines={2}
            style={{
                fontWeight: 'bold',
                fontSize:16,
                flex: 1
            }}
            >{item.title}</Text>
            <Text 
            style={{
                color: 'silver',
                fontSize:12,
                textAlign: 'right'
            }}
            >{item.source.name}</Text>
        </View>}
      </TouchableOpacity>
    );
  }
}

export default SearchItem
