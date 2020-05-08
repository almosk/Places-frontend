import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import CollectionsFlatList from '../components/CollectionsFlatList';
import UserSnippetPost from '../components/UserSnippetPost';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import { typo, color } from '../styles'
// Redux
import { connect } from 'react-redux';
import { deletePost, updatePost } from '../actions/post';
// import { deleteProfilePost, updateProfilePost } from '../actions/profilePost';

class PostScreen extends Component {

// Props:
// this.props.route.params.id
// this.props.navigation

// componentDidMount(){
//   this.getPostShow()
// }
getPostShow = () => {
  return fetch(this.props.post.url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        postIsLoading: false,
        postDataSource: responseJson,
      }, function(){
        let post = this.state.postDataSource
        // console.log(post);
        // передавать весь пост сразу
        setTimeout(() => {
          this.props.updatePost(post)
        }, 250);
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}

collectionsOutput = (data) => {
  // console.log(data);
  return (
    <CollectionsFlatList
      data={data}
      navigation={this.props.navigation}
    />
  )
}

deletePost = () => {
  // fetch('http://localhost:3000/posts/' + this.props.route.params.post_id, {
  //   method: 'DELETE',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   }
  // })
  // .catch((error) =>{
  //   console.error(error);
  // })
  this.props.deletePost(this.props.route.params.post_id)
  this.props.navigation.navigate('Profile')
}

render() {
  let post = this.props.post
  if (post.collections == null) {
    this.getPostShow()
  }
  // console.log(this.props.route.params.id, post);
  // console.log(this.props.navigation.router);

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ImageBackground source={{uri: post.cover}} style={styles.image}></ImageBackground>
          <View style = { styles.container }>
            <View style = { styles.post }>
              <Text style = {[styles.postTitle, typo.t24, color.black80]}>{ post.title }</Text>
            </View>
            <Text style = { [styles.postDescription, typo.t16, color.black50] }>{post.description}</Text>
            <UserSnippetPost
              user = {post.user}
              user_title = {post.user_title}
              user_collection = {post.user_collection}
              collections = {post.collections}
              />
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style = { styles.buttonContainer }>
        <Button
          rounded
          onPress={() => {
            this.props.navigation.navigate('Save post', {
              post: post
            })
          }}
          >
          <Text style = { styles.buttonText }>Save post</Text>
        </Button>
      </View>
    </View>
  )
}}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 96,
    backgroundColor: 'white',
    // marginBottom: 8
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  post: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 12
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 260,
    backgroundColor: '#F3F3F3',
  },
  postDescription: {
    marginBottom: 24
  },
  postTitle: {

  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.8)',
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff"
  },
  smallButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  }
})

// selectDataSource = (state, ownProps) => {
//   if (Object.keys(state.posts.byId).includes(ownProps.route.params.id)) {
//     return state.posts.byId[ownProps.route.params.id]
//   } else {
//     return state.profilePosts.byId[ownProps.route.params.id]
//   }
// }

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.byId[ownProps.route.params.id]
  }
  // console.log(selectDataSource(state, ownProps));
  // return {
  //   post: selectDataSource(state, ownProps)
  // }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    },
    updatePost: (post) => {
      dispatch(updatePost(post))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)


// <View style = { styles.container }>
//   <Text style = { styles.smallHeading }>In collections:</Text>
//   { this.collectionsOutput(this.props.post.collections)}
// </View>
