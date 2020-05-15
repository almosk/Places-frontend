import { ADD_PROFILE_COLLECTION, UPDATE_PROFILE_COLLECTION, DELETE_PROFILE_COLLECTION } from './types';

export const addProfileCollection = (collection) => {
  return {
    type: ADD_PROFILE_COLLECTION,
    payload: {
      collection: collection
    }
  }
}

export const updateProfileCollection = (collection) => {
  return {
    type: UPDATE_PROFILE_COLLECTION,
    payload: {
      collection: collection
    }
  }
}

export const deleteProfileCollection = id => {
  return {
    type: DELETE_PROFILE_COLLECTION,
    payload: {
      id: id
    }
  }
}
