import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoiYWxtb3NrIiwiYSI6ImNrOHhhdWw3MzBodGkzbG8wMzZhYm4waHcifQ.xy56Az5bM0S2EzXR_gdYjw");

const MapBlock = (props) => {

return (
  <View style={styles.mapContainer}>
    <MapboxGL.MapView style={styles.map} />
  </View>
)}

const styles = StyleSheet.create({
  mapContainer: {
    height: 400,
    width: '100%',
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
})

export default MapBlock
