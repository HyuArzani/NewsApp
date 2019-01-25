import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

class NewsDetail extends Component {
  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', {});
    return (
      <WebView
        source={{ uri: data.url }}
        style={{ marginTop: 20 }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default NewsDetail
