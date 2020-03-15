import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CollectionsFlatList from '../components/CollectionsFlatList';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';

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
    <View>
      <View style = { styles.post }>
        <Text style = { styles.postTitle }>
          { this.props.route.params.postName }
        </Text>
      </View>
      <View style = { styles.container }>
        <Text style = { styles.smallHeading }>In collections:</Text>
        { this.collectionsOutput()}
      </View>
      <View style = { styles.button }>
        <Button
          rounded
          onPress={() => {
            this.props.navigation.navigate('Save post', {
              post: this.props.route.params.post
            })
          }}
        >
          <Text>Save post to collection</Text>
        </Button>
      </View>
    </View>
  )}
}

const styles = StyleSheet.create({
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
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'white'
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
  }
})

const mapStateToProps = state => {
  return {
    collections: Object.values(state.collections.byId),
    collectionPosts: Object.values(state.collectionPost.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)

// export default PostScreen;
