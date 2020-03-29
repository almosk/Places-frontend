import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import ProfileScreen from '../containers/ProfileScreen'
import PostScreen from '../containers/PostScreen'
import CollectionScreen from '../containers/CollectionScreen'
import NewCollectionScreen from '../containers/NewCollectionScreen'
import NewPostScreen from '../containers/NewPostScreen'
import EditPostScreen from '../containers/EditPostScreen'
import SavePostScreen from '../containers/SavePostScreen'
import ProfileInfoScreen from '../containers/ProfileInfoScreen'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class ProfileNavigator extends Component {
render() {
  return (
      <ProfileStack.Navigator initialRouteName="Profile">
        <ProfileStack.Screen name="Profile" component={ProfileScreen}
          options={{
            headerRight: () => (
              <Button
                small
                rounded
                onPress={() => {
                  this.props.navigation.navigate('Profile Info')
                }}
              >
                <Text>Info</Text>
              </Button>
            )
          }}
        />
        <ProfileStack.Screen name="Place" component={PostScreen}
          options={({ route }) => ({
            title: route.params.post.title,
            post: route.params.post
          })}
        />
        <ProfileStack.Screen name="Collection" component={CollectionScreen}
          options={({ route }) => ({ title: route.params.collectionName })}
        />
        <ProfileStack.Screen name="New Collection" component={NewCollectionScreen} />
        <ProfileStack.Screen name="New Post" component={NewPostScreen} />
        <ProfileStack.Screen name="Edit Post" component={EditPostScreen} />
        <ProfileStack.Screen name="Save post" component={SavePostScreen} />
        <ProfileStack.Screen name="Profile Info" component={ProfileInfoScreen} />
      </ProfileStack.Navigator>
    );
  }
}
const ProfileStack = createStackNavigator();

export default ProfileNavigator
