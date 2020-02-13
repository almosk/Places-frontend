import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import { addPlace, deletePlace } from '../actions/place';


class ProfileScreen extends Component {

state = {
  placeName: '',
  places: []
}

placeSubmitHandler = () => {
  if(this.state.placeName.trim() === '') {
    return;
  }
  this.props.add(this.state.placeName);
  this.setState({
    placeName: ''
  });
}

placeNameChangeHandler = (value) => {
  this.setState({
    placeName: value
  });
}

deletePlace = (id) => {
  this.props.delete(id);
}

placesOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.places }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <ListItem
          placeName={ info.item.name }
          placeId={ info.item.id }
          deletePlace={ this.deletePlace }
          navigation={this.props.navigation}
        />
      )}
    />
  )
}

render() {
  return (
    <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Create place"
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }
        ></TextInput>
        <Button title = 'Create'
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
        />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
