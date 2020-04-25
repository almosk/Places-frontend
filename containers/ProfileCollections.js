import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Text, Tab, Tabs, TabHeading } from 'native-base';
import CollectionSnippet from '../components/CollectionSnippet';
// Redux
import { connect } from 'react-redux';
import { addProfileCollection } from '../actions/profileCollection';

class ProfileCollections extends Component {
state = {
  postName: '',
  posts: []
}

componentDidMount(){
  this.getCollectionsIndex()
}
getCollectionsIndex = () => {
  return fetch('http://localhost:3000/v1/collections/profile_collections.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        collectionsIsLoading: false,
        collectionsDataSource: responseJson,
      }, function(){
        this.state.collectionsDataSource.forEach(collection => this.props.addProfileCollection(collection))
      });

    })
    .catch((error) =>{
      console.error(error);
    })
}

render() {
  return (
    <View style={styles.container}>
      <FlatList style = { styles.listContainer }
        data = { this.props.profileCollections }
        ListHeaderComponent={
          <View style={ styles.buttonContainer }>
            <Button
              light
              block
              rounded
              onPress={() => {
                this.props.navigation.navigate('New Collection')
              }}
            >
            <Text>New Collection</Text>
            </Button>
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem = { info => (
          <CollectionSnippet
            collection={ info.item }
            navigation={this.props.navigation}
          />
        )}
      />
    </View>
  );}
}
const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 16,

  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 16,
    paddingTop: 0
  },
  scrollView: {
    width: '100%',
  },
});

const mapStateToProps = state => {
  return {
    profileCollections: Object.values(state.profileCollections.byId),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProfileCollection: (collection) => {
      dispatch(addProfileCollection(collection))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCollections)


// export default ProfileCollections
