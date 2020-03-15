import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CollectionSnippetSmall = (props) => {
    return (
      <TouchableOpacity
        onPress={() => props.setCollection(props.id)}
      >
        <View style = { styles.listItem }>
          <View style = { styles.listItemBg }>
            <Text style = { styles.collectionTitle }>
              { props.title }
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 56,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemBg: {
    backgroundColor: '#F3F3F3',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    paddingLeft: 16,
    borderRadius: 8
  },
  collectionTitle: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#595959",
      marginBottom: 2,
    },
});

export default CollectionSnippetSmall;
