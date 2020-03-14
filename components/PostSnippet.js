import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const PostSnippet = (props) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Place', {
            postName: props.post.title,
            post: props.post
          })
        }}
      >
        <View style = { styles.postSnippet }>
          <Text style = { styles.postButton }>
            { props.post.id }, { props.post.title }
          </Text>
          <Button title = 'Delete'
            style = { styles.postButton }
            onPress = { () => props.deletePost(props.id) }
          />
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  postSnippet: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  postButton: {
    width: '30%'
  }
});

export default PostSnippet;
