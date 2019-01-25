import React, {Component} from 'react';
import {Image, StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import {SearchBar, NewsItem} from '../component';
import * as globalStyle from '../style/globalStyle.js';
import axios from 'axios';
import {NEWS_API} from '../../config.js';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      headlines:[]
    }
  }

  componentDidMount(){
    this.getHeadlines().then(resolve=>{
      this.setState({headlines: resolve}, ()=>{
        console.log("RESPONSE == ", this.state.headlines);
      })
    }).catch(error=>{

    })
  }

  getHeadlines(){
    return new Promise((resolve, reject)=>{
      axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey='+NEWS_API,{timeout: 40000})
      .then(function (response) {
        if(response.data && response.data.articles){
          resolve(response.data.articles);
        }
        reject("No Article in the headlines");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        reject(error);
      });
    })
  }

  navigateToDetail(item){
    this.props.navigation.navigate('NewsDetail', {data: item});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <View
              style={{height: 60*globalStyle.WIDTH}}
            />
          }
          contentContainerStyle={{
            paddingHorizontal: 16*globalStyle.WIDTH,
            paddingBottom: 24*globalStyle.WIDTH
          }}
          data={this.state.headlines}
          renderItem={({item}) => 
              <NewsItem
                onPress={(item)=>this.navigateToDetail(item)}
                item={item}
              />
          }
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        />
        <SearchBar 
          placeholder="Search"
          placeholderTextColor="silver"
          containerStyle={{
            position: 'absolute',
            top: 20*globalStyle.WIDTH
          }}
          style={styles.searchTextStyle}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchTextStyle:{
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    marginLeft:10*globalStyle.WIDTH
  }
});

export default Home
