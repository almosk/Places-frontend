import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ProfilePosts from '../containers/ProfilePosts';
import ProfileCollections from '../containers/ProfileCollections';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';
import BottomSheet from 'reanimated-bottom-sheet'
//Map
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoiYWxtb3NrIiwiYSI6ImNrOHhhdWw3MzBodGkzbG8wMzZhYm4waHcifQ.xy56Az5bM0S2EzXR_gdYjw");

class ProfileScreen extends Component {

renderContent = () => {
  return (
    <View style={ styles.container }>
      <View>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Posts</Text></TabHeading>}>
            <ProfilePosts
              navigation={this.props.navigation}
              />
          </Tab>
          <Tab heading={ <TabHeading><Text>Collections</Text></TabHeading>}>
            <ProfileCollections
              navigation={this.props.navigation}
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
    <Container>
      <View style={styles.mapContainer}>
        <MapboxGL.MapView style={styles.map} />
      </View>
      <BottomSheet
        snapPoints = {[450, 100]}
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
  }
})

export default ProfileScreen
//
// <View style={styles.mapContainer}>
//   <MapboxGL.MapView style={styles.map} />
// </View>
//
// <View style={ styles.container }>
//   <View>
//     <Tabs>
//       <Tab heading={ <TabHeading><Text>Posts</Text></TabHeading>}>
//         <ProfilePosts
//           navigation={this.props.navigation}
//           />
//       </Tab>
//       <Tab heading={ <TabHeading><Text>Collections</Text></TabHeading>}>
//         <ProfileCollections
//           navigation={this.props.navigation}
//           />
//       </Tab>
//     </Tabs>
//   </View>
// </View>
//
