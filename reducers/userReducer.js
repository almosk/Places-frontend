import { deleteIn } from 'lodash-redux-immutability';
import { merge } from 'lodash'
import { combineReducers } from 'redux';
import { ADD_USER, DELETE_USER, LOG_IN_USER } from '../actions/types';

const initialState = {
    byId: {
      0: {id: 0, title: 'Alexander Moskovskiy'},
      1: {id: 1, title: 'Sergey Ivanov'},
      // 2: {id: 2, title: 'Gorky Park'},
    },
    allIds : [0, 1, 2],
    loggedUser: 0
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER:
      state.byId[action.payload.id] = {id: action.payload.id, title: action.payload.title }
      return merge({}, state)

    case DELETE_USER:
      delete state.byId[action.payload.id]
      return merge({}, state)

    case LOG_IN_USER:
      state.loggedUser = action.payload.id
      return merge({}, state)

    default:
      return state;
  }
}

export default userReducer;