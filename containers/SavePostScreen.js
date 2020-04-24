import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import CollectionSnippetSmall from '../components/CollectionSnippetSmall';
// Redux
import { connect } from 'react-redux';
import { addCollection } from '../actions/collection';


class SavePostScreen extends Component {


componentDidMount(){
  this.getCollectionsIndex()
}
getCollectionsIndex = () => {
  return fetch('http://localhost:3000/v1/collections/profile_collections.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        collectionsIsLoading: false,
        collectionsDataSource: responseJson,
      }, function(){
        this.state.collectionsDataSource.forEach(collection => this.props.addCollection(collection))
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
        <CollectionSnippetSmall
          collection={ info.item }
          navigation={this.props.navigation}
        />
      )}
    />
  )
}

render() {
  // profileCollections = this.props.collections.filter(collection => collection.user_id == this.props.users.loggedUser)

  return (
    <View style={ styles.container }>
      <Text style={ styles.smallHeading }>Select collection:</Text>
        <View style = { styles.listContainer }>
          { this.collectionsOutput() }
        </View>
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  smallHeading: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
  listContainer: {
    width: '100%',
    paddingTop: 8
  },
})

const mapStateToProps = state => {
  return {
    collections: Object.values(state.collections.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCollection: (collection) => {
      dispatch(addCollection(collection))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavePostScreen)
