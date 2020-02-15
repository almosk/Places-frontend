import { ADD_POST, DELETE_POST } from './types';

export const addPost = title => {
  return {
    type: ADD_POST,
    payload: {
      title: title
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
