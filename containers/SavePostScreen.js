import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import CollectionsFlatList from '../components/CollectionsFlatList';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';
import { addCollectionPost } from '../actions/collectionPost';


class SavePostScreen extends Component {

state = {
  collectionId: ''
}

postSubmitHandler = () => {
  console.log(this.state.collectionId, this.props.route.params.post.id);
  this.props.addCollectionPost(this.state.collectionId, this.props.route.params.post.id)
  this.props.navigation.navigate('Place', {
    post: this.props.route.params.post
  })
}

setCollection = (collectionId) => {
  this.setState({
    collectionId: collectionId
  }, () => {
    this.postSubmitHandler()
  })
}

render() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.smallHeading }>Select collection:</Text>
      <CollectionsFlatList
        data = { this.props.collections }
        setCollection = { this.setCollection }
      />
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  smallHeading: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
})

const mapStateToProps = state => {
  return {
    collections: Object.values(state.collections.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCollectionPost: (collectionId, postId) => {
      dispatch(addCollectionPost(collectionId, postId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavePostScreen)