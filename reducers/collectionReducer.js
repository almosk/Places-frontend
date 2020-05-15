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
      state['byId'][action.payload.collection.id]={}
      merge(state['byId'][action.payload.collection.id], action.payload.collection)
      return merge({}, state)

    case UPDATE_COLLECTION:
      merge(state['byId'][action.payload.collection.id], action.payload.collection)
      return merge({}, state)

    default:
      return state;
  }
}

export default collectionReducer;
