import { ADD_POST, DELETE_POST, UPDATE_POST } from './types';

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: {
      post: post
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

export const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    payload: {
      post:post
    }
  }
}
