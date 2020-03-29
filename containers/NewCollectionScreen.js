import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import CollectionsFlatList from '../components/CollectionsFlatList';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';
import { addCollection } from '../actions/collection';


class NewCollectionScreen extends Component {

state = {
  inputText: '',
  collectionId: ''
}

postSubmitHandler = () => {
  console.log(11);
  if(this.state.inputText.trim() === '') {
    return;
  }
  this.sendCollectionToBackend(this.state.inputText)
}

inputTextChangeHandler = (value) => {
  this.setState({
    inputText: value
  });
}

sendCollectionToBackend = (title) => {
  console.log('yo');
  fetch('http://localhost:3000/collections', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      user_id: this.props.users.loggedUser,
      city_id: 1
    }),
  })
  .then((response) => response.json())
  .then((responseJson) => {
    // console.log(responseJson);
    this.props.addCollection(this.state.inputText, responseJson.collection.id, this.props.users.loggedUser)
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
  let loggedUser = Object.values(this.props.users.byId).filter(user => user.id == this.props.users.loggedUser)[0]
  return (
    <View>
      <View style={ styles.container }>
        <View style = { styles.inputContainer }>
          <TextInput
            placeholder = "Collection title..."
            style = { styles.postInput }
            value = { this.state.inputText }
            onChangeText = { this.inputTextChangeHandler }
          ></TextInput>
          <Button rounded small
            onPress={() => {this.postSubmitHandler()}}
          >
            <Text style={ styles.smallButtonText }>Save</Text>
          </Button>
        </View>
      </View>
      <View style={ styles.container }>
        <Text style={ styles.smallHeading }>Collection creator:</Text>
        <Text style={ styles.text }>{ loggedUser.title }</Text>
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
  text: {
    paddingRight: 16,
    paddingLeft: 16,
    fontWeight: "bold",
    fontSize: 20,
    color: "#595959"
  },
});

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.byId),
    collections: Object.values(state.collections.byId),
    collectionPosts: state.collectionPost.byId,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (title, id, user_id) => {
      dispatch(addPost(title, id, user_id))
    },
    delete: (id) => {
      dispatch(deletePost(id))
    },
    addCollection: (title, id, user_id) => {
      dispatch(addCollection(title, id, user_id))
    }
  }
}

// <Button title = 'Create'
//   style = { styles.postButton }
//   onPress = { this.postSubmitHandler }
// />

export default connect(mapStateToProps, mapDispatchToProps)(NewCollectionScreen)
