import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import PostSnippet from '../components/PostSnippet';
import PostsFlatList from '../components/PostsFlatList';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class ExplorePosts extends Component {

state = {
  inputText: '',
  posts: []
}

static navigationOptions = { header: null };

deletePost = (id) => {
  this.props.deletePost(id)
  fetch('http://localhost:3000/posts/' + id, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .catch((error) =>{
    console.error(error);
  })
}

render() {
  // Get Object of all collections of logged User
  exploreCollections = this.props.collections.filter(collection => collection.user_id == this.props.users.loggedUser)
  // Get Array of Ids of these collections
  exploreCollectionsIds = exploreCollections.map(collection => collection.id)
  // Get Object of CollectionPosts with these Ids
  exploreCollectionPosts = this.props.collectionPosts.filter(collectionPost => exploreCollectionsIds.includes(collectionPost.collection_id))
  // Get Array of PostIds of CollectionPosts (Ids of posts of collections of logged User)
  exploreCollectionPostsPostIds = exploreCollectionPosts.map(collectionPost => collectionPost.post_id)
  // Get Object of Posts these Ids are in array
  explorePosts = this.props.posts.filter(post => !exploreCollectionPostsPostIds.includes(post.id))
  explorePosts.filter(post => post.user_id !== this.props.users.loggedUser)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style = { styles.listContainer }>
          <PostsFlatList
            data={explorePosts}
            navigation={this.props.navigation}
            deletePost={ this.deletePost }
            users={this.props.users}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  postInput: {
    width: '70%'
  },
  postButton: {
    width: '30%'
  },
  newPostButton:{
    marginTop: '130px'
  },
  listContainer: {
    marginTop: 16,
    width: '100%'
  },
  buttonContainer: {
    width: '100%',
    padding: 16
  }
});

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.byId),
    users: state.users,
    collectionPosts: Object.values(state.collectionPost.byId),
    collections: Object.values(state.collections.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (title, id) => {
      dispatch(addPost(title, id))
    },
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePosts)
