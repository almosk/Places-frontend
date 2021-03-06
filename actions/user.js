import { ADD_USER, UPDATE_USER, DELETE_USER, LOG_IN_USER } from './types';

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: {
      user: user
    }
  }
}

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: {
      user: user
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
