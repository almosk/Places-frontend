import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import PostExploreSnippet from '../components/PostExploreSnippet';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class ExplorePosts extends Component {

state = {
  inputText: '',
  posts: []
}

componentDidMount(){
  this.getPostsIndex()
}

getPostsIndex = () => {
  // const myHeaders = new Headers({
  //   'access-token': this.props.login['map']['access-token'],
  //   'client': this.props.login['map']['client'],
  //   'uid': this.props.login['map']['uid']
  // });
  return fetch('http://localhost:3000/v1/posts/explore_posts.json', {
    headers: {
      // 'access-token': this.props.login['headers']['map']['access-token']
    },
  }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        postsIsLoading: false,
        postsDataSource: responseJson,
      }, function(){
        // console.log('back', this.state.postsDataSource);
        setTimeout(() => {
          this.state.postsDataSource.forEach(post => this.props.addPost(post))
        }, 250);
        // this.state.postsDataSource.forEach(post => console.log(post))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}

postsOutput = (data) => {
  return (
    <FlatList style = { styles.listContainer }
      data={data}
      renderItem={({ item }) =>
        <PostExploreSnippet
          id={item.id}
          url={item.url}
          post={item}
          navigation={this.props.navigation}
        />}
      keyExtractor={item => item.id}
    />
  );
}

render() {
  // console.log(this.props.login);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        { this.postsOutput(this.props.posts) }
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
    // login: state.login
    // users: state.users,
    // collectionPosts: Object.values(state.collectionPost.byId),
    // collections: Object.values(state.collections.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (post) => {
      dispatch(addPost(post))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePosts)
