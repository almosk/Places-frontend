import { ADD_POST, DELETE_POST } from './types';

export const addPost = (title, id) => {
  return {
    type: ADD_POST,
    payload: {
      title: title,
      id: id
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
