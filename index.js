import 'react-native-gesture-handler';
import { AppRegistry, View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './containers/App';
import Place from './components/Place'
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './store';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const store = configureStore()
const Stack = createStackNavigator();

const RNRedux = () => (
  <Provider store = { store }>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Places">
        <Stack.Screen name="Places" component={App} />
        <Stack.Screen name="Place" component={Place}/>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
