import { deleteIn } from 'lodash-redux-immutability';
import { merge } from 'lodash'
import { combineReducers } from 'redux';
import { ADD_USER, DELETE_USER, LOG_IN_USER } from '../actions/types';

const initialState = {
    byId: {
      // 0: {id: 0, title: 'Alexander Moskovskiy'},
      // 1: {id: 1, title: 'Sergey Ivanov'}
    },
    allIds : [0, 1],
    loggedUser: 4
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER:
      state['byId'][action.payload.user.id]={}
      merge(state['byId'][action.payload.user.id], action.payload.user)
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
