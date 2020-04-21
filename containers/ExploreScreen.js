import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ExplorePosts from '../containers/ExplorePosts';
import ExploreCollections from '../containers/ExploreCollections';
import ExploreUsers from '../containers/ExploreUsers';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';
import BottomSheet from 'reanimated-bottom-sheet'
//Map
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoiYWxtb3NrIiwiYSI6ImNrOHhhdWw3MzBodGkzbG8wMzZhYm4waHcifQ.xy56Az5bM0S2EzXR_gdYjw");

class ExploreScreen extends Component {

renderContent = () => {
  return (
    <View style={ styles.container }>
      <View>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Posts</Text></TabHeading>}>
            <ExplorePosts
              navigation={this.props.navigation}
              />
          </Tab>
          <Tab heading={ <TabHeading><Text>Collections</Text></TabHeading>}>
            <ExploreCollections
              navigation={this.props.navigation}
              />
          </Tab>
          <Tab heading={ <TabHeading><Text>Users</Text></TabHeading>}>
            <ExploreUsers
              navigation={this.props.navigation}
              collections={this.props.collections}
              collectionPosts={this.props.collectionPosts}
              users={this.props.users}
            />
          </Tab>
        </Tabs>
      </View>
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
render() {
  return (
    <Container style={ styles.container }>
      <View style={styles.topBar}></View>
      <View style={styles.mapContainer}>
        <MapboxGL.MapView style={styles.map} />
      </View>
      <BottomSheet
        snapPoints = {[450, 630, 200]}
        enabledBottomInitialAnimation = { true }
        renderContent = {this.renderContent}
        renderHeader = {this.renderHeader}
        />
    </Container>
  )
}}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    backgroundColor: "#fafafa",
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
  },
  topBar: {
    position: 'absolute',
    top: 0,
    flex: 1,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
    margin: 16,
    marginTop: 48,
    width: 343,
    height: 32,
    backgroundColor: "#cccccc",
  }
})

export default ExploreScreen
