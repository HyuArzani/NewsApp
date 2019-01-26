import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Platform, StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import {getHeadLines} from '@Actions/headlines.js';
import {SearchBar, NewsItem} from '@Component';
import * as globalStyle from '@Style/globalStyle.js';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      country:'id'
    }
  }

  componentDidMount(){
    const{dispatch}=this.props;
    dispatch(getHeadLines(this.state.country));
  }

  navigateToDetail(item){
    this.props.navigation.push('NewsDetail', {data: item});
  }

  changeCountry(country){
    const{dispatch}=this.props;
    this.setState({country: country}, 
      ()=>{
        dispatch(getHeadLines(this.state.country));
      })
  }

  render() {
    const{headlines}=this.props;
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
          data={headlines}
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
          onFocus={()=>{this.props.navigation.navigate('Search');}}
          placeholder="Search"
          placeholderTextColor="silver"
          containerStyle={{
            position: 'absolute',
            top: Platform.OS == 'ios'?40*globalStyle.WIDTH:20*globalStyle.WIDTH
          }}
          style={styles.searchTextStyle}
        />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' onPress={() => {this.changeCountry('us')}}>
            <View name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' onPress={() => {this.changeCountry('id')}}>
            <View name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' onPress={() => {this.changeCountry('uk')}}>
            <View name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

function mapStateToProps(state){
  const {headlines} = state;
  let result = {
    headlines: headlines.headlines,
  };
  return result;
}

export default connect(mapStateToProps)(Home)
