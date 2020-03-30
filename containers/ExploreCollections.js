import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import CollectionSnippet from '../components/CollectionSnippet';

class ExploreCollections extends Component {
state = {
  postName: '',
  posts: []
}
collectionsOutput = () => {
  exploreCollections = this.props.collections.filter(collection => collection.user_id !== this.props.users.loggedUser)
  return (
    <FlatList style = { styles.listContainer }
      data = { exploreCollections }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <CollectionSnippet
          collection_id={ info.item.id }
          navigation={this.props.navigation}
        />
      )}
    />
  )
}
render() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style = { styles.listContainer }>
        { this.collectionsOutput() }
        </View>
      </ScrollView>
    </SafeAreaView>
  );}
}
const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    paddingTop: 8
  },
  container: {
    width: '100%',
    paddingTop: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 16
  },
  scrollView: {
    width: '100%',
  },
});

export default ExploreCollections
