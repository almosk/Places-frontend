import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import PostSnippet from '../components/PostSnippet';
// Redux
import { connect } from 'react-redux';

class CollectionScreen extends Component {

// Props:
// this.props.route.params.collection_id
// this.props.navigation

postsOutput = () => {
  let collectionPostIds = []
  let PostIdsBelongsToCollection = Object.values(this.props.collectionPosts).filter(collectionPost => collectionPost.collection_id == this.props.route.params.collection_id)
  PostIdsBelongsToCollection.forEach(collectionPost => collectionPostIds.push(collectionPost.post_id))
  let PostsBelongsToCollection = this.props.posts.filter(post => collectionPostIds.includes(post.id))

  return (
    <FlatList style = { styles.listContainer }
      data={PostsBelongsToCollection}
      renderItem={({ item }) =>
        <PostSnippet
          post_id={item.id}
          navigation={this.props.navigation}
        />}
      keyExtractor={item => item.id}
    />
  )
}

render() {
  return (
    <View style = { styles.listContainer }>
      { this.postsOutput() }
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
    posts: Object.values(state.posts.byId),
    // collectionPosts: Object.values(state.collectionPost.byId),
    // users: state.users
    collection: state.collections.byId[ownProps.route.params.collection_id],
    // collectionUser: state.users.byId[state.collections.byId[ownProps.route.params.collection_id].user_id],
    // collections: Object.values(state.collections.byId),
    collectionPosts: Object.values(state.collectionPost.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
  //   add: (title) => {
  //     dispatch(addPost(title))
  //   },
  //   delete: (id) => {
  //     dispatch(deletePost(id))
  //   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionScreen)
