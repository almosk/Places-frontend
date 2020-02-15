import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const CollectionSnippet = (props) => {
    return (
      <TouchableOpacity>
        <View style = { styles.listItem }>
          <Text style = { styles.postButton }>
            { props.collectionName }
          </Text>
          <Button
            title="Go to Collection"
            onPress={() => {
              props.navigation.navigate('Collection', {
                collectionName: props.collectionName
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

export default CollectionSnippet;
