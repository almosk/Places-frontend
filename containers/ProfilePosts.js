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

static navigationOptions = { header: null };

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

render() {
  // console.log(this.props.posts);
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
          <PostsFlatList
            data={this.props.posts}
            navigation={this.props.navigation}
            deletePost={ this.deletePost }
            users={this.props.users}
          />
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
    posts: Object.values(state.posts.byId),
    users: state.users
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
