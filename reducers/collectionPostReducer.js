import { ADD_COLLECTION_POST } from '../actions/types';
import { merge } from 'lodash'

const initialState = {
  byId: {
    0: {id: 0, collectionId: 0, postId: 1},
    // 1: {id: 1, collectionId: 1, postId: 2}
  },
  allIds : [0, 1]
};

const collectionPostReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COLLECTION_POST:
      // const collectionPostId = Math.max.apply(null, Object.keys(state.byId)) + 1
      // const newCollectionPost = {id: collectionPostId, collectionId: action.payload.collectionId, postId: action.payload.postId }
      // return {
      //   ...state,
      //     byId: {
      //       ...state.byId,
      //       [collectionPostId]: newCollectionPost
      //     }
      // }
      state['byId'][action.payload.id] = {id: action.payload.id, collection_id: action.payload.collection_id, post_id: action.payload.post_id }
      return merge({}, state)
    default:
      return state;
  }
}

export default collectionPostReducer;
