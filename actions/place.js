import { ADD_PLACE, DELETE_PLACE } from './types';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: {
      placeName: placeName
    }
  }
}

export const deletePlace = id => {
  return {
    type: DELETE_PLACE,
    payload: {
      id: id
    }
  }
}
