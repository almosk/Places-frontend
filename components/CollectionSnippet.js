import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
// Redux
import { connect } from 'react-redux';


const CollectionSnippet = (props) => {
// Props:
// props.collection_id
// props.navigation

user_id = () => {
  // console.log(props.collectionUser);
  if (props.collectionUser !== null && props.collectionUser !== '' && typeof props.collectionUser !== "undefined") {
    return(
      <Text style = { styles.userTitle }>
        { props.collectionUser.title }
      </Text>
    )
  }
}

return (
  <TouchableOpacity
    onPress={() => {
      props.navigation.navigate('Collection', {
        collection_title: props.collection.title,
        id: props.collection.id
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

const mapStateToProps = (state, ownProps) => {
  return {
    collection: state.collections.byId[ownProps.collection_id],
    collectionUser: state.users.byId[state.collections.byId[ownProps.collection_id].user_id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionSnippet)

// export default CollectionSnippet;
