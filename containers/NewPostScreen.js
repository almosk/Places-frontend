import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Picker } from 'react-native';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class NewPostScreen extends Component {

state = {
  inputText: '',
  language:'Ruby'
}

postSubmitHandler = () => {
  if(this.state.inputText.trim() === '') {
    return;
  }
  this.props.add(this.state.inputText);
  this.setState({
    inputText: ''
  });
  console.log(this.props.language);
}

inputTextChangeHandler = (value) => {
  this.setState({
    inputText: value
  });
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
      <Picker
        selectedValue={this.state.language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({language: itemValue})
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  )}
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
    // posts: Object.values(state.posts.posts.byId)
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPostScreen)
