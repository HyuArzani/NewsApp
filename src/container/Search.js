import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SearchBar, SearchItem} from '@Component'
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {searchHeadlines} from '@Actions/search';
import * as globalStyle from '@Style/globalStyle.js';

class Search extends Component {

    searchArticles(keyword){
        const{dispatch}=this.props;
        dispatch(searchHeadlines(keyword));
    }

    navigateToDetail(item){
        this.props.navigation.push('NewsDetail', {data: item});
      }

    render() {
        const{search}=this.props;
        return (
            <SafeAreaView style={styles.container}>
                <SearchBar 
                    autoFocus={true}
                    placeholder="Search"
                    placeholderTextColor="silver"
                    containerStyle={{
                        marginTop: 20*globalStyle.WIDTH
                    }}
                    style={styles.searchTextStyle}
                    onBack={()=>{
                        this.props.navigation.goBack()
                    }}
                    onSearch={(text)=>{this.searchArticles(text)}}
                />
                <FlatList
                    contentContainerStyle={{
                        paddingHorizontal: 20*globalStyle.WIDTH,
                        paddingBottom: 24*globalStyle.WIDTH,
                    }}
                    data={search}
                    renderItem={({item}) => 
                        <SearchItem
                            onPress={(item)=>this.navigateToDetail(item)}
                            item={item}
                        />
                    }
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  searchTextStyle:{
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    marginLeft:10*globalStyle.WIDTH
  },
});

function mapStateToProps(state){
    const {search} = state;
    let result = {
      search: search.search,
    };
    return result;
  }

export default connect(mapStateToProps)(Search)
