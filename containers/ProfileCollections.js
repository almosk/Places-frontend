import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import CollectionSnippet from '../components/CollectionSnippet';

class ProfileCollections extends Component {
state = {
  postName: '',
  posts: []
}
collectionsOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.collections }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <CollectionSnippet
          collection={ info.item }
          navigation={this.props.navigation}
          users={this.props.users}
        />
      )}
    />
  )
}
render() {
  return (
    <View style={ styles.container }>
        <View style = { styles.listContainer }>
          { this.collectionsOutput() }
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    paddingTop: 8
  }
});

export default ProfileCollections
