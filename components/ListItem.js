import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const ListItem = (props) => {
    return (
      <TouchableOpacity>
        <View style = { styles.listItem }>
          <Text style = { styles.placeButton }>
            { props.placeName }
          </Text>
          <Button title = 'Delete'
            style = { styles.placeButton }
            onPress = { () => props.deletePlace(props.placeId) }
          />
          <Button
            title="Go to Place"
            onPress={() => props.navigation.navigate('Place')}
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
  placeButton: {
    width: '30%'
  }
});

export default ListItem;
