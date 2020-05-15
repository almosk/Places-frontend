import { ADD_PROFILE_POST, DELETE_PROFILE_POST, UPDATE_PROFILE_POST } from './types';

export const addProfilePost = (post) => {
  return {
    type: ADD_PROFILE_POST,
    payload: {
      post: post
    }
  }
}

export const deleteProfilePost = id => {
  return {
    type: DELETE_PROFILE_POST,
    payload: {
      id: id
    }
  }
}

export const updateProfilePost = (post) => {
  return {
    type: UPDATE_PROFILE_POST,
    payload: {
      post:post
    }
  }
}
