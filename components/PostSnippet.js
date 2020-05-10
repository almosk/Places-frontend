import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { typo, color } from '../styles'
import IconMore from '../assets/icons/more.svg';

const PostSnippet = (props) => {

// Props:
// props.post
// props.navigation

return (
  <TouchableOpacity
    style = { styles.postSnippet }
    onPress={() => {
      props.navigation.navigate('Place', {
        id: props.post.id,
      })
    }}
  >
    <View style = { styles.horizontaContainerSpace }>
      <View style = { styles.horizontaContainerStart }>
        <ImageBackground source={{uri: props.post.cover}} style={styles.image} imageStyle={{ borderRadius: 4 }}></ImageBackground>
        <View>
          <Text style = { styles.postTitle }>
            { props.post.title }
          </Text>
          <Text style = { styles.collectionTitle }>
            { props.post.user_title }
          </Text>
        </View>
      </View>
      <IconMore width={24} height={24}/>
    </View>
  </TouchableOpacity>
)}

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
  horizontaContainerStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontaContainerSpace: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    borderRadius: 4,
    backgroundColor: '#F3F3F3',
    marginRight: 12
  }
});

export default PostSnippet
