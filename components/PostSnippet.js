import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';
import IconMore from '../assets/icons/more.svg';
import { typo, color, COLOR } from '../styles'

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
          <Text style = { [styles.postTitle, typo.t18, color.black80]} numberOfLines={1} ellipsizeMode='tail'>
            { props.post.title }
          </Text>
          <Text style = { [styles.collectionTitle, typo.t14, color.black50] }>
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
    // height: 72,
    padding: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomColor: '#F2F2F2',
    // borderBottomWidth: 1,
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
    width: 270,
    marginBottom: 6,
  },
  collectionTitle: {
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#F3F3F3',
    marginRight: 12
  }
});

export default PostSnippet
