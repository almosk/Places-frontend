import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import PostExploreSnippet from '../components/PostExploreSnippet';
import CollectionSnippet from '../components/CollectionSnippet';
import PButton from '../components/PButton';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import { typo, color, COLOR } from '../styles'
// Redux
import { connect } from 'react-redux';
import { updateUser } from '../actions/user';


// Props
// this.props.route.params.user

class UserScreen extends Component {
  state = {}

componentDidMount(){
  this.getUser()
}
getUser = () => {
  return fetch('http://localhost:3000/v1/users/' + this.props.route.params.user.id + '.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        usersIsLoading: false,
        userDataSource: responseJson,
      }, function(){
        // this.state.usersDataSource.forEach(user => this.props.updateUser(user))
        // console.log(this.state.userDataSource);
        this.props.updateUser(this.state.userDataSource)
      });
    })
    .catch((error) =>{
      console.error(error);
    })
}

userPosts = (data) => {
  return (
    <FlatList style = { styles.listContainer }
      data={data}
      renderItem={({ item }) =>
        <PostExploreSnippet
          id={item.id}
          url={item.url}
          post={item}
          navigation={this.props.navigation}
        />}
      keyExtractor={item => item.id.toString()}
    />
  )
}

userCollections = (data) => {
  return (
    <View>
      <FlatList style = { styles.listContainer }
        data = { data }
        keyExtractor={(item, index) => index.toString()}
        renderItem = { info => (
          <CollectionSnippet
            collection={ info.item }
            navigation={this.props.navigation}
            type={'explore'}
          />
        )}
      />
    </View>
  )
}


render() {
  return (
    <Container>
      <View style = { styles.title }>
        <View style = { styles.horizontalContainer }>
          <Text style = { [typo.t32, color.black80] }>{ this.props.route.params.user.title }</Text>
          <ImageBackground source={{uri: this.props.route.params.user.avatar}} style={styles.image} imageStyle={{ borderRadius: 44 }}></ImageBackground>
        </View>
        <PButton
          text= {'Подписаться'}
          textColor = { COLOR.white }
          color = { COLOR.blue }
          onPress = {()=>''}
          />
      </View>

      <View style={ styles.container }>
        <View>
          <Tabs
            renderTabBar={() =>
              <ScrollableTab
                style={{
                  width: 240,
                  marginHorizontal: 80,
                  borderWidth: 0,
                  backgroundColor: 'rgba(0,0,0,0)',
                }}
                tabsContainerStyle={{ width: 240 }}
              />}
            tabBarUnderlineStyle={{ height: 40, padding: 8, marginBottom: 4, borderRadius: 20, backgroundColor: 'rgba(0,0,0,.05)', zIndex: 0 }}
          >
            <Tab
              heading={'Места'}
              activeTabStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
              tabStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
              activeTextStyle={[typo.t16, color.black80]}
              textStyle={[typo.t16, color.black30]}
              >
              { this.userPosts(this.props.user.posts) }
            </Tab>
            <Tab
              heading={'Подборки'}
              activeTabStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
              tabStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
              activeTextStyle={[typo.t16, color.black80]}
              textStyle={[typo.t16, color.black30]}
              >
              { this.userCollections(this.props.user.collections) }
            </Tab>
          </Tabs>
        </View>
      </View>
    </Container>
)}
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    width: '100%',
    marginTop: 16,
    padding: 16,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: 'white'
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  smallHeading: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
  button: {
    width: '100%',
    padding: 10,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff"
  },
  smallButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#F3F3F3',
    marginRight: 12
  },
  listContainer: {
    paddingTop: 16,
    width: '100%',
    height: '100%',
  },
})

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.byId[ownProps.route.params.user.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)

// export default PostScreen;
