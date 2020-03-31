import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// Redux
import { connect } from 'react-redux';

const CollectionSnippetSmall = (props) => {
  // Props:
  // props.collection_id

return (
  <TouchableOpacity
    onPress={() => props.setCollection(props.collection_id)}
  >
    <View style = { styles.listItem }>
      <View
        style={(props.collection_id == props.selectedCollectionId) ? styles.selectedListItemBg : styles.listItemBg}
      >
        <Text style = { styles.collectionTitle }>
          { props.collection.title }
        </Text>
      </View>
    </View>
  </TouchableOpacity>
)}

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
  selectedListItemBg: {
    backgroundColor: '#DADADA',
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

const mapStateToProps = (state, ownProps) => {
  return {
    collection: state.collections.byId[ownProps.collection_id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionSnippetSmall)


// export default CollectionSnippetSmall;
