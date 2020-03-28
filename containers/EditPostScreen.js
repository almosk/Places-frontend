import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { Container, Text, Tab, Tabs, TabHeading, Button } from 'native-base';
import CollectionsFlatList from '../components/CollectionsFlatList';
// Redux
import { connect } from 'react-redux';
import { updatePost, deletePost } from '../actions/post';
import { addCollectionPost } from '../actions/collectionPost';


class EditPostScreen extends Component {

state = {
  inputText: this.props.route.params.post.title,
  collectionId: 'Empty'
}

componentDidMount = () => {
  let collectionPostIds = []
  let CollectionIdsBelongsToPost = Object.values(this.props.collectionPosts).filter(collectionPost => collectionPost.postId == this.props.route.params.post.id)
  CollectionIdsBelongsToPost.forEach(collectionPost => collectionPostIds.push(collectionPost.collectionId))
  let CollectionsBelongsToPost = this.props.collections.filter(collection => collectionPostIds.includes(collection.id))
  console.log(CollectionsBelongsToPost);
  if (CollectionsBelongsToPost !== 'undefined' && CollectionsBelongsToPost.length > 0) {
    this.setState({
      collectionId: CollectionsBelongsToPost[0].id
    })
  }
}

inputTextChangeHandler = (value) => {
  this.setState({
    inputText: value
  });
}

setCollection = (collectionId) => {
  this.setState({
    collectionId: collectionId
  })
  // this.sendPostToBackend(this.state.inputText)
}

sendPostToBackend = (title) => {
  if(this.state.inputText.trim() === '') {
    return;
  }

  let id = this.props.route.params.post.id
  fetch('http://localhost:3000/posts/' + id, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      id: id,
      place_id: 3,
      user_id: 2
    }),
  })
  .then((response) => response.json())
  .then((responseJson) => {
    this.props.updatePost(this.state.inputText, id)
    this.props.addCollectionPost(this.state.collectionId, id)
    this.props.navigation.navigate('Profile')
    this.setState({
      inputText: '',
    })
  })
  .catch((error) =>{
    console.error(error);
  })
}

render() {
  return (
    <View>
      <View style={ styles.container }>
        <View style = { styles.inputContainer }>
          <TextInput
            placeholder = "Post title..."
            style = { styles.postInput }
            value = { this.state.inputText }
            onChangeText = { this.inputTextChangeHandler }
          ></TextInput>
          <Button rounded small
            onPress={() => {this.sendPostToBackend(this.state.inputText)}}
          >
            <Text style={ styles.smallButtonText }>Save</Text>
          </Button>
        </View>
      </View>
      <View style={ styles.container }>
        <Text style={ styles.smallHeading }>Save to</Text>
        <CollectionsFlatList
          data = { this.props.collections }
          setCollection = { this.setCollection }
          selectedCollectionId = { this.state.collectionId }
        />
      </View>
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginBottom: 16
  },
  inputContainer: {
    height: 56,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  postInput: {
    width: '70%'
  },
  postButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  },
  smallHeading: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
  smallButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFFFFF"
  }
});

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.byId),
    collections: Object.values(state.collections.byId),
    collectionPosts: state.collectionPost.byId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePost: (title, id) => {
      dispatch(updatePost(title, id))
    },
    addCollectionPost: (collectionId, postId) => {
      dispatch(addCollectionPost(collectionId, postId))
    }
  }
}

// <Button title = 'Create'
//   style = { styles.postButton }
//   onPress = { this.postSubmitHandler }
// />

export default connect(mapStateToProps, mapDispatchToProps)(EditPostScreen)
