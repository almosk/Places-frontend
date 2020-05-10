import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import CollectionSnippetSmall from '../components/CollectionSnippetSmall';
import PostSnippet from '../components/PostSnippet';
// Style
import { typo, color } from '../styles'
// Redux
import { connect } from 'react-redux';
import { addProfileCollection } from '../actions/profileCollection';


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
        this.state.collectionsDataSource.forEach(collection => this.props.addProfileCollection(collection))
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
    <FlatList
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
      <PostSnippet
        post={this.props.route.params.post}
        />
      <View style = { styles.listContainer }>
        <Text style={[styles.smallHeading, typo.t16, color.black50]}>Выберите подборку</Text>
        { this.collectionsOutput() }
      </View>
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  smallHeading: {
    marginBottom: 16
  },
  listContainer: {
    width: '100%',
    padding: 16
  },
})

const mapStateToProps = state => {
  return {
    collections: Object.values(state.profileCollections.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProfileCollection: (collection) => {
      dispatch(addProfileCollection(collection))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavePostScreen)
