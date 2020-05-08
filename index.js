import 'react-native-gesture-handler';
// React
import { AppRegistry, View, Text, Button } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Continers and Components
import MainBottomTabNavigator from './navigators/MainBottomTabNavigator';
import NewPostScreen from './containers/NewPostScreen'
// Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './store';

const RNRedux = () => (
  <Provider store = { createStore(rootReducer, applyMiddleware(thunk)) }>
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
        mode='modal'
        initialRouteName="MainBottomTabNavigator"
      >
        <Stack.Screen name="MainBottomTabNavigator" component={MainBottomTabNavigator} />
        <Stack.Screen name="New Post" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)

const Stack = createStackNavigator();

AppRegistry.registerComponent(appName, () => RNRedux);
