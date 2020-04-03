import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ProfilePosts from '../containers/ProfilePosts';
import ProfileCollections from '../containers/ProfileCollections';
import { Container, Text, Tab, Tabs, TabHeading } from 'native-base';

class ProfileScreen extends Component {
//
// componentDidMount(){
//   this.getPostsFromBackend()
//   this.getCollectionsFromBackend()
//   this.getUsersFromBackend()
//   this.getCollectionPostsFromBackend()
// }
// getCollectionsFromBackend = () => {
//   return fetch('http://localhost:3000/collections.json')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       this.setState({
//         collectionsIsLoading: false,
//         collectionsDataSource: responseJson,
//       }, function(){
//         // console.log(this.state.collectionsDataSource[0].id);
//         this.state.collectionsDataSource.forEach(collection => this.props.addCollection(collection.title, collection.id, collection.user_id))
//       });
//
//     })
//     .catch((error) =>{
//       console.error(error);
//     });
// }
// getUsersFromBackend = () => {
//   return fetch('http://localhost:3000/users.json')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       this.setState({
//         usersIsLoading: false,
//         usersDataSource: responseJson,
//       }, function(){
//         this.state.usersDataSource.forEach(user => this.props.addUser(user.title, user.id))
//         // this.state.dataSource.forEach(post => console.log(post.title, post.id))
//       });
//
//     })
//     .catch((error) =>{
//       console.error(error);
//     })
// }

render() {
  return (
    <Container>
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
    </Container>
  )
}}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})

export default ProfileScreen
