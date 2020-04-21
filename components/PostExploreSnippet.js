import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import UserSnippetSmall from '../components/UserSnippetSmall';

const PostExploreSnippet = (props) => {

// Props:
// props.post
// props.navigation

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
            <Text style = { styles.postTitle }>
              { props.post.title }
            </Text>
            <Text style = { styles.description }>
              { props.post.description }
            </Text>
          </View>
          <View style = { styles.horizontaContainer }>
            <UserSnippetSmall user_title={props.post.user_title} />
            <Text style = { styles.collectionTitle }>{ props.post.user_collection }</Text>
          </View>
        </View>
        <View style = { styles.image }></View>
    </View>
  </TouchableOpacity>
)}

const styles = StyleSheet.create({
  postSnippet: {
    height: 144,
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
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  horizontaContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  postButton: {
    width: '30%'
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#595959",
    marginBottom: 2,
  },
  userTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#595959",
    marginRight: 8
  },
  collectionTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#808080"
  },
  description: {
    width: 220,
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: 4,
    backgroundColor: '#F3F3F3',
    marginRight: 12
  }
});

export default PostExploreSnippet