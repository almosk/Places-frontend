import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ExplorePosts from '../containers/ExplorePosts';
import ExploreCollections from '../containers/ExploreCollections';
import ExploreUsers from '../containers/ExploreUsers';
import { Container, Text, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import { typo, color, COLOR } from '../styles'

class ExploreBottomSheet extends Component {
render() {
  return (
    <Container style={ styles.container }>
      <Tabs

        tabBarUnderlineStyle={{ flex: 0, height: 32, margin: 8, borderRadius: 16, backgroundColor: 'rgba(0,0,0,.05)', zIndex: 0, width: 120 }}
        activeTextStyle={{color: '#fff', zIndex: 2}}
        tabContainerStyle={{ width: 300, borderBottomWidth: 0, backgroundColor: 'white', marginLeft: 32, marginRight: 32}}>
        <Tab heading={
            <TabHeading
              style={{
                width: 105,
                backgroundColor: 'rgba(0,0,0,0)',
                // backgroundColor: 'rgba(0,0,0,.03)',
                height: 32, margin: 8, borderRadius: 16,
              }}
            >
                <Text style={{ fontWeight: '600'}}>Места</Text>
            </TabHeading>}>
          <ExplorePosts
            navigation={this.props.navigation}
            />
        </Tab>
        <Tab heading={
            <TabHeading
              style={{
                width: 105,
                backgroundColor: 'rgba(0,0,0,0)',
                // backgroundColor: 'rgba(0,0,0,.03)',
                height: 32, margin: 8, borderRadius: 16,
              }}
            >
              <Text style={{ fontWeight: '600'}}>Подборки</Text>
            </TabHeading>
          }>
          <ExploreCollections
            navigation={this.props.navigation}
            />
        </Tab>
        <Tab heading={
            <TabHeading
              style={{
                width: 105,
                backgroundColor: 'rgba(0,0,0,0)',
                // backgroundColor: 'rgba(0,0,0,.03)',
                height: 32, margin: 8, borderRadius: 16,
              }}
              >
              <Text style={{ fontWeight: '600'}}>Люди</Text>
            </TabHeading>
          }>
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
    backgroundColor: "white",
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
