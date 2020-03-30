import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CollectionsFlatList from '../components/CollectionsFlatList';
import PostsFlatList from '../components/PostsFlatList';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';

class UserScreen extends Component {
  state = {}

// collectionsOutput = () => {
//   let collectionPostIds = []
//   let CollectionIdsBelongsToPost = Object.values(this.props.collectionPosts).filter(collectionPost => collectionPost.post_id == this.props.route.params.post.id)
//   CollectionIdsBelongsToPost.forEach(collectionPost => collectionPostIds.push(collectionPost.collection_id))
//   let CollectionsBelongsToPost = this.props.collections.filter(collection => collectionPostIds.includes(collection.id))
//   // console.log(this.props.collectionPosts);
//   return (
//     <CollectionsFlatList
//       data={CollectionsBelongsToPost}
//       navigation={this.props.navigation}
//     />
//   )
// }


userPosts = () => {
  // Get Object of all collections of User
  userCollectionsObject = this.props.collections.filter(collection => collection.user_id == this.props.route.params.user.id)
  // Get Array of Ids of these collections
  userCollectionsIds = userCollectionsObject.map(collection => collection.id)
  // Get Object of CollectionPosts with these Ids
  userCollectionPosts = this.props.collectionPosts.filter(collectionPost => userCollectionsIds.includes(collectionPost.collection_id))
  // Get Array of PostIds of CollectionPosts (Ids of posts of collections of logged User)
  userCollectionPostsPostIds = userCollectionPosts.map(collectionPost => collectionPost.post_id)
  // Get Object of Posts these Ids are in array
  userPostsObject = this.props.posts.filter(post => userCollectionPostsPostIds.includes(post.id))

  // userPostsObject = {}
  // const filtered = Object.keys(this.props.posts.byId)
  // .map(key => parseInt(key))
  // .filter(key => userCollectionPostsPostIds.includes(key))
  // .reduce((obj, key) => {
  //   obj[key] = this.props.posts.byId[key];
  //   return obj;
  // }, {});
  // userPostsObject.byId = filtered


  return (
    <View>
      <PostsFlatList
        data={userPostsObject}
        navigation={this.props.navigation}
        users={this.props.users}
      />
    </View>
  )
}

userCollections = () => {
  let userCollectionsObject = this.props.collections.filter(collection => collection.user_id == this.props.route.params.user.id)
  return (
    <View>
      <CollectionsFlatList
        data={userCollectionsObject}
        navigation={this.props.navigation}
      />
    </View>
  )
}


render() {
  return (
    <Container>
      <View style = { styles.post }>
        <Text style = { styles.postTitle }>
          { this.props.route.params.user.title }
        </Text>
      </View>

      <View style={ styles.container }>
        <View>
          <Tabs>
            <Tab heading={ <TabHeading><Text>Posts</Text></TabHeading>}>
              { this.userPosts() }
            </Tab>
            <Tab heading={ <TabHeading><Text>Collections</Text></TabHeading>}>
              { this.userCollections() }
            </Tab>
          </Tabs>
        </View>
      </View>
    </Container>
)}
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  post: {
    width: '100%',
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  smallHeading: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#595959"
  },
  button: {
    width: '100%',
    padding: 10,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff"
  },
  smallButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  }
})

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.byId),
    collections: Object.values(state.collections.byId),
    collectionPosts: Object.values(state.collectionPost.byId),
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)

// export default PostScreen;
