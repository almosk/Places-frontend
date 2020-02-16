import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
// import PlaceSnippet from '../components/PlaceSnippet';
// import CollectionScreen from '../components/CollectionScreen';
import ProfileCollectionsScreen from '../containers/ProfileCollectionsScreen';
import CollectionScreen from '../containers/CollectionScreen';
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class ProfilePlacesNavigator extends Component {
render() {
  return (
      <ProfileCollectionsStack.Navigator initialRouteName="Collections">
        <ProfileCollectionsStack.Screen name="Collections" component={ProfileCollectionsScreen} />
        <ProfileCollectionsStack.Screen
          name="Collection"
          component={CollectionScreen}
          options={({ route }) => ({ title: route.params.collectionName })}
        />
      </ProfileCollectionsStack.Navigator>
    );
  }
}
const ProfileCollectionsStack = createStackNavigator();

export default ProfilePlacesNavigator
