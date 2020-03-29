import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const CollectionSnippet = (props) => {

user_id = () => {
  if (props.users.byId[props.collection.user_id] !== null && props.users.byId[props.collection.user_id] !== '' && typeof props.users.byId[props.collection.user_id] !== "undefined") {
    return(
      <Text style = { styles.userTitle }>
        { props.users.byId[props.collection.user_id].title }
      </Text>
    )
  }
}

return (
  <TouchableOpacity
    onPress={() => {
      props.navigation.navigate('Collection', {
        collectionName: props.collection.title,
        collectionId: props.collection.id
      })
    }}
  >
    <View style = { styles.listItem }>
      <View style = { styles.listItemBg }>
        <Text style = { styles.collectionTitle }>
          { props.collection.title }
        </Text>
        { this.user_id() }
      </View>
    </View>
  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 72,
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
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 8
  },
  postButton: {
    width: '30%'
  },
  collectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#595959",
    marginBottom: 2,
  },
  userTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080",
    marginBottom: 2,
  },
});

export default CollectionSnippet;
