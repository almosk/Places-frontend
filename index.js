import 'react-native-gesture-handler';
// React
import { AppRegistry, View, Text, Button } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Continers and Components
import ProfileScreen from './containers/ProfileScreen';
import ExploreScreen from './containers/ExploreScreen';
import LoginForm from './containers/LoginForm';
import NewsNavigator from './navigators/NewsNavigator';
import ProfileNavigator from './navigators/ProfileNavigator';
import ExploreNavigator from './navigators/ExploreNavigator';
//Icons
import IconNews from './assets/icons/news.svg';
import IconExplore from './assets/icons/explore.svg';
import IconProfile from './assets/icons/profile.svg';
//Style
import { COLOR } from './styles'
// Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
//
import { Provider } from 'react-redux';
import rootReducer from './store';


const Tab = createBottomTabNavigator();
// <Provider store = { createStore(rootReducer) }>

const RNRedux = () => (
  <Provider store = { createStore(rootReducer, applyMiddleware(thunk)) }>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Explore"
        backBehavior="none">
        <Tab.Screen
          name="News"
          options={{
            title: 'Новости',
            activeTintColor: COLOR.blue,
            tabBarIcon: (() => (<IconNews width={24} height={24}/>))}}
          component={NewsNavigator} />
        <Tab.Screen
          name="Explore"
          options={{
            title: 'Обзор',
            tabBarIcon: (() => (<IconExplore width={24} height={24}/>))}}
          component={ExploreScreen} />
        <Tab.Screen
          name="Profile"
          options={{
            title: 'Профиль',
            tabBarIcon: (() => (<IconProfile width={24} height={24}/>))}}
          component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);

// <Tab.Screen name="News" component={NewsScreen} />

// <NavigationContainer>
//   <Stack.Navigator initialRouteName="Places">
//     <Stack.Screen name="Places" component={App} />
//     <Stack.Screen name="Place"
//       component={Place}
//       options={({ route }) => ({ title: route.params.placeName })}
//     />
//   </Stack.Navigator>
// </NavigationContainer>
