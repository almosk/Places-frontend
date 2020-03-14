import { ADD_COLLECTION, DELETE_COLLECTION } from '../actions/types';

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
      const collectionId = Math.max.apply(null, Object.keys(state.byId)) + 1
      const newCollection = {id: collectionId, title: action.payload.title }
      return {
        ...state,
          byId: {
            ...state.byId,
            [collectionId]: newCollection
          }
      }
    default:
      return state;
  }
}

export default collectionReducer;
