import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ExplorePosts from '../containers/ExplorePosts';
import ExploreCollections from '../containers/ExploreCollections';
import ExploreUsers from '../containers/ExploreUsers';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';

class ExploreBottomSheet extends Component {
render() {
  return (
    <Container style={ styles.container }>
      <Tabs>
        <Tab heading={ <TabHeading><Text>Места</Text></TabHeading>}>
          <ExplorePosts
            navigation={this.props.navigation}
            />
        </Tab>
        <Tab heading={ <TabHeading><Text>Подборки</Text></TabHeading>}>
          <ExploreCollections
            navigation={this.props.navigation}
            />
        </Tab>
        <Tab heading={ <TabHeading><Text>Люди</Text></TabHeading>}>
          <ExploreUsers
            navigation={this.props.navigation}
            collections={this.props.collections}
            collectionPosts={this.props.collectionPosts}
            users={this.props.users}
          />
        </Tab>
      </Tabs>
    </Container>
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

export default ExploreBottomSheet
