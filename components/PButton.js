import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { typo, color, COLOR } from '../styles'


const PButton = (props) => {
// Props:
// props.onPress
// props.text
// props.bg

console.log(props.bg);

return (
  <TouchableOpacity
    style = { styles(props).button }
    onPress={() => {
      props.onPress()
    }}
  >
    <Text style = { [typo.t16, styles(props).text] }>{ props.text }</Text>
  </TouchableOpacity>
);
}

const styles = (props) => StyleSheet.create({
  button: {
    backgroundColor: props.color,
    // backgroundColor: COLOR.blue,
    width: '100%',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: props.textColor
  }
})

export default PButton
