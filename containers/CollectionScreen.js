import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import PostSnippet from '../components/PostSnippet';
// Redux
import { connect } from 'react-redux';
import { deleteCollection, updateCollection } from '../actions/collection';


class CollectionScreen extends Component {

// Props:
// this.props.route.params.collection_id
// this.props.navigation

componentDidMount(){
  this.getCollectionShow()
}
getCollectionShow = () => {
  return fetch(this.props.collection.url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        collectionIsLoading: false,
        collectionDataSource: responseJson,
      }, function(){
        let collection = this.state.collectionDataSource
        console.log(collection);
        this.props.updateCollection(collection.title, collection.id, collection.user_id, collection.user_title, collection.url, collection.posts)
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}

postsOutput = (data) => {
  // let collectionPostIds = []
  // let PostIdsBelongsToCollection = Object.values(this.props.collectionPosts).filter(collectionPost => collectionPost.collection_id == this.props.route.params.collection_id)
  // PostIdsBelongsToCollection.forEach(collectionPost => collectionPostIds.push(collectionPost.post_id))
  // let PostsBelongsToCollection = this.props.posts.filter(post => collectionPostIds.includes(post.id))
  return (
    <FlatList style = { styles.listContainer }
      data={data}
      renderItem={({ item }) =>
        <PostSnippet
          post={item}
          navigation={this.props.navigation}
        />}
      keyExtractor={item => item.id}
    />
  )
}

render() {
  return (
    <View style = { styles.listContainer }>
      { this.postsOutput(this.props.collection.posts) }
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listContainer: {
    marginTop: 16,
    width: '100%'
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    // posts: Object.values(state.posts.byId),
    // collectionPosts: Object.values(state.collectionPost.byId),
    // users: state.users
    collection: state.collections.byId[ownProps.route.params.id],
    // collectionUser: state.users.byId[state.collections.byId[ownProps.route.params.collection_id].user_id],
    // collections: Object.values(state.collections.byId),
    // collectionPosts: Object.values(state.collectionPost.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCollection: (id) => {
      dispatch(deleteCollection(id))
    },
    updateCollection: (title, id, user_id, user_title, url, posts) => {
      dispatch(updateCollection(title, id, user_id, user_title, url, posts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionScreen)
