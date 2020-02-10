import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from './containers/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore()

const RNRedux = () => (
  <NavigationContainer>
    <Provider store = { store }>
      <App />
    </Provider>
  </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => RNRedux);
