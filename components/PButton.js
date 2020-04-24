import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { typo, color, COLOR } from '../styles'


const PButton = (props) => {
// Props:
// props.onPress
// props.text

return (
  <TouchableOpacity
    style = { styles.button }
    onPress={() => {
      props.onPress()
    }}
  >
    <Text style = { [typo.t16, color.white] }>{ props.text }</Text>
  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.blue,
    width: '100%',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default PButton
