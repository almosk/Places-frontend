import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import PostSnippet from '../components/PostSnippet';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class ProfilePostsScreen extends Component {

state = {
  inputText: '',
  posts: []
}

postSubmitHandler = () => {
  if(this.state.inputText.trim() === '') {
    return;
  }
  this.props.add(this.state.inputText);
  this.setState({
    inputText: ''
  });
  console.log(this.props.posts);
}

inputTextChangeHandler = (value) => {
  this.setState({
    inputText: value
  });
}

deletePost = (id) => {
  this.props.delete(id);
}

postsOutput = () => {
   return (
    // <FlatList style = { styles.listContainer }
    //   data = { this.props.posts }
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem = { info => (
    //     <PostSnippet
    //       inputText={ info.item.title }
    //       postId={ info.item.id }
    //       deletePost={ this.deletePost }
    //       navigation={this.props.navigation}
    //     />
    //   )}
    // />
    <FlatList
      data={this.props.posts}
      renderItem={({ item }) =>
        <PostSnippet
          title={ item.title }
          id={ item.id }
          deletePost={ this.deletePost }
          navigation={this.props.navigation}
        />}
      keyExtractor={item => item.id}
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
          value = { this.state.inputText }
          onChangeText = { this.inputTextChangeHandler }
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
