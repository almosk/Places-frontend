import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import PostSnippet from '../components/PostSnippet';
import PostsFlatList from '../components/PostsFlatList';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class ProfilePostsScreen extends Component {

state = {
  inputText: '',
  posts: []
}

postsOutput = () => {
   return (
    <PostsFlatList
      data={this.props.posts}
      navigation={this.props.navigation}
      deletePost={ this.props.delete }
    />
  )
}

render() {
  return (
    <View style={ styles.container }>
      <Button title = 'New Post'
        color="#f194ff"
        style = { styles.newPostButton }
        onPress={() => {
          this.props.navigation.navigate('New Post')
        }}
      />
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
  newPostButton:{
    marginTop: '130px'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.posts.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (title) => {
      dispatch(addPost(title))
    },
    delete: (id) => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePostsScreen)
