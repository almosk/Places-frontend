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

//Map
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoiYWxtb3NrIiwiYSI6ImNrOHhhdWw3MzBodGkzbG8wMzZhYm4waHcifQ.xy56Az5bM0S2EzXR_gdYjw");

const ExploreScreen = () => {
  const navigation = useNavigation()
  renderContent = () => {
    return (
      <View style={ styles.container }>
        <ExploreNavigator/>
      </View>
    )
  }

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerHandler}>
        </View>
      </View>
    )
  }

  return (
    <Container style={ styles.container }>
      <TopBar
        navigation={ navigation }
        // route = { route }
      />
      <View style={styles.mapContainer}>
        <MapboxGL.MapView style={styles.map} />
      </View>
      <BottomSheet
        snapPoints = {[450, 600, 200]}
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
    overflow: 'hidden'
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

export default ExploreScreen
