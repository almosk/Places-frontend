import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import PostSnippet from '../components/PostSnippet';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class ProfilePosts extends Component {

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

postsOutput = (data) => {
  return (
    <FlatList style = { styles.listContainer }
      data={data}
      renderItem={({ item }) =>
        <PostSnippet
          post_id={item.id}
          navigation={this.props.navigation}
        />}
      keyExtractor={item => item.id}
    />
  );
}

render() {
  // Get Object of all collections of logged User
  profileCollections = this.props.collections.filter(collection => collection.user_id == this.props.users.loggedUser)
  // Get Array of Ids of these collections
  profileCollectionsIds = profileCollections.map(collection => collection.id)
  // Get Object of CollectionPosts with these Ids
  profileCollectionPosts = this.props.collectionPosts.filter(collectionPost => profileCollectionsIds.includes(collectionPost.collection_id))
  // Get Array of PostIds of CollectionPosts (Ids of posts of collections of logged User)
  profileCollectionPostsPostIds = profileCollectionPosts.map(collectionPost => collectionPost.post_id)
  // Get Object of Posts these Ids are in array
  profilePosts = this.props.posts.filter(post => profileCollectionPostsPostIds.includes(post.id))

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={ styles.buttonContainer }>
          <Button
            light
            block
            rounded
            onPress={() => {
              this.props.navigation.navigate('New Post')
            }}
          >
            <Text>New Post</Text>
          </Button>
        </View>
        { this.postsOutput(profilePosts) }
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)
