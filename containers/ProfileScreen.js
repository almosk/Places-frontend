import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ProfilePosts from '../containers/ProfilePosts';
import ProfileCollections from '../containers/ProfileCollections';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';
import { addPost } from '../actions/post';
import { addCollection } from '../actions/collection';
import { addUser } from '../actions/user';
import { addCollectionPost } from '../actions/collectionPost';

class ProfileScreen extends Component {

componentDidMount(){
  this.getPostsFromBackend()
  this.getCollectionsFromBackend()
  this.getUsersFromBackend()
  this.getCollectionPostsFromBackend()
}
getPostsFromBackend = () => {
  return fetch('http://localhost:3000/posts.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        postsIsLoading: false,
        postsDataSource: responseJson,
      }, function(){
        // console.log('back', this.state.postsDataSource);
        this.state.postsDataSource.forEach(post => this.props.addPost(post.title, post.id, post.user_id))
        // this.state.dataSource.forEach(post => console.log(post.title, post.id))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}
getCollectionsFromBackend = () => {
  return fetch('http://localhost:3000/collections.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        collectionsIsLoading: false,
        collectionsDataSource: responseJson,
      }, function(){
        // console.log(this.state.collectionsDataSource[0].id);
        this.state.collectionsDataSource.forEach(collection => this.props.addCollection(collection.title, collection.id, collection.user_id))
      });

    })
    .catch((error) =>{
      console.error(error);
    });
}
getUsersFromBackend = () => {
  return fetch('http://localhost:3000/users.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        usersIsLoading: false,
        usersDataSource: responseJson,
      }, function(){
        this.state.usersDataSource.forEach(user => this.props.addUser(user.name, user.id))
        // this.state.dataSource.forEach(post => console.log(post.title, post.id))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}
getCollectionPostsFromBackend = () => {
  return fetch('http://localhost:3000/collection_posts.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        collectionPostsIsLoading: false,
        collectionPostsDataSource: responseJson,
      }, function(){
        this.state.collectionPostsDataSource.forEach(collectionPost => this.props.addCollectionPost(collectionPost.id, collectionPost.collection_id, collectionPost.post_id))
        // this.state.dataSource.forEach(post => console.log(post.title, post.id))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}

render() {
  return (
    <Container>
      <View style={ styles.container }>
        <View>
          <Tabs>
            <Tab heading={ <TabHeading><Text>Posts</Text></TabHeading>}>
              <ProfilePosts
                navigation={this.props.navigation}
                posts={this.props.posts}
              />
            </Tab>
            <Tab heading={ <TabHeading><Text>Collections</Text></TabHeading>}>
              <ProfileCollections
                navigation={this.props.navigation}
                collections={this.props.collections}
                collectionPosts={this.props.collectionPosts}
                users={this.props.users}
              />
            </Tab>
          </Tabs>
        </View>
      </View>
    </Container>
  )
}}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})
const mapStateToProps = state => {
  return {
    collections: Object.values(state.collections.byId),
    posts: Object.values(state.posts.byId),
    collectionPosts: Object.values(state.collectionPost.byId),
    users: state.users
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addCollection: (title, id, user_id) => {
      dispatch(addCollection(title, id, user_id))
    },
    addPost: (title, id, user_id) => {
      dispatch(addPost(title, id, user_id))
    },
    addUser: (title, id) => {
      dispatch(addUser(title, id))
    },
    addCollectionPost: (id, collecion_id, post_id) => {
      dispatch(addCollectionPost(id, collecion_id, post_id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
