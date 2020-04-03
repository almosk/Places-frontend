import { ADD_POST, DELETE_POST, UPDATE_POST } from './types';

export const addPost = (title, id, user_id, user_title, url) => {
  return {
    type: ADD_POST,
    payload: {
      title: title,
      id: id,
      user_id: user_id,
      user_title: user_title,
      url: url
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

export const updatePost = (title, id, user_id, user_title, url, description, collections) => {
  return {
    type: UPDATE_POST,
    payload: {
      title: title,
      id: id,
      user_id: user_id,
      user_title: user_title,
      url: url,
      description: description,
      collections: collections
    }
  }
}
