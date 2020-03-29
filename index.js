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
import ProfileNavigator from './navigators/ProfileNavigator';
import NewsScreen from './containers/NewsScreen';
import ExploreScreen from './containers/ExploreScreen';
// Redux
import { Provider } from 'react-redux';
import configureStore from './store';


const store = configureStore()
const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

const RNRedux = () => (
  <Provider store = { store }>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Profile" component={ProfileNavigator} />
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
