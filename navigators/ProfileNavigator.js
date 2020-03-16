import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import ProfileScreen from '../components/ProfileScreen'
import PostScreen from '../containers/PostScreen'
import CollectionScreen from '../containers/CollectionScreen'
import NewPostScreen from '../containers/NewPostScreen'
import SavePostScreen from '../containers/SavePostScreen'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class ProfileNavigator extends Component {
render() {
  return (
      <ProfileStack.Navigator initialRouteName="Profile">
        <ProfileStack.Screen name="Profile" component={ProfileScreen}/>
        <ProfileStack.Screen name="Place" component={PostScreen}
          options={({ route }) => ({
            title: route.params.post.title,
            post: route.params.post
          })}
        />
        <ProfileStack.Screen name="Collection" component={CollectionScreen}
          options={({ route }) => ({ title: route.params.collectionName })}
        />
        <ProfileStack.Screen name="New Post" component={NewPostScreen} />
        <ProfileStack.Screen name="Save post" component={SavePostScreen} />
      </ProfileStack.Navigator>
    );
  }
}
const ProfileStack = createStackNavigator();

export default ProfileNavigator
