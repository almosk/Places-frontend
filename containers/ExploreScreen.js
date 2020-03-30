import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ExplorePosts from '../containers/ExplorePosts';
import ExploreCollections from '../containers/ExploreCollections';
import ExploreUsers from '../containers/ExploreUsers';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';
import { addPost } from '../actions/post';
import { addCollection } from '../actions/collection';
import { addUser } from '../actions/user';
import { addCollectionPost } from '../actions/collectionPost';

class ExploreScreen extends Component {

render() {
  return (
    <Container>
      <View style={ styles.container }>
        <View>
          <Tabs>
            <Tab heading={ <TabHeading><Text>Posts</Text></TabHeading>}>
              <ExplorePosts
                navigation={this.props.navigation}
                posts={this.props.posts}
              />
            </Tab>
            <Tab heading={ <TabHeading><Text>Collections</Text></TabHeading>}>
              <ExploreCollections
                navigation={this.props.navigation}
                collections={this.props.collections}
                collectionPosts={this.props.collectionPosts}
                users={this.props.users}
              />
            </Tab>
            <Tab heading={ <TabHeading><Text>Users</Text></TabHeading>}>
              <ExploreUsers
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

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen)
