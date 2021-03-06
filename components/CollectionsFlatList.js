import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CollectionSnippetSmall from '../components/CollectionSnippetSmall';

const CollectionsFlatList = (props) => {
  return (
    <FlatList style = { styles.listContainer }
      data={props.data}
      renderItem={({ item }) =>
        <CollectionSnippetSmall
          selectedCollectionId = { props.selectedCollectionId }
          collection={item}
          setCollection={ props.setCollection }
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

export default CollectionsFlatList;
