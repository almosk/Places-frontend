import { ADD_COLLECTION, UPDATE_COLLECTION, DELETE_COLLECTION } from './types';

export const addCollection = (title, id, user_id, user_title, url) => {
  return {
    type: ADD_COLLECTION,
    payload: {
      title: title,
      id: id,
      user_id: user_id,
      user_title: user_title,
      url: url
    }
  }
}

export const updateCollection = (title, id, user_id, user_title, url, posts) => {
  return {
    type: UPDATE_COLLECTION,
    payload: {
      title: title,
      id: id,
      user_id: user_id,
      user_title: user_title,
      url: url,
      posts: posts
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
