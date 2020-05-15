import { deleteIn } from 'lodash-redux-immutability';
import { merge } from 'lodash'
import { combineReducers } from 'redux';
import { ADD_PROFILE_POST, DELETE_PROFILE_POST, UPDATE_PROFILE_POST } from '../actions/types';

const initialState = {
    byId: {
      // 0: {id: 0, title: 'ReactNative Coffee', user_id:'0'}
    },
    allIds : [0]
}

const profilePostReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PROFILE_POST:
      state['byId'][action.payload.post.id]={}
      merge(state['byId'][action.payload.post.id], action.payload.post)
      return merge({}, state)

    case UPDATE_PROFILE_POST:
      merge(state['byId'][action.payload.post.id], action.payload.post)
      return merge({}, state)

    case DELETE_PROFILE_POST:
      delete state.byId[action.payload.id]
      return merge({}, state)

    default:
      return state;
  }
}

export default profilePostReducer;
