import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CollectionsFlatList from '../components/CollectionsFlatList';
import PostSnippet from '../components/PostSnippet';
import PButton from '../components/PButton';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import { typo, color } from '../styles'

// Redux
import { connect } from 'react-redux';

class UserScreen extends Component {
  state = {}

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
      <FlatList style = { styles.listContainer }
        data={userPostsObject}
        renderItem={({ item }) =>
          <PostSnippet
            post_id={item.id}
            navigation={this.props.navigation}
          />}
        keyExtractor={item => item.id}
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
      <View style = { styles.title }>
        <View style = { styles.horizontalContainer }>
          <Text style = { [typo.t32, color.black80] }>{ this.props.route.params.user.title }</Text>
          <View style = { styles.image }></View>
        </View>
        <PButton
          text= {'Подписаться'}
          />
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
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    width: '100%',
    padding: 16,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
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
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#F3F3F3',
    marginRight: 12
  },
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
