import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ExplorePosts from '../containers/ExplorePosts';
import ExploreCollections from '../containers/ExploreCollections';
import ExploreUsers from '../containers/ExploreUsers';
import ExploreNavigator from '../navigators/ExploreNavigator';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';
import BottomSheet from 'reanimated-bottom-sheet'
import TopBar from '../components/TopBar'
import { useNavigation, useRoute } from '@react-navigation/native';
import MapBlock from '../containers/MapBlock'
// Redux
import { connect } from 'react-redux';

//Map
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoiYWxtb3NrIiwiYSI6ImNrOHhhdWw3MzBodGkzbG8wMzZhYm4waHcifQ.xy56Az5bM0S2EzXR_gdYjw");

const ExploreScreen = (props) => {
  const navigation = useNavigation()

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerHandler}>
        </View>
      </View>
    )}

  renderContent = () => {
    return (
      <View style={ styles.container }>
        <ExploreNavigator/>
      </View>
    )}

  return (
    <Container style={ styles.container }>
      <TopBar
        navigation={ navigation }
        // route = { route }
      />

      <MapBlock
        posts = { props.posts }
      />

      <BottomSheet
        style={styles.bottomSheet}
        snapPoints = {[450, 672, 248]}
        enabledBottomInitialAnimation = { true }
        renderContent = {this.renderContent}
        renderHeader = {this.renderHeader}
        />
    </Container>
)}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
    height: '100%',
  },
  bottomSheet: {
    height: '100%'
  },
  mapContainer: {
    height: 600,
    width: '100%',
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  },
  header: {
    height: 32,
    marginBottom: -32,
    // backgroundColor: "#fafafa",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  headerHandler: {
    marginTop: 10,
    height: 5,
    width: 64,
    backgroundColor: "#cccccc",
    borderRadius: 4
  }
})

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // addPost: (post) => {
    //   dispatch(addPost(post))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen)
