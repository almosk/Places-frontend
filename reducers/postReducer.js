import { deleteIn } from 'lodash-redux-immutability';
import { merge } from 'lodash'
import { combineReducers } from 'redux';
import { ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/types';

const initialState = {
    byId: {
      0: {id: 0, title: 'ReactNative Coffee'},
      // 1: {id: 1, title: 'Salut Cafe'},
      // 2: {id: 2, title: 'Gorky Park'},
    },
    allIds : [0, 1, 2]
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      state['byId'][action.payload.id] = {id: action.payload.id, title: action.payload.title }
      return merge({}, state)

    case UPDATE_POST:
      state['byId'][action.payload.id]['title'] = action.payload.title
      return merge({}, state)

    case DELETE_POST:
      delete state.byId[action.payload.id]
      return merge({}, state)
      
    default:
      return state;
  }
}

export default postReducer;
