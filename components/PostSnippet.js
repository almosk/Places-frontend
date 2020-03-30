import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
// Redux
import { connect } from 'react-redux';


const PostSnippet = (props) => {

// Props:
// post_id

user_id = () => {
  if (props.postUser !== null && props.postUser !== '' && typeof props.postUser !== "undefined") {
    return(
      <Text style = { styles.collectionTitle }>
        { props.postUser.title }
      </Text>
    )
  }
}

return (
  <TouchableOpacity
    onPress={() => {
      props.navigation.navigate('Place', {
        post_id: props.post_id,
        post_title: props.post.title
      })
    }}
  >
    <View style = { styles.postSnippet }>
      <View style = { styles.horizontaContainer }>
        <View style = { styles.image }></View>
        <View>
          <Text style = { styles.postTitle }>
            { props.post.title }
          </Text>
          <Text style = { styles.collectionTitle }>
            { this.user_id() }
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
)}

const styles = StyleSheet.create({
  postSnippet: {
    width: '100%',
    height: 72,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  horizontaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postButton: {
    width: '30%'
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#595959",
    marginBottom: 2,
  },
  collectionTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#808080"
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#F3F3F3',
    marginRight: 12
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.byId[ownProps.post_id],
    postUser: state.users.byId[ownProps.post_id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostSnippet)
