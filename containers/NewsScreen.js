import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import NewsSnippet from '../components/NewsSnippet';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import PButton from '../components/PButton';
import { typo, color, COLOR } from '../styles'
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class NewsScreen extends Component {

  state = {
    inputText: '',
    posts: []
  }

  componentDidMount(){
    this.getPostsIndex()
  }

  getPostsIndex = () => {
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


  render() {

    return (
      <View style={styles.container}>
        <FlatList style = { styles.listContainer }
          ListHeaderComponent={
            <View style={ styles.socialContainer }>
              <View style={ styles.following }>
                <Text style = { [typo.t12, color.black30] }>Подписки</Text>
                <View style={ styles.counterContainer }>
                  <Text style = { [typo.t20, color.black80] }>122</Text>
                </View>
              </View>
              <View style={ styles.followers }>
                <Text style = { [typo.t12, color.black30] }>Подписчики</Text>
                <Text style = { [typo.t20, color.black80] }>67</Text>
              </View>
            </View>
          }
          data={this.props.posts}
          renderItem={({ item }) =>
            <NewsSnippet
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
      backgroundColor: '#ffffff'
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
      paddingTop: 30,
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      width: '100%',
      padding: 16,
      paddingTop: 0
    },
    socialContainer: {
      padding: 16,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    following: {
      width: 167,
      height: 68,
      borderRadius: 8,
      backgroundColor: '#F3F3F3',
      padding: 12,
      justifyContent: 'space-between',
    },
    followers: {
      width: 167,
      height: 68,
      borderRadius: 8,
      backgroundColor: '#F3F3F3',
      padding: 12,
      justifyContent: 'space-between',
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

  export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)
