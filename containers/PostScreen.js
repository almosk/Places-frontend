import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CollectionsFlatList from '../components/CollectionsFlatList';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';
import { deletePost } from '../actions/post';
import { updatePost } from '../actions/post';

class PostScreen extends Component {

// Props:
// this.props.route.params.id
// this.props.navigation

componentDidMount(){
  this.getPostShow()
}
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
        this.props.updatePost(post.title, post.id, post.user_id, post.user_title, post.url, post.description, post.collections)
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
  return (
    <View>
      <View style = { styles.container }>
        <View style = { styles.post }>
          <Text style = { styles.postTitle }>{ post.title }</Text>
          <View style = { styles.horizontalContainer }>
          <Button
          rounded small light
          onPress={() => {
            this.props.navigation.navigate('Edit Post', {
              post: post
            })
          }}
          >
          <Text style = { styles.smallButtonText }>Edit</Text>
          </Button>
          <Button
          rounded small light
          onPress = { this.deletePost }
          >
          <Text style = { styles.smallButtonText }>Del</Text>
          </Button>
          </View>
        </View>
        <Text style = { styles.smallHeading }>{post.description}</Text>
      </View>

      <View style = { styles.container }>
        <Text style = { styles.smallHeading }>User:</Text>
        <Text style = { styles.smallHeading }>{post.user_title}</Text>
      </View>

      <View style = { styles.container }>
        <Text style = { styles.smallHeading }>In collections:</Text>
        { this.collectionsOutput(this.props.post.collections)}
      </View>

      <View style = { styles.button }>
        <Button
          rounded
          onPress={() => {
            this.props.navigation.navigate('Save post', {
              post: post
            })
          }}
        >
          <Text style = { styles.buttonText }>Save post to collection →</Text>
        </Button>
      </View>
    </View>
  )
}}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  post: {
    width: '100%',
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
    marginBottom: 8
  },
  smallHeading: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#595959"
  },
  button: {
    width: '100%',
    padding: 10,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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


const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.byId[ownProps.route.params.id],
    // postUser: state.users.byId[state.posts.byId[ownProps.route.params.post_id].user_id],
    // posts: state.posts.byId,
    // users: Object.values(state.users.byId),
    // collections: Object.values(state.collections.byId),
    // collectionPosts: Object.values(state.collectionPost.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    },
    updatePost: (title, id, user_id, user_title, url, description, collections) => {
      dispatch(updatePost(title, id, user_id, user_title, url, description, collections))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)
