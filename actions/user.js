import { ADD_USER, DELETE_USER, LOG_IN_USER } from './types';

export const addUser = (title, id) => {
  return {
    type: ADD_USER,
    payload: {
      title: title,
      id: id
    }
  }
}

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: {
      id: id
    }
  }
}

export const logInUser = id => {
  return {
    type: LOG_IN_USER,
    payload: {
      id: id
    }
  }
}
