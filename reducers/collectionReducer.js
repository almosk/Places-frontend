import { ADD_COLLECTION, DELETE_COLLECTION, UPDATE_COLLECTION } from '../actions/types';
import { merge } from 'lodash'


const initialState = {
  byId: {
    // 0: {id: 0, title: 'ReactsCollection'},
    // 1: {id: 1, title: 'Parks'}
  },
  allIds : [0, 1]
};

const collectionReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COLLECTION:
      state['byId'][action.payload.id] = {
        id: action.payload.id,
        title: action.payload.title,
        user_id: action.payload.user_id,
        user_title: action.payload.user_title,
        url: action.payload.url
      }
      return merge({}, state)

    case UPDATE_COLLECTION:
      state['byId'][action.payload.id]['title'] = action.payload.title
      state['byId'][action.payload.id]['user_id'] = action.payload.user_id
      state['byId'][action.payload.id]['user_title'] = action.payload.user_title
      state['byId'][action.payload.id]['url'] = action.payload.url
      state['byId'][action.payload.id]['posts'] = action.payload.posts
      return merge({}, state)

    default:
      return state;
  }
}

export default collectionReducer;
