import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addPlace, deletePlace } from '../actions/place';


class NewsScreen extends Component {
render() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>NewsScreen!</Text>
    </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    },
    delete: (id) => {
      dispatch(deletePlace(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)
