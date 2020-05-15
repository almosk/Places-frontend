import { ADD_COLLECTION, UPDATE_COLLECTION, DELETE_COLLECTION } from './types';

export const addCollection = (collection) => {
  return {
    type: ADD_COLLECTION,
    payload: {
      collection: collection
    }
  }
}

export const updateCollection = (collection) => {
  return {
    type: UPDATE_COLLECTION,
    payload: {
      collection: collection
    }
  }
}

export const deleteCollection = id => {
  return {
    type: DELETE_COLLECTION,
    payload: {
      id: id
    }
  }
}
