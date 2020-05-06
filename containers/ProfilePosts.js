import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import PostSnippet from '../components/PostSnippet';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import PButton from '../components/PButton';
import { typo, color, COLOR } from '../styles'
// Redux
import { connect } from 'react-redux';
import { addProfilePost, deleteProfilePost } from '../actions/profilePost';


class ProfilePosts extends Component {

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
  return fetch('http://localhost:3000/v1/posts/profile_posts.json', {
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
          this.state.postsDataSource.forEach(post => this.props.addProfilePost(post))
        }, 250);
        // this.state.postsDataSource.forEach(post => console.log(post))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}


render() {

  return (
    <View style={styles.container}>
      <FlatList style = { styles.listContainer }
        data={this.props.profilePosts}
        ListHeaderComponent={
          <View style={ styles.buttonContainer }>
            <PButton
              text={'Добавить место'}
              color= {COLOR.black10}
              textColor={COLOR.black80}
              onPress={() => {
                this.props.navigation.navigate('New Post')
              }}
            />
          </View>
        }
        renderItem={({ item }) =>
          <PostSnippet
            id={item.id}
            url={item.url}
            post={item}
            navigation={this.props.navigation}
          />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // paddingTop: 16,
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
    // marginTop: '130px'
  },
  listContainer: {
    paddingTop: 16,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    padding: 16,
    paddingTop: 0
  }
});

const mapStateToProps = state => {
  return {
    profilePosts: Object.values(state.profilePosts.byId),
    // login: state.login
    // users: state.users,
    // collectionPosts: Object.values(state.collectionPost.byId),
    // collections: Object.values(state.collections.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProfilePost: (post) => {
      dispatch(addProfilePost(post))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)
