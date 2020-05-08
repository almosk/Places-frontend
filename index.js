import 'react-native-gesture-handler';
// React
import { AppRegistry, View, Text, Button } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
// Continers and Components
import MainBottomTabNavigator from './navigators/MainBottomTabNavigator';
// Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './store';

const RNRedux = () => (
  <Provider store = { createStore(rootReducer, applyMiddleware(thunk)) }>
    <NavigationContainer>
      <MainBottomTabNavigator/>
    </NavigationContainer>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
