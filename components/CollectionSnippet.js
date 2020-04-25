import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import UserSnippetSmall from '../components/UserSnippetSmall';


const CollectionSnippet = (props) => {
// Props:
// props.collection
// props.navigation


return (
  <TouchableOpacity
    onPress={() => {
      props.navigation.navigate('Collection', {
        collection_title: props.collection.title,
        id: props.collection.id,
        type: props.type
      })
    }}
  >
    <View style = { styles.listItem }>
      <View style = { styles.listItemBg }>
        <View style = { styles.topContainer }>
          <View style = { styles.topContainerBg }>
            <Text style = { styles.postsQuantity }>{ props.collection.posts_quantity } posts</Text>
          </View>
        </View>
        <View style = { styles.bottomContainer }>
          <Text style = { styles.collectionTitle }>{ props.collection.title }</Text>
          <UserSnippetSmall user_title={props.collection.user_title} />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 160,
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 8
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  topContainerBg: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 20
  },
  postButton: {
    width: '30%'
  },
  collectionTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#595959",
    marginBottom: 4,
  },
  postsQuantity: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#595959",
  },
})

export default CollectionSnippet

// export default CollectionSnippet;
