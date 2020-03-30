import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import UserSnippet from '../components/UserSnippet';

class ExploreUsers extends Component {
state = {
  postName: '',
  posts: []
}
usersOutput = () => {
  exploreUsers = Object.values(this.props.users.byId).filter(user => user.id !== this.props.users.loggedUser)
  return (
    <FlatList style = { styles.listContainer }
      data = { exploreUsers }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <UserSnippet
          user={ info.item }
          navigation={this.props.navigation}
        />
      )}
    />
  )
}
render() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style = { styles.listContainer }>
        { this.usersOutput() }
        </View>
      </ScrollView>
    </SafeAreaView>
  );}
}
const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    paddingTop: 8
  },
  container: {
    width: '100%',
    paddingTop: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 16
  },
  scrollView: {
    width: '100%',
  },
});

export default ExploreUsers
