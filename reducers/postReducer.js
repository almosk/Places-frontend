import { deleteIn } from 'lodash-redux-immutability';
import { combineReducers } from 'redux';
import { ADD_POST, DELETE_POST } from '../actions/types';

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
      // const postId = Math.max.apply(null, Object.keys(state.byId)) + 1
      const postId = action.payload.id
      const newPost = {id: postId, title: action.payload.title }
      return {
        ...state,
          byId: {
            ...state.byId,
            [postId]: newPost
          }
      }
    case DELETE_POST:
      // const newState = deleteIn(state, ['posts', 'byId', action.payload.id])
      // console.log(state);
      // console.log(newState);
      delete state.byId[action.payload.id]
      return {
        // newState
        // state
        ...state,
          byId: Object.keys(state.byId).reduce((result, key) => {
            if (key !== action.payload.id) {
              result[key] = state.byId[key];
            }
              return result;
          }, {})
      }
    default:
      return state;
  }
}

export default postReducer;
