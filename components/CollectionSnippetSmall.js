import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CollectionSnippetSmall = (props) => {
    return (
      <TouchableOpacity
        onPress={() => props.setCollection(props.id)}
      >
        <View style = { styles.listItem }>
          <Text style = { styles.postButton }>
            { props.title }
          </Text>
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

export default CollectionSnippetSmall;
