import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('NewsDetail')}
        />
      </View>
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

export default Home
