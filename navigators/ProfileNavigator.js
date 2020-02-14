import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import ProfilePostsNavigator from '../navigators/ProfilePostsNavigator';
import ProfileCollectionsNavigator from '../navigators/ProfileCollectionsNavigator';
// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class ProfileNavigator extends Component {
render() {
  return (
      <ProfileTab.Navigator>
        <ProfileTab.Screen name="Places" component={ProfilePostsNavigator} />
        <ProfileTab.Screen name="Collections" component={ProfileCollectionsNavigator} />
      </ProfileTab.Navigator>
    );
  }
}
const ProfileTab = createBottomTabNavigator();

export default ProfileNavigator
