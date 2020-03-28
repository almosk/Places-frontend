import { ADD_COLLECTION, DELETE_COLLECTION } from './types';

export const addCollection = (title, id) => {
  return {
    type: ADD_COLLECTION,
    payload: {
      title: title,
      id: id
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
