import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import CollectionSnippetSmall from '../components/CollectionSnippetSmall';
import { typo, color } from '../styles'
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';
import { addCollectionPost } from '../actions/collectionPost';
import { addProfileCollection } from '../actions/profileCollection';


class NewPostScreen extends Component {

state = {
  inputText: '',
  collectionId: ''
}

componentDidMount(){
  this.getCollectionsIndex()
}
getCollectionsIndex = () => {
  return fetch('http://localhost:3000/v1/collections/profile_collections.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        collectionsIsLoading: false,
        collectionsDataSource: responseJson,
      }, function(){
        this.state.collectionsDataSource.forEach(collection => this.props.addProfileCollection(collection))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}

postSubmitHandler = () => {
  if(this.state.inputText.trim() === '') {
    return;
  }
  this.sendPostToBackend(this.state.inputText)
  // console.log(this.state.inputText, this.state.responsePostId);
  // this.props.addPost(this.state.inputText, this.state.responsePostId)

  // this.props.addCollectionPost(this.state.collectionId, 1)
  // console.log(this.state.collectionId, this.props.collectionPosts);
  // this.setState({
  //   inputText: ''
  // })
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

sendCollectionPostToBackend = (collection_id, post_id) => {
  fetch('http://localhost:3000/collection_posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      collection_id: collection_id,
      post_id: post_id
    }),
  })
  .then((response) => response.json())
  .then((responseJson) => {
    // console.log(responseJson);
    this.props.addCollectionPost(responseJson.collection_post.id, collection_id, post_id)
  })
  .catch((error) =>{
    console.error(error);
  })
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
      user_id: 0
    }),
  })
  .then((response) => response.json())
  .then((responseJson) => {
    this.props.addPost(this.state.inputText, responseJson.post.id, this.props.users.loggedUser)
    // this.props.addCollectionPost(this.state.collectionId, responseJson.post.id)
    this.sendCollectionPostToBackend(this.state.collectionId, responseJson.post.id)
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
        <Text style={[typo.t14, color.black80]}>Новое место</Text>
        <View style = { styles.inputContainer }>
          <TextInput
            placeholder = "Введите название..."
            style = { [typo.t24, color.black80] }
            value = { this.state.inputText }
            onChangeText = { this.inputTextChangeHandler }
          ></TextInput>
        </View>

        <Text style={[typo.t14, color.black50]}>Выберите подборку</Text>
          <FlatList style = { styles.listContainer }
            data = { this.props.profileCollections }
            keyExtractor={(item, index) => index.toString()}
            renderItem = { info => (
              <CollectionSnippetSmall
                collection={ info.item }
                setCollection={ this.setCollection }
              />
            )}
          />
      </View>
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 32,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    // marginBottom: 16
  },
  inputContainer: {
    height: 56,
    // padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 32
  },
  postInput: {
    width: '70%'
  },
  postButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%',
    marginTop: 16,
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
    // posts: Object.values(state.posts.byId),
    // collections: Object.values(state.collections.byId),
    // collectionPosts: state.collectionPost.byId,
    // users: state.users
    profileCollections: Object.values(state.profileCollections.byId),
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
    addCollectionPost: (id, collection_id, post_id) => {
      dispatch(addCollectionPost(id, collection_id, post_id))
    },
    addProfileCollection: (collection) => {
      dispatch(addProfileCollection(collection))
    }
  }
}

// <Button title = 'Create'
//   style = { styles.postButton }
//   onPress = { this.postSubmitHandler }
// />

export default connect(mapStateToProps, mapDispatchToProps)(NewPostScreen)
