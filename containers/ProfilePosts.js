import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import PostSnippet from '../components/PostSnippet';
import PostsFlatList from '../components/PostsFlatList';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class ProfilePosts extends Component {

state = {
  inputText: '',
  posts: []
}

postsOutput = () => {
   return (
    <PostsFlatList
      data={this.props.posts}
      navigation={this.props.navigation}
      deletePost={ this.deletePost }
    />
  )
}

componentDidMount(){
  this.getPostsFromBackend()
}

deletePost = (id) => {
  this.props.deletePost(id)
  fetch('http://localhost:3000/posts/' + id, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .catch((error) =>{
    console.error(error);
  })
}

getPostsFromBackend = () => {
  return fetch('http://localhost:3000/posts.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){
        this.state.dataSource.forEach(post => this.props.addPost(post.title, post.id))
        // this.state.dataSource.forEach(post => console.log(post.title, post.id))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}

render() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={ styles.buttonContainer }>
          <Button
            light
            block
            rounded
            onPress={() => {
              this.props.navigation.navigate('New Post')
            }}
          >
            <Text>New Post</Text>
          </Button>
        </View>
        <View style = { styles.listContainer }>
          { this.postsOutput() }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
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
    marginTop: 16,
    width: '100%'
  },
  buttonContainer: {
    width: '100%',
    padding: 16
  }
});

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (title, id) => {
      dispatch(addPost(title, id))
    },
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)
