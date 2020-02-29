import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CollectionsFlatList from '../components/CollectionsFlatList';
// Redux
import { connect } from 'react-redux';

// const PostScreen = ({ route, navigation }) => {
class PostScreen extends Component {
  state = {}

  collectionsOutput = () => {
    let collectionPostIds = []
    let CollectionIdsBelongsToPost = Object.values(this.props.collectionPosts).filter(collectionPost => collectionPost.postId == this.props.route.params.post.id)
    CollectionIdsBelongsToPost.forEach(collectionPost => collectionPostIds.push(collectionPost.collectionId))
    let CollectionsBelongsToPost = this.props.collections.filter(collection => collectionPostIds.includes(collection.id))

    return (
      <CollectionsFlatList
        data={CollectionsBelongsToPost}
        navigation={this.props.navigation}
      />
    )
  }

  render() {
    return (
      <View style>
        <View style = { styles.post }>
          <Text style = { styles.postButton }>
            { this.props.route.params.postName }
          </Text>
        </View>
        <View style = { styles.collections }>
          <Text>In collections:</Text>
          { this.collectionsOutput()}
        </View>
      </View>
    )}
}

const styles = StyleSheet.create({
  post: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  collections: {
    marginTop: 30,
  },
  postButton: {
    width: '30%'
  }
})

const mapStateToProps = state => {
  return {
    collections: Object.values(state.collections.collections.byId),
    collectionPosts: Object.values(state.collectionPosts.collectionPosts.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)

// export default PostScreen;
