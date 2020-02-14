import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import PlaceSnippet from '../components/PlaceSnippet';
import PlaceScreen from '../components/PlaceScreen';
import ProfilePlacesScreen from '../containers/ProfilePlacesScreen';
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class ProfilePlacesNavigator extends Component {
render() {
  return (
      <ProfilePlacesStack.Navigator initialRouteName="Places">
        <ProfilePlacesStack.Screen name="Places" component={ProfilePlacesScreen} />
        <ProfilePlacesStack.Screen name="Place"
          component={PlaceScreen}
          options={({ route }) => ({ title: route.params.placeName })}
        />
      </ProfilePlacesStack.Navigator>
    );
  }
}
const ProfilePlacesStack = createStackNavigator();

export default ProfilePlacesNavigator
