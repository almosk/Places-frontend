import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import { typo, color, COLOR } from '../styles'

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
      <ImageBackground source={{uri: props.user.avatar}} style={styles.image} imageStyle={{ borderRadius: 32 }}></ImageBackground>
      <View>
        <Text style = { [styles.postTitle, typo.t20, color.black80] } numberOfLines={1} ellipsizeMode='tail'>
          { props.user.title }
        </Text>
        <View style = { styles.horizontaContainer }>
          <Text style = { [styles.collectionTitle, typo.t14, color.black50] }>Подборки { props.user.collections_quantity }</Text>
          <Text style = { [styles.collectionTitle, typo.t14, color.black50] }> • </Text>
          <Text style = { [styles.collectionTitle, typo.t14, color.black50] }>Места { props.user.posts_quantity }</Text>
        </View>
      </View>
    </View>

  </TouchableOpacity>
);
}
// const image = { uri: "https://reactjs.org/logo-og.png" };

const styles = StyleSheet.create({
  postSnippet: {
    width: '100%',
    // height: 72,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
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
    // fontWeight: "bold",
    // fontSize: 16,
    // color: "#595959",
    marginBottom: 4,
  },
  collectionTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#808080"
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 16
  },
  smallButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  }
});

export default UserSnippet;
