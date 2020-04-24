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
    <View style={styles.search}>
        <View style={styles.icon24}></View>
        <Text style = {[styles.postTitle, typo.t14, color.black30]}>Поиск</Text>
      </View>
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
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: "#cccccc",
    marginRight: 16
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon24: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#cccccc",
    marginRight: 8
  }
})

export default TopBar
