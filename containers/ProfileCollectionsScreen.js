import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import CollectionSnippet from '../components/CollectionSnippet';
// Redux
import { connect } from 'react-redux';
import { addPlace, deletePlace } from '../actions/place';


class ProfileCollectionsScreen extends Component {

state = {
  placeName: '',
  places: []
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
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    collections: state.collections.collections
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
