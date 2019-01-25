import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, TextInput, View, Image} from 'react-native';
import * as globalStyle from '../style/globalStyle.js';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      input:"",
      typingTimeout:0,
      typing: false,
    }
  }

  changeText(text){
    if (this.state.typingTimeout) {
        clearTimeout(this.state.typingTimeout);
    }
    this.setState({
        typing: false,
        input: text,
        typingTimeout: setTimeout(()=>{
            console.log("DO SOMETHING HERE", text)
        }, 1000)
    });
  }

  render() {
    const {containerStyle} = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput 
          {...this.props}
          onSubmitEditing={() => {
            console.log("DO SOMETHING HERE", this.state.input)       
          }}
          onChangeText={(text)=>{this.changeText(text)}}
          value={this.state.input}
          />
        <TouchableOpacity
          style={{padding: 10*globalStyle.WIDTH}}
          onPress={() => console.log("DO SOMETHING HERE", this.state.input)}
        >
          <Image style={styles.icSearch}
            source={require('@Assets/ic-search.png')}
          />
        </TouchableOpacity>
      </View>
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
  icSearch:{
    width: 30*globalStyle.WIDTH, 
    height: 30*globalStyle.WIDTH,
  }
});

export default SearchBar
