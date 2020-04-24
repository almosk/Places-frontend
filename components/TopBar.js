import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { typo, color, COLOR } from '../styles'


// Props:
// props.onPress
// props.text

const TopBar = (props) => {
return (
  <View style={styles.topBarContainer}>
    <View style={styles.topBar}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}
      ></TouchableOpacity>
    </View>
  </View>
)}

const styles = StyleSheet.create({
  topBarContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    flex: 1,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
    marginTop: 48,
    padding: 16,
    width: '100%',
    // height: 48,
  },
  topBar: {
    height: 48,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    padding: 8
  },
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: "#cccccc",
  }
})

export default TopBar
