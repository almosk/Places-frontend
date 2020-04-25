import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import ProfileBottomSheet from '../containers/ProfileBottomSheet'
import ProfilePostScreen from '../containers/ProfilePostScreen'
import ProfileCollectionScreen from '../containers/ProfileCollectionScreen'
import NewCollectionScreen from '../containers/NewCollectionScreen'
import NewPostScreen from '../containers/NewPostScreen'
import EditPostScreen from '../containers/EditPostScreen'
import SavePostScreen from '../containers/SavePostScreen'
import ProfileInfoScreen from '../containers/ProfileInfoScreen'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class ProfileNavigator extends Component {

// onNavigationStateChange={() => props.getStackRoute()}
render() {
  return (
    <View style={styles.container}>
      <ProfileStack.Navigator
        initialRouteName="Profile"
        // mode='modal'
        headerMode='none'
      >
        <ProfileStack.Screen name="Profile" component={ProfileBottomSheet}
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
            ),
          }}
        />
        <ProfileStack.Screen name="Place" component={ProfilePostScreen}
          options={({ route }) => ({
            title: route.params.post_title,
            headerMode: 'none'
          })}
        />
      <ProfileStack.Screen name="Collection" component={ProfileCollectionScreen}
          options={({ route }) => ({
            title: route.params.collection_title
          })}
        />
        <ProfileStack.Screen name="New Collection" component={NewCollectionScreen} />
        <ProfileStack.Screen name="New Post" component={NewPostScreen} />
        <ProfileStack.Screen name="Edit Post" component={EditPostScreen} />
        <ProfileStack.Screen name="Save post" component={SavePostScreen} />
        <ProfileStack.Screen name="Profile Info" component={ProfileInfoScreen} />
      </ProfileStack.Navigator>
    </View>
    );
  }
}
const ProfileStack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red'
  }
})

export default ProfileNavigator

// headerTitle: props => <Map/>
