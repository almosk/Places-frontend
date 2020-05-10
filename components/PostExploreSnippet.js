import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';
import UserSnippetSmall from '../components/UserSnippetSmall';
import { typo, color, COLOR } from '../styles'

const PostExploreSnippet = (props) => {

// Props:
// props.post
// props.navigation
String.prototype.limit = function(length) {
  return this.length > length ? (this.substring(0, length) + '...') : this;
}

return (
  <TouchableOpacity
    onPress={() => {
      props.navigation.navigate('Place', {
        id: props.post.id,
      })
    }}
  >
    <View style = { styles.postSnippet }>
        <View style = { styles.textContainer }>
          <View>
            <Text style = { [styles.postTitle, typo.t20, color.black80] } numberOfLines={1} ellipsizeMode='tail'>
              { props.post.title }
            </Text>
            <Text style = { [styles.description, typo.t16, color.black50] } numberOfLines={3} ellipsizeMode='tail'>
              { props.post.description }
            </Text>
          </View>
          <View style = { styles.horizontaContainer }>
            <UserSnippetSmall
              user={props.post.user}
              textColor={COLOR.black80}/>
            <Text style = { [styles.collectionTitle, typo.t14, color.black30] } numberOfLines={1} ellipsizeMode='tail'>{ props.post.user_collection.limit(10) }</Text>
          </View>
        </View>
        <ImageBackground source={{uri: props.post.cover}} style={styles.image} imageStyle={{ borderRadius: 8 }}></ImageBackground>
    </View>
  </TouchableOpacity>
)}

// .limit(64)

const styles = StyleSheet.create({
  postSnippet: {
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  textContainer: {
    width: 258,
    height: 124,
    paddingRight: 24,
    paddingTop: 4,
    paddingBottom: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  horizontaContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  postButton: {
    width: '30%'
  },
  postTitle: {
    marginBottom: 4,
  },
  userTitle: {
  },
  collectionTitle: {
  },
  description: {
  },
  image: {
    width: 124,
    height: 124,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    marginRight: 12
  }
});

export default PostExploreSnippet
