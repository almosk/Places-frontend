import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import ExploreScreen from '../containers/ExploreScreen'
import PostScreen from '../containers/PostScreen'
import CollectionScreen from '../containers/CollectionScreen'
import UserScreen from '../containers/UserScreen'
import NewsScreen from '../containers/NewsScreen'
import NewCollectionScreen from '../containers/NewCollectionScreen'
import NewPostScreen from '../containers/NewPostScreen'
import EditPostScreen from '../containers/EditPostScreen'
import SavePostScreen from '../containers/SavePostScreen'
import ProfileInfoScreen from '../containers/ProfileInfoScreen'
import ExploreBottomSheet from '../containers/ExploreBottomSheet'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class NewsNavigator extends Component {
render() {
  return (
    <View style={styles.container}>

      <NewsStack.Navigator
        initialRouteName="News"
        headerMode='none'
      >
        <NewsStack.Screen name="News" component={NewsScreen}/>
        <NewsStack.Screen name="Place" component={PostScreen}
          options={({ route }) => ({
            title: route.params.post_title,
            post_id: route.params.post_id
          })}
        />
        <NewsStack.Screen name="Collection" component={CollectionScreen}
          options={({ route }) => ({ title: route.params.collectionName })}
        />
        <NewsStack.Screen name="User" component={UserScreen}
          options={({ route }) => ({ title: route.params.collectionName })}
        />
      </NewsStack.Navigator>
    </View>
    );
  }
}
const NewsStack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red'
  }
})

export default NewsNavigator
