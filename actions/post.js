import { ADD_POST, DELETE_POST } from './types';

export const addPost = placeName => {
  return {
    type: ADD_POST,
    payload: {
      placeName: placeName
    }
  }
}

export const deletePost = id => {
  return {
    type: DELETE_POST,
    payload: {
      id: id
    }
  }
}
