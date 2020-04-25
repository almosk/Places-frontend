import { ADD_PROFILE_COLLECTION, DELETE_PROFILE_COLLECTION, UPDATE_PROFILE_COLLECTION } from '../actions/types';
import { merge } from 'lodash'


const initialState = {
  byId: {
    // 0: {id: 0, title: 'ReactsCollection'},
    // 1: {id: 1, title: 'Parks'}
  },
  allIds : [0, 1]
};

const profileCollectionReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PROFILE_COLLECTION:
      state['byId'][action.payload.collection.id]={}
      merge(state['byId'][action.payload.collection.id], action.payload.collection)
      return merge({}, state)

    case UPDATE_PROFILE_COLLECTION:
      merge(state['byId'][action.payload.collection.id], action.payload.collection)
      return merge({}, state)

    default:
      return state;
  }
}

export default profileCollectionReducer;
