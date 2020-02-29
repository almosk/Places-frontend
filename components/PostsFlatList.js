import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PostSnippet from '../components/PostSnippet';

const PostsFlatList = (props) => {
  return (
    <FlatList style = { styles.listContainer }
      data={props.data}
      renderItem={({ item }) =>
        <PostSnippet
          post={item}
          title={ item.title }
          id={ item.id }
          deletePost={ props.deletePost }
          navigation={props.navigation}
        />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default PostsFlatList;
