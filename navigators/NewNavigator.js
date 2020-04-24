import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import MapBlock from '../components/MapBlock'
import ExploreScreen from '../containers/ExploreScreen'
import PostScreen from '../containers/PostScreen'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';

class NewNavigator extends Component {
render() {
  return (
      <View style={styles.container}>
        <NewStack.Navigator initialRouteName="Explore">
          <NewStack.Screen name="MapBlock" component={MapBlock}/>
          <NewStack.Screen name="Explore" component={ExploreScreen}/>
          <NewStack.Screen name="Place" component={PostScreen}
            options={({ route }) => ({
              title: route.params.post_title,
              post_id: route.params.post_id
            })}
          />
        </NewStack.Navigator>
      </View>
    );
  }
}
const NewStack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    backgroundColor: 'red'
  }
})

export default NewNavigator

// headerTitle: props => <Map/>
