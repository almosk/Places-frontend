import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import CollectionSnippet from '../components/CollectionSnippet';
// Redux
import { connect } from 'react-redux';
import { addCollection} from '../actions/collection';


class ProfileCollections extends Component {

state = {
  postName: '',
  posts: []
}

componentDidMount(){
  this.getCollectionsFromBackend()
}

getCollectionsFromBackend = () => {
  return fetch('http://localhost:3000/collections.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){
        this.state.dataSource.forEach(collection => this.props.addCollection(collection.title, 0))
      });

    })
    .catch((error) =>{
      console.error(error);
    });
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

const mapStateToProps = state => {
  return {
    collections: Object.values(state.collections.byId),
    posts: Object.values(state.posts.byId),
    collectionPosts: Object.values(state.collectionPost.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCollection: (title) => {
      dispatch(addCollection(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCollections)
