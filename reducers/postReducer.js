import { deleteIn } from 'lodash-redux-immutability';
import { merge } from 'lodash'
import { combineReducers } from 'redux';
import { ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/types';

const initialState = {
    byId: {
      // 0: {id: 0, title: 'ReactNative Coffee', user_id:'0'}
    },
    allIds : [0]
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      // console.log(state);
      state['byId'][action.payload.id] = {
        id: action.payload.id,
        title: action.payload.title,
        user_id: action.payload.user_id,
        user_title: action.payload.user_title,
        url: action.payload.url
      }
      return merge({}, state)

    case UPDATE_POST:
      // юзать merge
      state['byId'][action.payload.id]['title'] = action.payload.title
      state['byId'][action.payload.id]['user_id'] = action.payload.user_id
      state['byId'][action.payload.id]['user_title'] = action.payload.user_title
      state['byId'][action.payload.id]['description'] = action.payload.description
      state['byId'][action.payload.id]['collections'] = action.payload.collections
      return merge({}, state)

    case DELETE_POST:
      delete state.byId[action.payload.id]
      return merge({}, state)

    default:
      return state;
  }
}

export default postReducer;
