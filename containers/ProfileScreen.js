import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import ProfilePosts from '../containers/ProfilePosts';
import ProfileCollections from '../containers/ProfileCollections';
import ProfileNavigator from '../navigators/ProfileNavigator';
import ProfileBottomSheet from '../containers/ProfileBottomSheet'
import TopBar from '../components/TopBar'
import BottomSheet from 'reanimated-bottom-sheet'
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapBlock from '../components/MapBlock'
//Map
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoiYWxtb3NrIiwiYSI6ImNrOHhhdWw3MzBodGkzbG8wMzZhYm4waHcifQ.xy56Az5bM0S2EzXR_gdYjw");

const ProfileScreen = () => {
  const navigation = useNavigation()

  renderContent = () => {
    return (
      <View style={ styles.container }>
        <ProfileNavigator
          getStackRoute = { this.getStackRoute }
        />
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
  // <View style={styles.mapContainer}>
  //   <MapboxGL.MapView style={styles.map} />
  // </View>
  return (
    <Container style={ styles.container }>
      <TopBar
        navigation={ navigation }
        // route = { route }
      />
      <MapBlock/>

      <BottomSheet
        snapPoints = {[450, 600, 200]}
        enabledBottomInitialAnimation = { true }
        renderContent = {this.renderContent}
        renderHeader = {this.renderHeader}
        />
    </Container>
  )
}

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

export default ProfileScreen
