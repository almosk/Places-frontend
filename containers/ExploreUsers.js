import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import UserSnippet from '../components/UserSnippet';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
// Redux
import { connect } from 'react-redux';
import { addUser } from '../actions/user';


class ExploreUsers extends Component {

state = {
  inputText: '',
  posts: []
}

componentDidMount(){
  this.getUsersIndex()
}

getUsersIndex = () => {
  return fetch('http://localhost:3000/v1/users.json', {
  }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        usersIsLoading: false,
        usersDataSource: responseJson,
      }, function(){
        // console.log('back', this.state.postsDataSource);
        this.state.usersDataSource.forEach(user => this.props.addUser(user))
        // this.state.postsDataSource.forEach(post => console.log(post))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}

usersOutput = (data) => {
  return (
    <FlatList style = { styles.listContainer }
      data={data}
      renderItem={({ item }) =>
        <UserSnippet
          user={item}
          navigation={this.props.navigation}
        />}
      keyExtractor={item => item.id.toString()}
    />
  );
}

render() {
  return (
    <View style={styles.container}>
      { this.usersOutput(this.props.users) }
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  postInput: {
    width: '70%'
  },
  postButton: {
    width: '30%'
  },
  newPostButton:{
    marginTop: '130px'
  },
  listContainer: {
    paddingTop: 16,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    padding: 16
  }
});

const mapStateToProps = state => {
  return {
    users: Object.values(state.users.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => {
      dispatch(addUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreUsers)
