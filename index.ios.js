import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import App from './app/app'
import { createStore } from 'redux'
import addSubtractApp from './app/reducers'

let store = createStore(addSubtractApp);

export default class AddSubtract extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AddSubtract', () => AddSubtract);
