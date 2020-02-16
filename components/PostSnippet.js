import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const PostSnippet = (props) => {
    return (
      <TouchableOpacity>
        <View style = { styles.listItem }>
          <Text style = { styles.postButton }>
            { props.title }
          </Text>
          <Button title = 'Delete'
            style = { styles.postButton }
            onPress = { () => props.deletePost(props.id) }
          />
          <Button
            title="Go to Place"
            onPress={() => {
              props.navigation.navigate('Place', {
                postName: props.title
              })
            }}
          />
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  listItem: {
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
