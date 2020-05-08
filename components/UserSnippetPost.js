import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import { typo, color } from '../styles'

//Props:
// user_title
const UserSnippetPost = (props) => {

let collections_quantity = 0
if (props.collections) {
  collections_quantity += props.collections.length
}

return (
  <TouchableOpacity style = { styles.container }>
    <View style = { styles.horizontalContainer }>
      <ImageBackground source={{uri: props.user.avatar}} style={styles.image} imageStyle={{ borderRadius: 25 }}></ImageBackground>
      <View>
        <Text style = {[typo.t14, color.black80]}>{ props.user_title }</Text>
        <Text style = {[typo.t14, color.black30]}>in { props.user_collection }</Text>
      </View>
    </View>
    <View style = { styles.collectionsQuantity }>
      <Text style = {[typo.t14, color.black30]}>еще { collections_quantity }</Text>
    </View>
  </TouchableOpacity>
)}

const styles = StyleSheet.create({
  container: {
    height: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 8
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#595959",
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: '#d0d0d0',
    marginRight: 8,
    // borderWidth: 1,
    borderColor: '#cccccc'
  },
  collectionsQuantity: {
    height: 32,
    backgroundColor: '#f3f3f3',
    padding: 6,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 16,
    alignItems: 'center',
  }
})

export default UserSnippetPost;
