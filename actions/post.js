import { ADD_POST, DELETE_POST, UPDATE_POST } from './types';

export const addPost = (title, id, user_id) => {
  return {
    type: ADD_POST,
    payload: {
      title: title,
      id: id,
      user_id: user_id
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

export const updatePost = (title, id) => {
  return {
    type: UPDATE_POST,
    payload: {
      title: title,
      id: id
    }
  }
}
