import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import PostSnippet from '../components/PostSnippet';
import PostsFlatList from '../components/PostsFlatList';
// Redux
import { connect } from 'react-redux';

class CollectionScreen extends Component {

state = {
}

postsOutput = () => {
  let collectionPostIds = []
  let PostIdsBelongsToCollection = Object.values(this.props.collectionPosts).filter(collectionPost => collectionPost.collection_id == this.props.route.params.collectionId)
  PostIdsBelongsToCollection.forEach(collectionPost => collectionPostIds.push(collectionPost.post_id))
  let PostsBelongsToCollection = this.props.posts.filter(post => collectionPostIds.includes(post.id))

  return (
    <PostsFlatList
      data={PostsBelongsToCollection}
      navigation={this.props.navigation}
      users={this.props.users}
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
  }
});

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.byId),
    collectionPosts: Object.values(state.collectionPost.byId),
    users: state.users
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
