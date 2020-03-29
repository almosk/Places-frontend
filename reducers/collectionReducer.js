import { ADD_COLLECTION, DELETE_COLLECTION } from '../actions/types';
import { merge } from 'lodash'


const initialState = {
  byId: {
    0: {id: 0, title: 'ReactsCollection'},
    // 1: {id: 1, title: 'Parks'}
  },
  allIds : [0, 1]
};

const collectionReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COLLECTION:
      state['byId'][action.payload.id] = {id: action.payload.id, title: action.payload.title, user_id: action.payload.user_id }
      return merge({}, state)
    default:
      return state;
  }
}

export default collectionReducer;
