import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ProfilePosts from '../containers/ProfilePosts';
import ProfileCollections from '../containers/ProfileCollections';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';
import { addPost } from '../actions/post';
import { addCollection } from '../actions/collection';

class ProfileScreen extends Component {

componentDidMount(){
  this.getPostsFromBackend()
  this.getCollectionsFromBackend()
}
getPostsFromBackend = () => {
  return fetch('http://localhost:3000/posts.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){
        this.state.dataSource.forEach(post => this.props.addPost(post.title, post.id))
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
    collectionPosts: Object.values(state.collectionPost.byId)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addCollection: (title) => {
      dispatch(addCollection(title))
    },
    addPost: (title, id) => {
      dispatch(addPost(title, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)