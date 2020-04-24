import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ProfilePosts from '../containers/ProfilePosts';
import ProfileCollections from '../containers/ProfileCollections';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';

class ProfileBottomSheet extends Component {

render() {
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
}}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 32,
    backgroundColor: "#fafafa",
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

export default ProfileBottomSheet
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
