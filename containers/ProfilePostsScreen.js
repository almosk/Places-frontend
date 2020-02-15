import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import PostSnippet from '../components/PostSnippet';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class ProfilePostsScreen extends Component {

state = {
  postName: '',
  posts: []
}

postSubmitHandler = () => {
  if(this.state.postName.trim() === '') {
    return;
  }
  this.props.add(this.state.postName);
  this.setState({
    postName: ''
  });
}

postNameChangeHandler = (value) => {
  this.setState({
    postName: value
  });
}

deletePost = (id) => {
  this.props.delete(id);
}

postsOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.posts }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <PostSnippet
          postName={ info.item.name }
          postId={ info.item.id }
          deletePost={ this.deletePost }
          navigation={this.props.navigation}
        />
      )}
    />
  )
}

render() {
  return (
    <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Create place"
          style = { styles.postInput }
          value = { this.state.postName }
          onChangeText = { this.postNameChangeHandler }
        ></TextInput>
        <Button title = 'Create'
          style = { styles.postButton }
          onPress = { this.postSubmitHandler }
        />
        </View>
        <View style = { styles.listContainer }>
          { this.postsOutput() }
        </View>

      </View>
    );
  }
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
    posts: state.posts.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPost(name))
    },
    delete: (id) => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePostsScreen)
