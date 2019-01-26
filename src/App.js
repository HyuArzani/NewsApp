/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import AppNavigator from './container';
import {createAppContainer} from 'react-navigation';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <AppContainer/>
      </Provider>
    );
  }
}

export default App
