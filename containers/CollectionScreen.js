import React, { Component } from 'react';
import { StyleSheet, View, FlatList,  SafeAreaView, ScrollView, ImageBackground  } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import PostSnippet from '../components/PostSnippet';
import PostExploreSnippet from '../components/PostExploreSnippet';
import UserSnippetSmall from '../components/UserSnippetSmall';
import PButton from '../components/PButton';
import { typo, color, COLOR } from '../styles'
// Redux
import { connect } from 'react-redux';
import { deleteCollection, updateCollection } from '../actions/collection';


class CollectionScreen extends Component {

// Props:
// this.props.route.params.collection_id
// this.props.navigation

// componentDidMount(){
//   this.getCollectionShow()
// }

getCollectionShow = () => {
  return fetch(this.props.collection.url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        collectionIsLoading: false,
        collectionDataSource: responseJson,
      }, function(){
        this.props.updateCollection(this.state.collectionDataSource)
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}

postsOutput = (data) => {
  // let collectionPostIds = []
  // let PostIdsBelongsToCollection = Object.values(this.props.collectionPosts).filter(collectionPost => collectionPost.collection_id == this.props.route.params.collection_id)
  // PostIdsBelongsToCollection.forEach(collectionPost => collectionPostIds.push(collectionPost.post_id))
  // let PostsBelongsToCollection = this.props.posts.filter(post => collectionPostIds.includes(post.id))
  if (this.props.route.params.type == 'explore') {
    return (
      <FlatList style = { styles.listContainer }
        data={data}
        renderItem={({ item }) =>
        <PostExploreSnippet
          post={item}
          navigation={this.props.navigation}
        />}
        keyExtractor={item => item.id}
      />
    )
  } else {
    return (
      <FlatList style = { styles.listContainer }
        data={data}
        renderItem={({ item }) =>
        <PostSnippet
          post={item}
          navigation={this.props.navigation}
        />}
        keyExtractor={item => item.id}
      />
    )
  }
}

render() {
  let collection = this.props.collection
  if (collection.posts == null) {
    this.getCollectionShow()
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={{uri: collection.cover}} style={styles.image}>
          <View style = { styles.imageContainer }>
            <View style = { styles.topContainer }>
              <View style = { styles.topContainerBg }>
                <Text style = { [typo.t14, color.black80] }>{ collection.posts_quantity } posts</Text>
              </View>
            </View>
            <View style = { styles.bottomContainer }>
              <Text style = {[styles.title, typo.t24, color.white]}>{ collection.title }</Text>
              <UserSnippetSmall
                user = {collection.user}
                textColor={COLOR.white}
                user_title={collection.user_title} />
            </View>
          </View>
        </ImageBackground>
        <View style = { styles.container }>
          <Text style = { [styles.description, typo.t16, color.black80] }>Collection Description{collection.description}</Text>
          <PButton
            text={'Подписаться'}
            color= {COLOR.blue}
            textColor={COLOR.white}
          />
        </View>
          <View style = { styles.listContainer }>
            { this.postsOutput(collection.posts) }
          </View>
      </ScrollView>
    </SafeAreaView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
    backgroundColor: 'white',
    // marginBottom: 8
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  listContainer: {
    marginTop: 16,
    width: '100%'
  },
  image: {
    width: '100%',
    height: 260,
    backgroundColor: '#F3F3F3',
    marginBottom: 16
  },
  imageContainer:{
    backgroundColor: 'rgba(0,0,0,.3)',
    width: '100%',
    height: '100%',
    padding: 16,
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
  title: {
    marginBottom: 10
  },
  description: {
    marginBottom: 16
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    // posts: Object.values(state.posts.byId),
    // collectionPosts: Object.values(state.collectionPost.byId),
    // users: state.users
    collection: state.collections.byId[ownProps.route.params.id],
    // collectionUser: state.users.byId[state.collections.byId[ownProps.route.params.collection_id].user_id],
    // collections: Object.values(state.collections.byId),
    // collectionPosts: Object.values(state.collectionPost.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCollection: (id) => {
      dispatch(deleteCollection(id))
    },
    updateCollection: (collection) => {
      dispatch(updateCollection(collection))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionScreen)
