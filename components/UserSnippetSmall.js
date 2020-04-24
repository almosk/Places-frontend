import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';

//Props:
// user_title
const UserSnippetSmall = (props) => {
return (
  <TouchableOpacity style = { styles.container }>
    <View style = { styles.image }></View>
    <Text style = { styles.userTitle }>
      { props.user_title }
    </Text>
  </TouchableOpacity>
)}

const styles = StyleSheet.create({
  container: {
    height: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 8
  },
  userTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#595959",
  },
  image: {
    width: 16,
    height: 16,
    borderRadius: 24,
    backgroundColor: '#d0d0d0',
    marginRight: 8,
    // borderWidth: 1,
    borderColor: '#cccccc'
  }
})

export default UserSnippetSmall;
