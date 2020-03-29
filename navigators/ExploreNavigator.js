import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import ExploreScreen from '../containers/ExploreScreen'
import PostScreen from '../containers/PostScreen'
import CollectionScreen from '../containers/CollectionScreen'
import NewCollectionScreen from '../containers/NewCollectionScreen'
import NewPostScreen from '../containers/NewPostScreen'
import EditPostScreen from '../containers/EditPostScreen'
import SavePostScreen from '../containers/SavePostScreen'
import ProfileInfoScreen from '../containers/ProfileInfoScreen'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class ExploreNavigator extends Component {
render() {
  return (
      <ExploreStack.Navigator initialRouteName="Profile">
        <ExploreStack.Screen name="Explore" component={ExploreScreen}/>
        <ExploreStack.Screen name="Place" component={PostScreen}
          options={({ route }) => ({
            title: route.params.post.title,
            post: route.params.post
          })}
        />
        <ExploreStack.Screen name="Collection" component={CollectionScreen}
          options={({ route }) => ({ title: route.params.collectionName })}
        />
        <ExploreStack.Screen name="New Collection" component={NewCollectionScreen} />
        <ExploreStack.Screen name="New Post" component={NewPostScreen} />
        <ExploreStack.Screen name="Edit Post" component={EditPostScreen} />
        <ExploreStack.Screen name="Save post" component={SavePostScreen} />
      </ExploreStack.Navigator>
    );
  }
}
const ExploreStack = createStackNavigator();

export default ExploreNavigator
