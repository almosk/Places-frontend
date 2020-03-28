import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import UserSnippet from '../components/UserSnippet';
// Redux
import { connect } from 'react-redux';
import { logInUser } from '../actions/user';

class ProfileInfoScreen extends Component {

usersOutput = () => {
  let users = Object.values(this.props.users.byId)
  return(
    <FlatList style = { styles.listContainer }
      data={users}
      renderItem={({ item }) =>
        <UserSnippet
          user={item}
          navigation={this.props.navigation}
          loggedUser={this.props.users.loggedUser}
          logInUser={this.props.logInUser}
        />}
      keyExtractor={item => item.id}
    />
  )
}

render() {
  let loggedUser = Object.values(this.props.users.byId).filter(user => user.id == this.props.users.loggedUser)[0]
  // console.log(loggedUser);
  return (
    <View style = { styles.container }>
      <View style = { styles.container }>
        <Text style = { styles.smallHeading }>Logged:</Text>
        <UserSnippet
          user={loggedUser}
          navigation={this.props.navigation}
          loggedUser={this.props.users.loggedUser}
          logInUser={this.props.logInUser}
        />
      </View>
      <View style = { styles.container }>
        <Text style = { styles.smallHeading }>All users:</Text>
        { this.usersOutput() }
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
  container: {
    width: '100%',
    paddingTop: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  smallHeading: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
})

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logInUser: (id) => {
      dispatch(logInUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoScreen)
