import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CollectionScreen = ({ route, navigation }) => {
  const { collectionName } = route.params
  return (
    <View style = { styles.place }>
      <Text style = { styles.placeButton }>
        { collectionName }
      </Text>
    </View>
  );
}



const styles = StyleSheet.create({
  place: {
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

export default CollectionScreen;
