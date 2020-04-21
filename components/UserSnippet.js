import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';

//Props:
// user
const UserSnippet = (props) => {

logInButton = () => {
  if (props.user.id != props.loggedUser) {
    return(
      <Button
        rounded small light
        onPress = { () => props.logInUser(props.user.id) }
      >
        <Text style = { styles.smallButtonText }>Log in</Text>
      </Button>
    )
  } else {
    return
  }
}
return (
  <TouchableOpacity
    style = { styles.postSnippet }
    onPress={() => {
      props.navigation.navigate('User', {
        user: props.user
      })
    }}
  >
    <View style = { styles.horizontaContainer }>
      <View style = { styles.image }></View>
      <View>
        <Text style = { styles.postTitle }>
          { props.user.title }
        </Text>
        <View style = { styles.horizontaContainer }>
          <Text style = { styles.collectionTitle }>Collections: { props.user.collections_quantity }</Text>
          <Text style = { styles.collectionTitle }> • </Text>
          <Text style = { styles.collectionTitle }>Posts: { props.user.posts_quantity }</Text>
        </View>
      </View>
    </View>

  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  postSnippet: {
    width: '100%',
    height: 72,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  horizontaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postButton: {
    width: '30%'
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#595959",
    marginBottom: 2,
  },
  collectionTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#808080"
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F3F3',
    marginRight: 12
  },
  smallButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  }
});

export default UserSnippet;
