import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';
import UserSnippet from '../components/UserSnippet';
import { typo, color, COLOR } from '../styles'
import IconMore from '../assets/icons/more.svg';

const NewsSnippet = (props) => {

// Props:
// props.post
// props.navigation
String.prototype.limit = function(length) {
  return this.length > length ? (this.substring(0, length) + '...') : this;
}

return (
  <TouchableOpacity
    style = {styles.container}
    onPress={() => {
      props.navigation.navigate('Place', {
        id: props.post.id,
      })
    }}
  >
    <View style = {styles.userSnippet}>
      <View style = { styles.horizontalContailner }>
        <ImageBackground source={{uri: props.post.user.avatar}} style={styles.userPic} imageStyle={{ borderRadius: 25 }}></ImageBackground>
        <View>
          <Text style = { [styles.userTitle, typo.t14, color.black80] }>{ props.post.user_title }</Text>
          <Text style = { [typo.t14, color.black30] }>в { props.post.user_collection }</Text>
        </View>
      </View>
      <IconMore width={24} height={24}/>
    </View>
    <View style = { styles.postSnippet }>
      <ImageBackground source={{uri: props.post.cover}} style={styles.image} imageStyle={{ borderRadius: 4 }}></ImageBackground>
      <View>
        <Text style = { [typo.t20, color.black80, styles.postTitle] }>{ props.post.title }</Text>
        <Text style = { [typo.t16, color.black50]} numberOfLines={3} ellipsizeMode='tail'>{ props.post.description }</Text>
      </View>
    </View>
  </TouchableOpacity>
)}

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  userSnippet: {
    width: '100%',
    // height: 72,
    // padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  userTitle: {
    marginBottom: 2
  },
  postSnippet: {
    // height: 144,
    width: '100%',
    // paddingRight: 16,
    // paddingLeft: 16,
    // paddingBottom: 16,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // marginBottom: 8
  },
  horizontalContailner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  moreIcon: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#F3F3F3',
  },
  postTitle: {
    marginBottom: 6
  },
  image: {
    width: '100%',
    height: 172,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    marginBottom: 12,
  },
  userPic: {
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: '#F3F3F3',
    marginRight: 12
  },
});

export default NewsSnippet
