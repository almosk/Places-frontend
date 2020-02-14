import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import PostScreen from '../components/PostScreen';
import ProfilePostsScreen from '../containers/ProfilePostsScreen';
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class ProfilePostsNavigator extends Component {
render() {
  return (
      <ProfilePostsStack.Navigator initialRouteName="Places">
        <ProfilePostsStack.Screen name="Places" component={ProfilePostsScreen} />
        <ProfilePostsStack.Screen name="Place"
          component={PostScreen}
          options={({ route }) => ({ title: route.params.placeName })}
        />
      </ProfilePostsStack.Navigator>
    );
  }
}
const ProfilePostsStack = createStackNavigator();

export default ProfilePostsNavigator
