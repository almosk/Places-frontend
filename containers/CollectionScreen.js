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
  let PostIdsBelongsToCollection = Object.values(this.props.collectionPosts).filter(collectionPost => collectionPost.collectionId == this.props.route.params.collectionId)
  PostIdsBelongsToCollection.forEach(collectionPost => collectionPostIds.push(collectionPost.postId))
  let PostsBelongsToCollection = this.props.posts.filter(post => collectionPostIds.includes(post.id))

  return (
    <PostsFlatList
      data={PostsBelongsToCollection}
      navigation={this.props.navigation}
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
    collectionPosts: Object.values(state.collectionPosts.byId)
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
