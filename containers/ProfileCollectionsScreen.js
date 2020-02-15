import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import CollectionSnippet from '../components/CollectionSnippet';
// Redux
import { connect } from 'react-redux';
import { addPost, deletePost } from '../actions/post';


class ProfileCollectionsScreen extends Component {

state = {
  postName: '',
  posts: []
}

collectionsOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.collections }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <CollectionSnippet
          collectionName={ info.item.title }
          collectionId={ info.item.id }
          navigation={this.props.navigation}
        />
      )}
    />
  )
}

render() {
  return (
    <View style={ styles.container }>
        <View style = { styles.listContainer }>
          { this.collectionsOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    collections: Object.values(state.collections.collections.byId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // add: (name) => {
    //   dispatch(addPlace(name))
    // },
    // delete: (id) => {
    //   dispatch(deletePlace(id))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCollectionsScreen)
