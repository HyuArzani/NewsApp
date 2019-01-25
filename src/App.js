/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {AppNavigator} from './route';
import {createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

export default App
