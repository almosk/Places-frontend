import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ProfilePosts from '../containers/ProfilePosts';
import ProfileCollections from '../containers/ProfileCollections';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';


class ProfileScreen extends Component {

render() {
  return (
    <Container>
      <View style={ styles.container }>
        <View>
          <Tabs>
            <Tab heading={ <TabHeading><Text>Posts</Text></TabHeading>}>
              <ProfilePosts navigation={this.props.navigation}/>
            </Tab>
            <Tab heading={ <TabHeading><Text>Collections</Text></TabHeading>}>
              <ProfileCollections navigation={this.props.navigation}/>
            </Tab>
          </Tabs>
        </View>
      </View>
    </Container>
  )
}}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});

export default ProfileScreen
