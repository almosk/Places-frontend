import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import CollectionSnippet from '../components/CollectionSnippet';
// Redux
import { connect } from 'react-redux';
import { addCollection } from '../actions/collection';

class ProfileCollections extends Component {
state = {
  postName: '',
  posts: []
}

componentDidMount(){
  this.getCollectionsIndex()
}
getCollectionsIndex = () => {
  return fetch('http://localhost:3000/v1/collections.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        collectionsIsLoading: false,
        collectionsDataSource: responseJson,
      }, function(){
        this.state.collectionsDataSource.forEach(collection => this.props.addCollection(collection.title, collection.id, collection.user_id, collection.user_title, collection.url))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}



collectionsOutput = () => {
  // profileCollections = this.props.collections.filter(collection => collection.user_id == this.props.users.loggedUser)
  profileCollections = this.props.collections
  return (
    <FlatList style = { styles.listContainer }
      data = { profileCollections }
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
        <View style={ styles.buttonContainer }>
          <Button
            light
            block
            rounded
            onPress={() => {
              this.props.navigation.navigate('New Collection')
            }}
          >
          <Text>New Collection</Text>
          </Button>
        </View>
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

const mapStateToProps = state => {
  return {
    collections: Object.values(state.collections.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCollection: (title, id, user_id, user_title, url) => {
      dispatch(addCollection(title, id, user_id, user_title, url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCollections)


// export default ProfileCollections
