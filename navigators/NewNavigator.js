import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import MapBlock from '../components/MapBlock'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class NewNavigator extends Component {
render() {
  return (
      <NewStack.Navigator initialRouteName="MapBlock">
        <NewStack.Screen name="MapBlock" component={MapBlock}/>
      </NewStack.Navigator>
    );
  }
}
const NewStack = createStackNavigator();

export default NewNavigator

// headerTitle: props => <Map/>
