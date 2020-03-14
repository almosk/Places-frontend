import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import CollectionsFlatList from '../components/CollectionsFlatList';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';
import { addCollectionPost } from '../actions/collectionPost';


class NewPostScreen extends Component {

state = {
  inputText: '',
  collectionId: ''
}

postSubmitHandler = () => {
  if(this.state.inputText.trim() === '') {
    return;
  }
  this.props.add(this.state.inputText, this.state.collectionId)
  this.sendPostToBackend(this.state.inputText)

  this.props.addCollectionPost(this.state.collectionId, 1)
  console.log(this.state.collectionId, this.props.collectionPosts);
  this.setState({
    inputText: ''
  })
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
  this.postSubmitHandler()
}

sendPostToBackend = (title) => {
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      place_id: 3,
      user_id: 2
    }),
  })
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      responsePostId: responseJson.post.id,
    }, function(){
      // console.log(responseJson)
      // console.log(this.state.responsePostId);
    });
  })
  .catch((error) =>{
    console.error(error);
  })
}

render() {
  return (
    <View style={ styles.container }>
      <Text>Post name:</Text>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Create place"
          style = { styles.postInput }
          value = { this.state.inputText }
          onChangeText = { this.inputTextChangeHandler }
        ></TextInput>
        <Button title = 'Create'
          style = { styles.postButton }
          onPress = { this.postSubmitHandler }
        />
      </View>
      <Text>Select collection:</Text>
      <CollectionsFlatList
        data = { this.props.collections }
        setCollection = { this.setCollection }
      />
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
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
    add: (title) => {
      dispatch(addPost(title))
    },
    delete: (id) => {
      dispatch(deletePost(id))
    },
    addCollectionPost: (collectionId, postId) => {
      dispatch(addCollectionPost(collectionId, postId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostScreen)
