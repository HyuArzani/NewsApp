import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Platform, StyleSheet, ActivityIndicator, View, FlatList} from 'react-native';
import {getHeadLines} from '@Actions/headlines.js';
import {SearchBar, NewsItem, MenuButton} from '@Component';
import * as globalStyle from '@Style/globalStyle.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedCountry:'id',
      isLoading: false,
    }
  }

  componentWillMount(){
    this.setState({
      isLoading: true
    })
  }

  componentDidMount(){
    const{dispatch}=this.props;
    dispatch(getHeadLines(this.state.selectedCountry)).then(()=>{
      this.setState({
        isLoading: false
      })
    })
  }

  navigateToDetail(item){
    this.props.navigation.push('NewsDetail', {data: item});
  }

  changeCountry(country){
    const{dispatch}=this.props;
    this.setState({
      isLoading: true
    })
    this.setState({selectedCountry: country}, ()=>{
      dispatch(getHeadLines(this.state.selectedCountry)).then(()=>{
        this.setState({
          isLoading: false
        })
      })
    })
  }

  render() {
    const{headlines}=this.props;
    return (
      <View style={styles.container}>
        {this.state.isLoading?
        <View style={{flex: 1, width: globalStyle.windowWidth, justifyContent:'center'}}>
          <ActivityIndicator
            size={"large"}
          />
        </View>
        :<FlatList
          ListHeaderComponent={
            <View
              style={{height: 60*globalStyle.WIDTH}}
            />
          }
          contentContainerStyle={{
            paddingHorizontal: 16*globalStyle.WIDTH,
            paddingBottom: 24*globalStyle.WIDTH
          }}
          data={headlines[this.state.selectedCountry]}
          renderItem={({item}) => 
              <NewsItem
                onPress={(item)=>this.navigateToDetail(item)}
                item={item}
              />
          }
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        />}
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
        <MenuButton
          onChange={(country)=>{this.changeCountry(country)}}
        />
      </View>
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
});

function mapStateToProps(state){
  const {headlines} = state;
  let result = {
    reduxState: state,
    headlines: headlines.headlines,
  };
  return result;
}

export default connect(mapStateToProps)(Home)
