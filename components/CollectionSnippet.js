import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';
import UserSnippetSmall from '../components/UserSnippetSmall';
import { typo, color, COLOR } from '../styles'

const CollectionSnippet = (props) => {
// Props:
// props.collection
// props.navigation


return (
  <TouchableOpacity
    onPress={() => {
      props.navigation.navigate('Collection', {
        collection_title: props.collection.title,
        id: props.collection.id,
        type: props.type
      })
    }}
  >
    <View style = { styles.listItem }>
      <ImageBackground source={{uri: props.collection.cover}} style={styles.image} imageStyle={{ borderRadius: 8 }}>
        <View style = { styles.container }>
          <View style = { styles.topContainer }>
            <View style = { styles.topContainerBg }>
              <Text style = { styles.postsQuantity }>{ props.collection.posts_quantity } posts</Text>
            </View>
          </View>
          <View style = { styles.bottomContainer }>
            <Text style = { [styles.collectionTitle, typo.t24, color.white] } numberOfLines={1} ellipsizeMode='tail'>{ props.collection.title }</Text>
              <UserSnippetSmall
                user={props.collection.user}
                textColor={COLOR.white}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 200,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center'
  },
  image: {
    backgroundColor: '#F3F3F3',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden'
  },
  container:{
    width: '100%',
    height: '100%',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,.3)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  topContainerBg: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 20
  },
  postButton: {
    width: '30%'
  },
  collectionTitle: {
    marginBottom: 8,
  },
  postsQuantity: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#595959",
  },
})

export default CollectionSnippet

// export default CollectionSnippet;
